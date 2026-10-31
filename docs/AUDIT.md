# Audit dan migrasi SIT Ulil Albab

> **Pemeriksaan kelengkapan lanjutan:** [BASELINE-COMPLETENESS.md](BASELINE-COMPLETENESS.md) memetakan seluruh 42 HTML ee33d1f, mencocokkan teks/bagian/tautan/embed serta menggunakan kembali bukti visual pemulihan. Ditemukan dan dipulihkan judul indeks berita, daftar tujuan GTC, tiga kartu pengantar dokumentasi dan tiga pintasan footer. Perbedaan kontak halaman formulir terhadap baseline dinyatakan terbuka; tujuan saat ini tidak diganti. Data pemeriksaan baru: baseline-completeness.json; laporan content-preservation.json lama tetap historis.

> **Koreksi audit:** pemeriksaan awal di bawah hanya memakai HEAD 61b4601. Referensi origin/main yang sudah tersedia lokal ternyata memuat versi sebelum migrasi yang lebih baru (ee33d1f), dengan profil SMP/SMA dan aset unit lengkap. Klaim “belum pernah ada”/“hilang sejak awal” dicabut sebagai kesimpulan menyeluruh. Pemulihan 35 aset, 13 bagian unit dan empat artikel telah dilakukan; lihat [ASSET-RECOVERY.md](ASSET-RECOVERY.md) untuk bukti dan status terkini. Angka 42 halaman dan daftar missing di catatan awal adalah hasil historis; build terbaru 46 halaman + 68 alias.

Audit dilakukan pada 31 Oktober 2026, sebelum perubahan/penghapusan sumber. Kondisi awal Git bersih pada commit `61b460157acef514d09bde387ed34b3ad6465d67` (`update news`). Tidak ditemukan AGENTS.md di proyek maupun direktori induk yang diperiksa. Semua 483 berkas awal tercatat di Git. Arsip tambahan tersedia di `C:/Users/Lenovo/Documents/fables-before-react-20261031.zip`, di luar proyek dan hasil build.

## Temuan awal

- 106 HTML: halaman sekolah, berita, profil pembuat, dan demo Fables/Meyawo bercampur. Audit memeriksa isi HTML tanpa komentar, semua atribut tautan/aset, JavaScript inline/eksternal, `url()`, `@font-face`, sumber SCSS, konfigurasi, dan hash duplikat. Inventaris lengkap: `audit-original.json`, klasifikasi akhir: `file-inventory.json`.
- Tidak ditemukan backend PHP, endpoint formulir lokal, konfigurasi hosting, robots.txt, sitemap, atau verifikasi domain. README awal hanya menyebut unggah melalui FTP. Provider hosting sebenarnya belum diketahui.
- Pada HEAD awal, menu mengarahkan seluruh unit ke 404 walaupun `tk.html` dan `sd.html` tersedia. `smp.html` dan `sma.html` tidak ada pada HEAD yang saat itu diperiksa, sehingga tahap migrasi awal membuat halaman perbaikan/noindex. **Koreksi:** keduanya sudah ada pada origin/main yang lebih baru; profil, foto, metadata dan pengindeksannya telah dipulihkan dari sumber tersebut.
- `blog-cat-masonry.html` adalah daftar berita sekolah; **bukan demo**. Dua puluh artikel/indeks di `uanews/` dipertahankan. Hanya `uanews/CNTHNEWS.html` yang berisi JUDUL/HEADER JUDUL dan merupakan contoh kosong.
- `blog-details2.html` berisi judul/foto drama kolosal tetapi paragraf Lorem ipsum. Judul/foto dipertahankan, teks contoh dibuang. URL tetap tersedia dan canonical menunjuk artikel drama kolosal.
- `header2-light.html` telah disesuaikan menjadi navigasi/footer sekolah tanpa isi utama. URL tetap tersedia dan `noindex`.
- `home4.html` memuat versi lama konten sekolah; dipertahankan dengan membuang contoh Lorem ipsum, testimoni Billy Richards, serta kartu berita demo. `home1.html` adalah draf campuran yang statusnya belum pasti: sumber disimpan di `retained/`, URL mengarah ke beranda.
- `maulkuadrat.html`, `biodata.html`, dan `meyawo/public_html/maulkuadrat.html` adalah profil pembuat. Konten/URL dipertahankan dengan `noindex`. Sebagian aset dan CSS `meyawo` memang diperlukan.
- Ditemukan 5 kelompok berkas dengan SHA-256 identik (logo unit dan foto upacara). Rincian ada dalam `audit-original.json`.
- Tidak ada pemuatan header/footer melalui fetch. Markup yang sebelumnya diulang dipindah ke komponen React.

