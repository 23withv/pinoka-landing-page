# PETA STRUKTUR FOLDER & BERKAS PROJEK
Sistem Pinoka Landing Page — Ekosistem UMKM, Desainer, & Pembeli

Berikut adalah struktur folder lengkap beserta seluruh berkas murni landing page yang ada di dalam projek ini:

```
pinoka-landing-page/
├── .agents/ # Konfigurasi & workflow agen AI pintar
│   ├── rules/ # Standar aturan & panduan pengembangan
│   │   ├── 00-stack.md                         # [155 baris] Definisi teknologi & framework stack landing page
│   │   ├── 10-process.md                       # [77 baris] SOP & workflow proses pengembangan fitur
│   │   ├── 15-file-size-limits.md              # [20 baris] Batas maksimal 300 baris per file & modularisasi
│   │   ├── 20-code-standards.md                # [154 baris] Standar penulisan clean code & konvensi penamaan
│   │   ├── 30-ui-ux.md                         # [148 baris] Panduan standar desain UI/UX & aksesibilitas
│   │   ├── 31-component-patterns.md            # [51 baris] Pola arsitektur komponen Svelte & Astro
│   │   ├── 40-security.md                      # [98 baris] Protokol keamanan web & validasi data
│   │   ├── 50-design-system-rules.md           # [11 baris] Aturan konsistensi token Design System global
│   │   ├── 50-qa-testing.md                    # [110 baris] Standar penulisan test suite unit & integrasi
│   │   ├── 60-git-strict.md                    # [115 baris] Standar pesan commit Git & version control
│   │   ├── 61-git-light.md                     # [89 baris] Prosedur commit ringan untuk iterasi cepat
│   │   ├── 70-database-selection.md            # [234 baris] Pedoman skema data & arsitektur penyimpanan
│   │   ├── 71-media-selection.md               # [176 baris] Pedoman optimasi media & kompresi aset gambar
│   │   └── language-standards.md               # [18 baris] Standar aturan penulisan bahasa UI frontend
│   ├── skills/ # Kumpulan skill agen AI cerdas
│   │   ├── animate/                            # Skill orkestrasi animasi & transisi UI
│   │   ├── apple-design/                       # Skill desain interaksi & gestur Apple-grade
│   │   ├── caveman/                            # Skill komunikasi terkompresi efisien token
│   │   ├── clean-code/                         # Skill penulisan kode bersih standar Robert C. Martin
│   │   ├── design-taste-frontend/              # Skill anti-slop visual landing page & frontend
│   │   ├── emil-design-eng/                    # Skill mikro-interaksi & UI polish Emil Kowalski
│   │   ├── find-animation-opportunities/       # Skill deteksi peluang animasi UI
│   │   ├── improve-animations/                 # Skill audit & perbaikan kualitas animasi
│   │   ├── ponytail/                           # Skill implementasi minimalis & solusi pragmatis
│   │   ├── review-animations/                  # Skill audit & tinjauan performa animasi UI
│   │   └── README.md                           # [106 baris] Dokumentasi ringkasan projek Pinoka Landing Page
│   ├── workflows/ # Workflow otomatisasi pengerjaan projek
│   │   ├── 00-kickoff.md                       # [155 baris] Workflow kick-off inisialisasi pengerjaan fitur
│   │   ├── 01-cleanup.md                       # [153 baris] Workflow pembersihan kode usang & file yatim
│   │   ├── 10-feature.md                       # [88 baris] Workflow siklus hidup implementasi fitur baru
│   │   └── 20-review.md                        # [100 baris] Workflow audit review kode sebelum rilis
│   └── README.md                           # [131 baris] Dokumentasi ringkasan projek Pinoka Landing Page
├── public/ # Aset statis (gambar, font, logo, sequence frames, 3D model)
├── src/ # Kode sumber utama aplikasi murni landing page
│   ├── components/ # Komponen UI modular Svelte & Astro
│   │   ├── common/ # Komponen navigasi & shell layout umum
│   │   │   ├── Navbar.astro                        # [15 baris] Navigasi utama header base layout Astro
│   │   │   ├── navbar.helpers.ts                   # [26 baris] Helper navigasi dan daftar menu section landing page
│   │   │   ├── NavbarMobileDrawer.svelte           # [65 baris] Drawer navigasi seluler interaktif layar mobile
│   │   │   ├── PublicNavbar.svelte                 # [⚠️ mepet 300 baris - 254 baris] Navbar publik interaktif dengan indikator scroll & blur
│   │   │   └── SmoothScroll.svelte                 # [68 baris] Wrapper smooth scrolling terintegrasi Lenis & GSAP ticker
│   │   ├── landing/ # Komponen antarmuka visual storytelling landing page
│   │   │   ├── FaqSection.svelte                   # [185 baris] Section Frequently Asked Questions interaktif dengan akordeon
│   │   │   ├── FinalCtaSection.svelte              # [55 baris] Section ajakan bertindak (CTA) penutup landing page
│   │   │   ├── HeroCaptions.svelte                 # [154 baris] Komponen caption teks animasi scroll sequence hero
│   │   │   ├── HeroCaptions.ts                     # [77 baris] Data caption hero dan rumus smoothstep opasitas frame
│   │   │   ├── HeroScrollSequence.svelte           # [⚠️ mepet 300 baris - 270 baris] Canvas animasi sequence gambar hero scroll 60fps
│   │   │   ├── LandingFooter.svelte                # [⚠️ mepet 300 baris - 262 baris] Footer responsif khusus halaman utama landing page
│   │   │   ├── synergy.data.ts                     # [71 baris] Data master konten sinergi 3 pilar platform
│   │   │   ├── SynergyOverlay.svelte               # [76 baris] Overlay penjelasan interaktif sinergi 3 ekosistem
│   │   │   ├── SynergySection.svelte               # [⚠️ >300 baris - 358 baris] Section visualisasi 3D sinergi UMKM, desainer, & pembeli
│   │   │   ├── testimonials.data.ts                # [83 baris] Data ulasan & testimoni pelanggan landing page
│   │   │   ├── TestimonialsSection.svelte          # [243 baris] Section ulasan & social proof pengguna platform
│   │   │   ├── TextRevealSection.svelte            # [99 baris] Section animasi teks reveal bertahap saat di-scroll
│   │   │   └── ValueMatrixSection.svelte           # [244 baris] Section matriks keunggulan & nilai tambah ekosistem
│   │   └── ui/ # Komponen antarmuka UI dasar modular
│   │       └── Button.svelte                       # [124 baris] Komponen tombol interaktif modular berbagai varian
│   ├── layouts/ # Layout dasar pembungkus halaman Astro
│   │   └── BaseLayout.astro                    # [72 baris] Layout dasar pembungkus halaman publik, font, & SEO meta
│   ├── pages/ # Rute halaman aplikasi Astro
│   │   ├── 404.astro                           # [22 baris] Halaman error 404 (Not Found) custom bertema Pinoka
│   │   └── index.astro                         # [163 baris] Halaman utama visual storytelling landing page Pinoka
│   ├── styles/ # Gaya global CSS, reset, & Tailwind variables
│   │   └── global.css                          # [⚠️ >300 baris - 732 baris] Variabel Tailwind, gaya global, font Host Grotesk, & reset CSS
│   └── env.d.ts                            # [2 baris] Deklarasi global compiler TypeScript Astro
├── .env                                # [3 baris] Konfigurasi environment variable lokal aplikasi
├── .env.example                        # [4 baris] Contoh variabel lingkungan environment aplikasi
├── .gitattributes                      # [33 baris] Aturan konfigurasi atribut Git & line endings
├── .gitignore                          # [37 baris] Daftar berkas & folder yang diabaikan Git
├── astro.config.mjs                    # [36 baris] Konfigurasi framework Astro & integrasi Svelte
├── bun.lock                            # [⚠️ >300 baris - 829 baris] Lockfile dependensi paket runtime Bun
├── GEMINI.md                           # [145 baris] Dokumentasi peta struktur folder & arsitektur projek
├── package.json                        # [37 baris] Berkas dependensi npm & bun scripts pengerjaan
├── postcss.config.mjs                  # [26 baris] Konfigurasi PostCSS & Tailwind
├── README.md                           # [70 baris] Dokumentasi ringkasan projek Pinoka Landing Page
├── svelte.config.js                    # [6 baris] Konfigurasi compiler & vitePreprocess framework Svelte
├── tailwind.config.mjs                 # [98 baris] Konfigurasi styling token Tailwind CSS & tema
└── tsconfig.json                       # [11 baris] Konfigurasi compiler TypeScript aplikasi
```

