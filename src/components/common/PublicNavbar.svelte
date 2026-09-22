<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { Sun, Moon, X } from 'lucide-svelte'
  import { NAV_SECTIONS, SECTION_IDS } from './navbar.helpers'
  import NavbarMobileDrawer from './NavbarMobileDrawer.svelte'
  import Button from '@/components/ui/Button.svelte'

  export let currentPath: string = ''

  let isDark = true
  let isMobileMenuOpen = false
  let navMode: 'transparent' | 'hidden' | 'normal' = currentPath === '/' ? 'transparent' : 'normal'
  let ticking = false
  let activeSectionId = 'hero-scroll-track'

  const updateActiveSection = () => {
    if (typeof window === 'undefined') return

    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight

    if (windowHeight + scrollY >= docHeight - 120) {
      activeSectionId = 'contact'
      return
    }

    const triggerOffset = windowHeight * 0.35

    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const id = SECTION_IDS[i]
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerOffset && rect.bottom > 0) {
          activeSectionId = id
          return
        }
      }
    }

    activeSectionId = 'hero-scroll-track'
  }

  const updateNavMode = () => {
    const heroTrack = document.getElementById('hero-scroll-track')
    if (heroTrack) {
      const rect = heroTrack.getBoundingClientRect()
      const maxScroll = rect.height - window.innerHeight

      if (window.scrollY <= 40 || -rect.top <= 40) {
        navMode = 'transparent'
        return
      } else if (rect.bottom > 80 && -rect.top < maxScroll) {
        navMode = 'hidden'
        return
      }
    }

    const footer = document.getElementById('contact') || document.querySelector('footer')
    if (footer) {
      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (footerRect.top <= windowHeight * 0.6 || windowHeight + window.scrollY >= docHeight - 50) {
        navMode = 'hidden'
        return
      }
    }

    navMode = 'normal'
  }

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavMode()
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  }

  const handleNavClick = (id: string, e: MouseEvent) => {
    e.preventDefault()
    const lenis = (window as any).__lenis

    if (id === 'hero-scroll-track' || id === 'hero' || id === 'top' || id === '') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      activeSectionId = 'hero-scroll-track'
      history.pushState(null, '', window.location.pathname)
      return
    }

    const targetEl = document.getElementById(id)
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: 0, duration: 1.2 })
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      }
      activeSectionId = id
      history.pushState(null, '', `#${id}`)
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#hero-scroll-track' || window.location.hash === '#hero') {
        history.replaceState(null, '', window.location.pathname)
        window.scrollTo(0, 0)
      }
    }

    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark = savedTheme ? savedTheme === 'dark' : prefersDark

    if (!currentPath && typeof window !== 'undefined') {
      currentPath = window.location.pathname
    }

    updateNavMode()
    updateActiveSection()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  const toggleTheme = () => {
    isDark = !isDark
    applyTheme(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const applyTheme = (dark: boolean) => {
    const themeName = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', themeName)
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  $: headerClasses = isMobileMenuOpen
    ? 'translate-y-0 opacity-100 pointer-events-auto bg-card dark:bg-canvas border-b border-border/80 dark:border-white/10 shadow-md backdrop-blur-none'
    : navMode === 'transparent'
      ? 'translate-y-0 opacity-100 pointer-events-auto bg-transparent border-b border-transparent shadow-none backdrop-blur-none'
      : navMode === 'hidden'
        ? '-translate-y-full opacity-0 pointer-events-none border-b border-transparent shadow-none'
        : 'translate-y-0 opacity-100 pointer-events-auto navbar-glass-surface border-b border-border/80 dark:border-white/10 shadow-sm backdrop-blur-md'
</script>

<header class="sticky top-0 z-50 w-full box-border transition-all duration-300 ease-out {headerClasses}">
  <div class="w-full h-16 md:h-20 min-h-[64px] md:min-h-[80px] max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-4 box-border">
    
    <!-- 1. Left: Architectural Pill Navigation Capsules (Desktop only) -->
    <nav class="hidden md:flex items-center gap-1 lg:gap-1.5 shrink-0" aria-label="Navigasi Utama">
      {#each NAV_SECTIONS as item (item.id)}
        {@const isActive = activeSectionId === item.id}
        <a
          href={item.href}
          on:click={(e) => handleNavClick(item.id, e)}
          class="{isActive
            ? 'bg-main text-canvas dark:bg-white dark:text-slate-950 font-bold shadow-sm'
            : 'bg-card/70 hover:bg-card text-main/80 hover:text-main dark:bg-white/5 dark:hover:bg-white/15 dark:text-white/85 dark:hover:text-white font-medium border border-border/80 dark:border-white/15 backdrop-blur-sm'
          } px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full label-caps text-xs tracking-wider transition-all duration-200 shrink-0 cursor-pointer select-none"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <!-- Mobile Left Brand Indicator (Mobile only) -->
    <div class="md:hidden flex items-center shrink-0">
      <a
        href="/"
        on:click={(e) => handleNavClick('hero-scroll-track', e)}
        class="flex items-center shrink-0 select-none cursor-pointer"
        aria-label="Pinoka Home"
      >
        <img
          src="/assets/logo/logo.webp"
          alt="Pinoka"
          class="h-7 sm:h-8 w-auto object-contain"
          width="98"
          height="30"
          loading="eager"
        />
      </a>
    </div>

    <!-- 2. Center: Brand Logo (Desktop only) -->
    <a
      href="/"
      on:click={(e) => handleNavClick('hero-scroll-track', e)}
      class="hidden md:flex items-center shrink-0 group cursor-pointer transition-transform duration-200 hover:scale-[1.02] select-none"
      aria-label="Pinoka Home"
    >
      <img
        src="/assets/logo/logo.webp"
        alt="Pinoka"
        class="h-8 lg:h-9 w-auto object-contain"
        width="117"
        height="36"
        loading="eager"
      />
    </a>

    <!-- 3. Right: Action Buttons, Theme Toggle, CTA -->
    <div class="flex items-center gap-2 sm:gap-3 shrink-0">
      <a
        href="#contact"
        on:click={(e) => handleNavClick('contact', e)}
        class="{activeSectionId === 'contact'
          ? 'text-orange font-bold'
          : 'text-secondary hover:text-main dark:text-slate-300 dark:hover:text-white font-medium'
        } hidden sm:inline-block label-caps tracking-wider transition-colors shrink-0 cursor-pointer select-none"
      >
        KONTAK
      </a>

      <!-- CTA Button -->
      <Button
        href="#contact"
        variant="primary"
        class="hidden sm:inline-flex !rounded-full !h-10 px-5 text-xs font-semibold tracking-wider uppercase shadow-xs shrink-0"
      >
        Konsultasi
      </Button>

      <!-- Circular Theme Toggle Button -->
      <Button
        id="theme-toggle-btn"
        variant="ghost"
        on:click={toggleTheme}
        aria-label="Ubah tema"
        title={isDark ? 'Mode Terang' : 'Mode Gelap'}
        class="!w-10 !h-10 !p-0 !rounded-full bg-card/70 hover:bg-card border border-neutral-200 dark:border-neutral-800 dark:bg-white/5 dark:hover:bg-white/10 text-main dark:text-white shadow-sm shrink-0"
      >
        {#if isDark}
          <Sun size={18} class="text-amber-400 shrink-0" />
        {:else}
          <Moon size={18} class="text-slate-700 dark:text-white shrink-0" />
        {/if}
      </Button>

      <!-- Clean 2-Bar Burger Mobile Menu Toggle Button -->
      <div class="md:hidden shrink-0">
        <Button
          variant="ghost"
          on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          class="!w-10 !h-10 !p-0 !rounded-full bg-card/70 hover:bg-card border border-neutral-200 dark:border-neutral-800 text-main dark:bg-white/5 dark:text-white shadow-sm shrink-0"
        >
          {#if isMobileMenuOpen}
            <X size={18} class="shrink-0" />
          {:else}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0" aria-hidden="true">
              <line x1="4" y1="8.5" x2="20" y2="8.5" />
              <line x1="4" y1="15.5" x2="20" y2="15.5" />
            </svg>
          {/if}
        </Button>
      </div>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <NavbarMobileDrawer
    isOpen={isMobileMenuOpen}
    {activeSectionId}
    onClose={() => (isMobileMenuOpen = false)}
  />
</header>
