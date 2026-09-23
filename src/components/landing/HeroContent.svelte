<script lang="ts">
  import Button from "@/components/ui/Button.svelte";
</script>

<div class="w-full h-full flex flex-col justify-between pt-16 md:pt-20">
  <!-- Atmospheric Scrim Layer: Lapisan asap difusi rata dan seimbang tanpa gumpalan sudut -->
  <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Asap horizontal atas rata untuk mendukung keterbacaan H1 -->
    <div
      class="absolute top-0 inset-x-0 h-80 sm:h-96 bg-gradient-to-b from-canvas/85 via-canvas/40 to-transparent transition-colors duration-300"
    >
    </div>

    <!-- Asap horizontal bawah rata untuk mendukung keterbacaan deskripsi dan tombol -->
    <div
      class="absolute bottom-0 inset-x-0 h-72 sm:h-80 bg-gradient-to-t from-canvas/85 via-canvas/45 to-transparent transition-colors duration-300"
    >
    </div>

    <!-- Diffused ambient glow pengikat panggung -->
    <div
      class="absolute inset-0 bg-canvas/15 dark:bg-black/20 transition-colors duration-300"
    >
    </div>
  </div>

  <!-- Stage Composition: H1 Kiri Atas & Deskripsi Kanan Bawah -->
  <main
    class="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-2 sm:pt-4 md:pt-5 pb-6 sm:pb-8 md:pb-10 flex flex-col justify-between overflow-x-clip"
  >
    <!-- Top-Left: H1 Masif 3 Baris Rapat Proporsional -->
    <div class="w-full flex justify-start items-start hero-enter-left">
      <div class="relative max-w-4xl">
        <!-- Background asap difusi halus di belakang teks H1 -->
        <div
          class="absolute -inset-6 sm:-inset-8 bg-canvas/50 dark:bg-canvas/60 blur-2xl -z-10 pointer-events-none rounded-3xl"
        >
        </div>

        <h1
          class="heading-hero text-main max-w-2xl lg:max-w-3xl select-none"
        >
          <span class="block">Website toko mandiri</span>
          <span class="block">untuk seluruh UMKM</span>
          <span class="block">Banyuwangi</span>
        </h1>
      </div>
    </div>

    <!-- Open Center Stage Spacer -->
    <div class="flex-1 min-h-[30px] pointer-events-none"></div>

    <!-- Bottom-Right: Deskripsi Padat 3 Baris & CTA -->
    <div class="w-full flex justify-end items-end hero-enter-right">
      <div
        class="relative w-full max-w-[320px] sm:max-w-[350px] flex flex-col items-start space-y-5 text-left"
      >
        <!-- Bayangan difusi peredam lembut di belakang teks deskripsi -->
        <div
          class="absolute -inset-4 bg-canvas/50 dark:bg-canvas/65 blur-xl -z-10 pointer-events-none rounded-2xl"
        >
        </div>

        <p class="desc-hero text-main transition-colors duration-200">
          Miliki katalog online profesional tanpa koding dan terima
          pesanan langsung via WhatsApp.
        </p>

        <!-- CTA Button -->
        <Button
          href="#contact"
          variant="orange"
          size="md"
          class="!rounded-full !px-6 !py-3 text-base shadow-md hover:shadow-lg active:scale-[0.97] transition-all group cursor-pointer"
        >
          <span class="tracking-wide font-semibold">Buat Toko Gratis</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Button>
      </div>
    </div>
  </main>
</div>