## Fungsi dan integrasi

| Fungsi awal | Hasil migrasi |
| --- | --- |
| Menu desktop, dropdown, menu ponsel, perubahan header saat scroll | `Header.jsx`; state React, dukungan keyboard dan hover desktop |
| Owl carousel hero, ekstrakurikuler, foto artikel | `Carousel.jsx`; otomatis 5 detik, tombol, keyboard, gestur sentuh, jeda, reduced motion |
| Pemilih logo unit pada beranda | `UnitSelector.jsx`; data logo/judul asli |
| Fancybox/Lightbox2 | `LightboxLink.jsx`; dialog native dan Escape, tautan gambar tetap berfungsi tanpa JavaScript |
| Masonry berita | CSS responsif, tautan dan urutan artikel tetap |
| WhatsApp | Tujuan dan isi pesan dipertahankan per halaman |
| Google Forms PPDB | URL iframe asli, komponen `PPDBForm.jsx`, tautan alternatif ke formulir asli |
| Instagram artikel | `InstagramEmbed.jsx`; permalink asli, script resmi saat mendekati viewport, tautan tetap tersedia jika embed gagal |
| Dokumentasi Google Drive, video, Google Maps profil | URL eksternal asli dipertahankan |
| Google Tag Manager | ID `GTM-N6F7JXWK`, hanya beranda produksi sebagaimana sumber; termasuk noscript |

Nomor `+62 821-2203-7474` dan `+62 813-1418-0955` sama-sama ada pada sumber. Nomor footer/WhatsApp dipertahankan menurut halaman asal, belum diseragamkan karena tidak ada bukti nomor pengganti yang berlaku untuk semua halaman.

## Strategi URL, SEO, dan build

React + Vite + JavaScript. Saat build, React dirender menjadi HTML berisi konten untuk setiap rute, lalu di-hydrate di browser. Halaman dimuat melalui tautan biasa; tidak memakai SPA fallback atau server Node di hosting. Chunk konten hanya dimuat untuk halaman yang dibuka. `src/data/routes.json` memetakan 42 halaman; `aliases.json` memetakan 68 URL kompatibilitas (66 halaman demo lama dan 2 tujuan tautan lama yang hilang).

Title, description dari teks tersedia, bahasa Indonesia, satu h1, alt, canonical, sitemap dan robots ditambahkan/dirapikan. Alias dan halaman yang belum berisi profil lengkap tidak dimasukkan ke sitemap. Artikel akar yang juga memiliki versi `uanews/` tetap dapat dibuka dan memiliki canonical ke versi berita. Foto dan teks antarversi tidak dihapus dengan asumsi bahwa isinya identik.

URL demo memiliki HTML pengarah statis ke halaman relevan atau 404. Ini kompatibilitas tautan, bukan redirect HTTP 301. Server pratinjau mengembalikan status 404 untuk URL tak dikenal; `.htaccess` hasil build menyediakan ErrorDocument untuk Apache. Server lain perlu konfigurasi error page setara.

## Keterbatasan sumber yang dipertahankan secara jujur