---

## 🚀 Arsitektur Visual & Interaktivitas Landing Page

Berikut adalah dokumentasi detail arsitektur teknis visual storytelling landing page **Pinoka**, yang menghubungkan ekosistem **Pelaku UMKM**, **Desainer Template**, dan **Konsumen**:

---

### 1. Hero Image Sequence Scrubber (`HeroScrollSequence.svelte`)

* **Teknologi**: HTML5 Canvas 2D Context terintegrasi GSAP ScrollTrigger.
* **Mekanisme Rendering**:
  * Pemuatan aset preloading berurutan sebanyak 839 frame WebP beresolusi tinggi (`public/frames/frame_0001.webp` s/d `frame_0839.webp`).
  * Canvas secara adaptif menyesuaikan `devicePixelRatio` (DPR) layar dan mempertahankan aspek rasio `cover` tanpa distorsi gambar.
  * Tautan sinkronisasi scroll: Setiap pergeseran scroll pengguna memicu kalkulasi `frameIndex = Math.floor(progress * totalFrames)`, merender gambar frame seketika pada 60fps.
* **Caption Sinkron (`HeroCaptions.svelte` & `HeroCaptions.ts`)**:
  * Mengatur timing kemunculan teks narasi hero berdasarkan rentang progress scroll:
    * Frame 125–215: Kolaborasi Nyata di Titik Temu.
    * Frame 250–405: Satu Aksi Menuju Ruang Baru.
    * Frame 445–605: Menembus Batas Tradisional.
    * Frame 625–725: Etalase Digital Berkualitas Tinggi.
    * Frame 770–839: Ekosistem yang Terus Bertumbuh menuju peta sinergi 3D.

