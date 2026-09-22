<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte'
  import { NAV_SECTIONS } from './navbar.helpers'
  import Button from '@/components/ui/Button.svelte'

  export let isOpen: boolean = false
  export let activeSectionId: string = 'hero-scroll-track'
  export let onClose: () => void = () => {}

  const handleLinkClick = (id: string, href: string, e: MouseEvent) => {
    e.preventDefault()
    onClose()
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
      history.pushState(null, '', href)
    }
  }
</script>

{#if isOpen}
  <div class="md:hidden border-t border-border/80 dark:border-white/10 bg-card dark:bg-canvas shadow-2xl px-5 py-4 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar animate-in slide-in-from-top-2 duration-200">
    <!-- Quick Section Links -->
    <div class="space-y-1">
      <p class="label-caps text-xs font-semibold text-secondary px-2 py-1">Navigasi Halaman</p>
      {#each NAV_SECTIONS as item}
        {@const isActive = activeSectionId === item.id}
        <a
          href={item.href}
          on:click={(e) => handleLinkClick(item.id, item.href, e)}
          class="flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 group {isActive
            ? 'bg-main text-canvas dark:bg-white dark:text-slate-950 font-bold shadow-xs'
            : 'hover:bg-nested/80 dark:hover:bg-white/5 text-main dark:text-white font-medium'
          }"
        >
          <div class="min-w-0">
            <span class="font-heading text-sm block">
              {item.label}
            </span>
            {#if item.desc}
              <span class="text-xs truncate block {isActive ? 'text-canvas/70 dark:text-slate-950/70' : 'text-secondary'}">
                {item.desc}
              </span>
            {/if}
          </div>
          <ArrowUpRight size={15} class="shrink-0 ml-2 {isActive ? 'text-canvas dark:text-slate-950' : 'text-muted dark:text-white/40 group-hover:text-orange'}" />
        </a>
      {/each}
    </div>

    <!-- CTA Button -->
    <div class="pt-2 border-t border-border/60 dark:border-white/10">
      <Button
        href="#contact"
        variant="primary"
        fullWidth
        on:click={onClose}
        class="!rounded-full !py-3 font-semibold text-sm shadow-sm"
      >
        Konsultasi & Hubungi Tim
      </Button>
    </div>
  </div>
{/if}