- `missing-original-assets.json` mencatat referensi yang tidak tersedia pada snapshot HEAD awal: TK/SD, biodata, home4 dan latar CSS. Pemeriksaan itu belum mencakup seluruh refs/riwayat Git. **Koreksi:** sumber unit yang lebih baru dan asetnya ditemukan lalu dipulihkan; beberapa nama lain juga tersedia pada riwayat lama. Daftar tersebut merupakan bukti historis baseline, bukan kesimpulan bahwa berkas tidak pernah ada. Pemetaan terbaru ada di ASSET-RECOVERY.
- Salah kapitalisasi `DSCF9424.jpg` diperbaiki ke nama sebenarnya `DSCF9424.JPG` agar bekerja di hosting Linux. Akhiran artikel `.html.html`, tautan Baca Penuh Safari Sosial, dan tautan kontak yang jelas tujuannya diperbaiki.
- Sumber artikel `uanews/puskesmas.html` mengandung judul isi Safari Sosial yang berbeda dari judul halaman. Teks editorial ini dipertahankan; perlu verifikasi pengelola.
- Google Forms yang ditautkan masih menampilkan tahun ajaran 2025/2026. Konten formulir dikendalikan pemilik Google Forms, bukan kode situs ini.
- Foto/logo/desain/video sekolah yang tidak dirujuk tetapi tujuannya belum pasti disimpan di `retained/`, tidak masuk build.
- CSS sekolah lama dan sebagian style vendor tetap dipertahankan untuk kesetiaan tampilan. Selector yang penggunaannya belum pasti tidak dihapus sembarangan; plugin JavaScript yang sudah diganti tidak lagi dikirim ke browser.

Tidak ada deploy produksi, pengiriman formulir, pesan WhatsApp, atau perubahan akun eksternal.

## Tindak lanjut masalah terbuka — 31 Oktober 2026

Rincian halaman, berkas dan baris referensi ada di [OPEN-ISSUES.md](OPEN-ISSUES.md); data terstruktur di [open-issues-inventory.json](open-issues-inventory.json). Ditemukan 28 nama gambar hilang yang unik: 14 foto, 1 tanda tangan, 13 latar. Dua belas latar CSS tidak dipakai pada halaman hasil migrasi. Ada 15 halaman dengan footer 0821 dan 24 dengan footer 0813; nomor pembuat pada tiga profil dipisahkan. Satu Google Form memiliki versi embed dan tautan langsung, dengan 42 tautan lokal menuju halaman formulir pada 39 halaman sekolah.

Perbaikan yang dapat dipastikan lokal: empat tombol brosur tanpa tujuan dinonaktifkan dengan keterangan belum tersedia; sisa testimoni demo pada metadata home4 dihapus. Informasi sekolah, nomor kontak, formulir, dan konfigurasi produksi tidak ditetapkan ulang. Hosting yang sebenarnya belum diketahui; `.htaccess` dalam dist adalah konfigurasi yang dibuat oleh build lokal.

## Pembaruan berdasarkan konfirmasi pengelola

Status awal di atas merupakan catatan historis. Pengelola kemudian mengonfirmasi PPDB **2026/2027**, tetap memakai Google Forms yang sama, kedua nomor untuk PPDB/kontak umum tanpa pembagian khusus, serta GitHub untuk kode, Netlify untuk build/hosting, dan IDwebhost untuk pengelolaan domain. Teks/metadata aktif sudah diperbarui lokal; isi Google Forms tidak diubah. `netlify.toml` kini tersedia dengan build lengkap ke dist dan Pretty URLs nonaktif; routing Netlify memakai dokumen statis dan custom 404 bawaan. Rincian terbaru ada di [OPEN-ISSUES.md](OPEN-ISSUES.md), [NETLIFY.md](NETLIFY.md), dan [VALIDATION.md](VALIDATION.md). Profil dan foto SMP/SMA kemudian ditemukan dan dipulihkan; ketidaksesuaian editorial sumber lama dicatat pada ASSET-RECOVERY. Tidak ada push, deploy, atau perubahan layanan eksternal.