---

### 2. Sinergi Ekosistem 3D WebGL (`SynergySection.svelte`)

* **Teknologi**: Three.js WebGL Renderer + Orbit / Camera Choreography + GLTF Loader.
* **Aset Model 3D**: Model peta interaktif (`public/assets/3d/banyuwangi_map.glb`) dengan pencahayaan dinamis (*ambient light*, *directional light*, dan *rim glow*).
* **3 Pilar Sinergi (`synergy.data.ts` & `SynergyOverlay.svelte`)**:
  1. **Pelaku UMKM**: Toko online instan tanpa coding, katalog terhubung WhatsApp, subdomain siap pakai.
  2. **Desainer Kreatif**: Pasar marketplace template, monetisasi karya desain, bagi hasil transparan.
  3. **Konsumen / Pembeli**: Navigasi katalog responsif, checkout cepat via WhatsApp, direktori toko terdekat.
* **Optimasi Kinerja (Performance Guard)**:
  * Dilengkapi `IntersectionObserver`: Animasi loop WebGL dihentikan otomatis (*pause*) saat section berada di luar viewport layar untuk menghemat daya GPU & memori perangkat seluler.

---

### 3. Smooth Scroll & Frame Orchestration (`SmoothScroll.svelte`)

* **Engine**: Lenis Smooth Scrolling terintegrasi GSAP Ticker.
* **Sinkronisasi Loop**: Menghubungkan putaran scroll Lenis dengan GSAP Ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))`) guna mencegah stuttering animasi saat pengguna menggulir halaman ke atas atau ke bawah secara agresif.
* **Scrollbar Hiding**: Menyembunyikan scrollbar bawaan browser secara global (`scrollbar-width: none;`) demi pengalaman visual sinematik tanpa mengganggu gestur touchpad, mouse wheel, atau swipe sentuh ponsel.

---

### 4. Navigasi Responsif & Minimalist Navbar (`PublicNavbar.svelte`)

* **Desain Letta-Style**: Navbar mengambang (*floating pill*) dengan latar belakang kaca semi-transparan (`backdrop-blur-md bg-surface/80`).
* **Dropdown Menu (`NavbarDropdown.svelte` & `navbar.helpers.ts`)**:
  * Navigasi dropdown ramping dengan panah trailing interaktif (`ChevronDown` berotasi halus).
  * Pintasan cepat seluruh section: Beranda, Visi & Manifesto, Sinergi 3 Pilar, Alur Kerja, Testimoni, FAQ, dan Kontak.
* **Drawer Seluler True-Overlay (`NavbarMobileDrawer.svelte`)**:
  * Mengunci body scroll saat drawer aktif di perangkat seluler (lebar layar < 768px).
  * Tombol navigasi akses cepat WhatsApp dan konsultasi tim.
