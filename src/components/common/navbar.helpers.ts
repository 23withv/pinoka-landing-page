export type NavSection = {
  id: string
  label: string
  href: string
  desc?: string
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'hero-scroll-track', label: 'BERANDA', href: '/', desc: 'Kembali ke awal hero sinematik' },
  { id: 'manifesto-statement', label: 'VISI', href: '#manifesto-statement', desc: 'Misi & komitmen Pinoka' },
  { id: 'synergy', label: 'SINERGI', href: '#synergy', desc: 'Ekosistem UMKM, Desainer, & Pembeli' },
  { id: 'value-matrix', label: 'ALUR KERJA', href: '#value-matrix', desc: 'Langkah mudah mulai bertumbuh' },
  { id: 'testimonials', label: 'TESTIMONI', href: '#testimonials', desc: 'Cerita sukses para mitra' },
  { id: 'faq', label: 'FAQ', href: '#faq', desc: 'Pertanyaan yang sering diajukan' }
]

export const SECTION_IDS: string[] = [
  'hero-scroll-track',
  'manifesto-statement',
  'synergy',
  'value-matrix',
  'testimonials',
  'faq',
  'contact'
]
