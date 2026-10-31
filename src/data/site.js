export const site = {
  name: 'SIT Ulil Albab',
  origin: 'https://ulilalbab.sch.id',
  address: 'Jl. Bosih Raya, RT.5/RW.2, Wanasari, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520',
  email: 'yysulilalbab02@gmail.com',
  instagram: 'https://www.instagram.com/sit_ulilalbabbekasi',
  form: 'https://docs.google.com/forms/d/e/1FAIpQLSfcOFD1bp7WGoWrKmTtHsWQLm_qepCG8avFr54juUgx_4K5xg/viewform?embedded=true',
  tagManager: 'GTM-N6F7JXWK',
  ppdbYear: '2026/2027',
};

export const navigation = [
  {label: 'Beranda', href: '/index.html'},
  {label: 'Unit', children: [['TK', '/tk.html'], ['SD', '/sd.html'], ['SMP', '/smp.html'], ['SMA', '/sma.html'], ['Perpustakaan', '/perpustakaan.html']]},
  {label: 'Profil', children: [['VISI MISI', '/visimisi.html'], ['Sejarah Singkat', '/sejarah.html'], ['Struktur Organisasi', '/404.html'], ['Komite', '/404.html'], ['Prestasi', '/404.html'], ['Fasilitas', '/404.html']]},
  {label: 'Informasi', children: [['UA News', '/blog-cat-masonry.html'], ['PPDB', '/ppdb.html']]},
  {label: 'Pendaftaran', href: '/form-ppdb.html'},
];
