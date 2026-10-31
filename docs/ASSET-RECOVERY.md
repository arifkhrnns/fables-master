# Bukti pemulihan aset sekolah

Pemeriksaan lokal 31 Oktober 2026. Pemulihan memakai sumber sebelum migrasi pada commit `ee33d1f1318478236ed4b657d5c50989abaa62e8`. Tidak ada fetch, reset Git, penimpaan proyek, push, deploy, atau perubahan layanan eksternal.

## Koreksi kesimpulan audit sebelumnya

Migrasi memakai HEAD lokal `61b460157acef514d09bde387ed34b3ad6465d67` yang tertinggal dari referensi lokal `origin/main` / `origin/HEAD` pada `ee33d1f` (21 November 2025, pesan commit “SMP”). Versi yang lebih baru sudah mempunyai profil SMP/SMA dan foto TK/SD yang benar. Pernyataan sebelumnya bahwa profil SMP/SMA “belum pernah ada” dan seluruh foto unit “hilang sejak sumber awal” tidak benar untuk keseluruhan sumber yang tersedia.

Sumber yang diperiksa:

- Seluruh refs Git lokal, pohon/riwayat objek `git rev-list --objects --all`, HEAD/main, origin/main, origin/HEAD dan origin/second. Tidak mengambil data baru dari GitHub.
- ZIP di luar proyek `C:/Users/Lenovo/Documents/fables-before-react-20261031.zip`: 483 berkas cocok dengan HEAD lama, dengan perbedaan akhir baris teks saja. ZIP ini bukan salinan versi terbaru.
- Arsip `git archive ee33d1f` diekstrak ke `C:/Users/Lenovo/Documents/ulil-asset-recovery/source-origin-main`: 456 berkas, termasuk 42 HTML; seluruh subfolder template, CSS/JS, aset dan berita ditelusuri.
- `retained/` (34 aset dan home1.html), public, serta laporan/screenshot migrasi lama di folder `C:/Users/Lenovo/Documents/ulil-migration-tools`. Aset unit yang dipulihkan berasal dari Git terbaru, bukan pemindahan salah dari retained; retained tidak dihapus.

## Jumlah dan kelengkapan

**35 berkas gambar asli dipulihkan**, dengan SHA-256 dan ukuran identik sumber: 19 aset unit (TK 9, SD 5, SMP 2, SMA 3) dan 16 aset terkait (Market Day 7, Raker 7, akreditasi SD 1, yayasan 1). Penggunaan ulang gambar tidak dihitung sebagai berkas tambahan.

**13 bagian pada empat halaman unit dipulihkan/diselaraskan**: TK 4 (hero, profil, tiga keunggulan, galeri), SD 3 (hero, profil, tiga program), SMP 3 (hero, profil, tiga program), SMA 3 (banner/pembesaran, profil, alumni). Ini menghitung kelompok bagian, bukan setiap kartu/foto; beberapa bagian TK/SD sudah ada tetapi isi/gambarnya berasal dari versi yang tertinggal.

Di luar itu dipulihkan dua galeri artikel berisi masing-masing 7 slide, enam kartu berita (3 beranda + 3 indeks), satu penempatan foto yayasan, serta empat halaman berita yang tidak ikut dikonversi: `/uanews/isra_miraj.html` (SMP), `/uanews/seminar_karil.html` (SMA), `/uanews/Milad_25.html` dan `/uanews/semarak_milad25.html`. Empat artikel tersebut memakai permalink Instagram asli; tidak dihitung sebagai empat foto lokal baru. Dua tautan dokumentasi Drive Market Day/Raker dikembalikan dari sumber. Placeholder “LINK DRIVE DOKUMENTASI” pada semarak_milad25 dinonaktifkan, tanpa membuat URL.

Semua gambar, background inline, judul bagian dan paragraf keempat unit dibandingkan dengan sumber terbaru; tidak ada yang terlewat. Logo empat unit yang sudah ada di beranda/PPDB dipertahankan. Sumber terbaru tidak memiliki subhalaman HTML di direktori tk/sd/smp/sma; halaman turunannya berada di uanews. Galeri artikel yang sudah benar (misalnya Fathers Day, Camp Leadership, GTC) diperiksa tanpa dimigrasikan ulang.

## Tabel bukti

Semua path aset sumber relatif terhadap commit ee33d1f; lokasi berkas baru adalah prefix `public/` + path sumber, dan hasil build `dist/` + path sumber. Kolom baru juga menunjukkan komponen pemakai. “Lolos D/P” berarti decode gambar, ukuran/visibilitas, screenshot dan pemeriksaan desktop 1440px/ponsel 390px; slide diperiksa bergantian.

| Unit/halaman | Bagian/gambar | Lokasi sumber lama | Lokasi baru | Penyebab hilang | Hasil verifikasi |
| --- | --- | --- | --- | --- | --- |
| TK /tk.html | Latar hero dan foto Guru Berkualitas | `assets/custom/images/bg-tk.JPG`; `tk.html:149`, `tk.html:235` | `public/assets/custom/images/bg-tk.JPG`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Foto kepala sekolah | `assets/custom/images/tk/kepsek-tk.png`; `tk.html:205` | `public/assets/custom/images/tk/kepsek-tk.png`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Lingkungan Menyenangkan | `assets/custom/images/tk/funenvironment.png`; `tk.html:244` | `public/assets/custom/images/tk/funenvironment.png`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Pendekatan Deep Learning | `assets/custom/images/tk/deeplearning.jpg`; `tk.html:253` | `public/assets/custom/images/tk/deeplearning.jpg`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Galeri kegiatan: tk/galeri1.jpg | `assets/custom/images/tk/galeri1.jpg`; `tk.html:273` | `public/assets/custom/images/tk/galeri1.jpg`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Galeri kegiatan: tk/galeri2.JPG | `assets/custom/images/tk/galeri2.JPG`; `tk.html:279` | `public/assets/custom/images/tk/galeri2.JPG`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Galeri kegiatan: tk/galeri3.JPG | `assets/custom/images/tk/galeri3.JPG`; `tk.html:285` | `public/assets/custom/images/tk/galeri3.JPG`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Galeri kegiatan: tk/galeri4.JPG | `assets/custom/images/tk/galeri4.JPG`; `tk.html:291` | `public/assets/custom/images/tk/galeri4.JPG`; `src/pages/tk.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| TK /tk.html | Galeri kegiatan: tk/galeri5.jpg | `assets/custom/images/tk/galeri5.jpg`; `tk.html:297` | `public/assets/custom/images/tk/galeri5.jpg`; `src/pages/tk.jsx` | Baseline migrasi tertinggal; referensi .JPG juga berbeda dari nama .jpg | Lolos D/P; hash asli dan masuk dist |
| SD /sd.html | Latar hero | `assets/custom/images/sd/bg.jpg`; `sd.html:114` | `public/assets/custom/images/sd/bg.jpg`; `src/pages/sd.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /sd.html | Foto kepala sekolah | `assets/custom/images/sd/kepseksd.png`; `sd.html:170` | `public/assets/custom/images/sd/kepseksd.png`; `src/pages/sd.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /sd.html dan SMP /smp.html | Program unggulan: sd/farm.JPG | `assets/custom/images/sd/farm.JPG`; `sd.html:205`, `smp.html:205` | `public/assets/custom/images/sd/farm.JPG`; `src/pages/sd.jsx, src/pages/smp.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /sd.html dan SMP /smp.html | Program unggulan: sd/panah.JPG | `assets/custom/images/sd/panah.JPG`; `sd.html:215`, `smp.html:215` | `public/assets/custom/images/sd/panah.JPG`; `src/pages/sd.jsx, src/pages/smp.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /sd.html dan SMP /smp.html | Program unggulan: sd/funcooking.JPG | `assets/custom/images/sd/funcooking.JPG`; `sd.html:225`, `smp.html:225` | `public/assets/custom/images/sd/funcooking.JPG`; `src/pages/sd.jsx, src/pages/smp.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SMP /smp.html | Latar hero | `assets/custom/images/smp/bg.jpg`; `smp.html:114` | `public/assets/custom/images/smp/bg.jpg`; `src/pages/smp.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SMP /smp.html | Foto kepala sekolah | `assets/custom/images/smp/kepsek.jpg`; `smp.html:170` | `public/assets/custom/images/smp/kepsek.jpg`; `src/pages/smp.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SMA /sma.html | Banner dan pembesaran | `assets/custom/images/sma/banner.jpg`; `sma.html:67`, `sma.html:87` | `public/assets/custom/images/sma/banner.jpg`; `src/pages/sma.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SMA /sma.html | Foto kepala sekolah | `assets/custom/images/sma/kepsek.png`; `sma.html:100` | `public/assets/custom/images/sma/kepsek.png`; `src/pages/sma.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SMA /sma.html | Logo Unsika pada 6 kartu alumni (pemetaan asli) | `assets/custom/images/sma/unsika.png`; `sma.html:134`, `sma.html:139`, `sma.html:144`, `sma.html:149`, `sma.html:154`, `sma.html:159` | `public/assets/custom/images/sma/unsika.png`; `src/pages/sma.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (1).JPG | `assets/custom/images/marketday/1 (1).JPG`; `uanews/marketday.html:305` | `public/assets/custom/images/marketday/1 (1).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (2).JPG | `assets/custom/images/marketday/1 (2).JPG`; `uanews/marketday.html:309` | `public/assets/custom/images/marketday/1 (2).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (3).JPG | `assets/custom/images/marketday/1 (3).JPG`; `uanews/marketday.html:313` | `public/assets/custom/images/marketday/1 (3).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (4).JPG | `assets/custom/images/marketday/1 (4).JPG`; `uanews/marketday.html:317` | `public/assets/custom/images/marketday/1 (4).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (5).JPG | `assets/custom/images/marketday/1 (5).JPG`; `uanews/marketday.html:321` | `public/assets/custom/images/marketday/1 (5).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html, beranda dan indeks berita | Galeri Market Day: marketday/1 (6).JPG | `assets/custom/images/marketday/1 (6).JPG`; `uanews/marketday.html:325`, `index.html:862`, `blog-cat-masonry.html:161` | `public/assets/custom/images/marketday/1 (6).JPG`; `src/pages/uanews/marketday.jsx, src/pages/index.jsx, src/pages/blog-cat-masonry.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| SD /uanews/marketday.html | Galeri Market Day: marketday/1 (7).JPG | `assets/custom/images/marketday/1 (7).JPG`; `uanews/marketday.html:329` | `public/assets/custom/images/marketday/1 (7).JPG`; `src/pages/uanews/marketday.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html, beranda | Galeri Raker: raker/1 (1).JPG | `assets/custom/images/raker/1 (1).JPG`; `uanews/raker.html:305`, `index.html:833` | `public/assets/custom/images/raker/1 (1).JPG`; `src/pages/uanews/raker.jsx, src/pages/index.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html | Galeri Raker: raker/1 (2).JPG | `assets/custom/images/raker/1 (2).JPG`; `uanews/raker.html:309` | `public/assets/custom/images/raker/1 (2).JPG`; `src/pages/uanews/raker.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html | Galeri Raker: raker/1 (3).JPG | `assets/custom/images/raker/1 (3).JPG`; `uanews/raker.html:313` | `public/assets/custom/images/raker/1 (3).JPG`; `src/pages/uanews/raker.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html | Galeri Raker: raker/1 (4).JPG | `assets/custom/images/raker/1 (4).JPG`; `uanews/raker.html:317` | `public/assets/custom/images/raker/1 (4).JPG`; `src/pages/uanews/raker.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html | Galeri Raker: raker/1 (5).JPG | `assets/custom/images/raker/1 (5).JPG`; `uanews/raker.html:321` | `public/assets/custom/images/raker/1 (5).JPG`; `src/pages/uanews/raker.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html | Galeri Raker: raker/1 (6).JPG | `assets/custom/images/raker/1 (6).JPG`; `uanews/raker.html:325` | `public/assets/custom/images/raker/1 (6).JPG`; `src/pages/uanews/raker.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /uanews/raker.html, indeks berita | Galeri Raker: raker/1 (7).jpg | `assets/custom/images/raker/1 (7).jpg`; `uanews/raker.html:329`, `blog-cat-masonry.html:142` | `public/assets/custom/images/raker/1 (7).jpg`; `src/pages/uanews/raker.jsx, src/pages/blog-cat-masonry.jsx` | Baseline migrasi tertinggal; referensi .JPG juga berbeda dari nama .jpg | Lolos D/P; hash asli dan masuk dist |
| Beranda dan /blog-cat-masonry.html | Kartu akreditasi SD | `assets/custom/images/sdita.png`; `index.html:803`, `blog-cat-masonry.html:123` | `public/assets/custom/images/sdita.png`; `src/pages/index.jsx, src/pages/blog-cat-masonry.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |
| /sejarah.html | Foto yayasan | `assets/custom/images/bg-yys.png`; `sejarah.html:126` | `public/assets/custom/images/bg-yys.png`; `src/pages/sejarah.jsx` | Baseline migrasi tertinggal | Lolos D/P; hash asli dan masuk dist |

| Unit/artikel/indeks/404, 30 penggunaan ikon bersama | Ikon dan tombol WhatsApp asli | `assets/custom/images/whatsapp (1) 2.png`; seluruh file/baris/href di `restoredExistingAssetUsages` pada manifest | Berkas public yang sudah ada; `WhatsAppButton.jsx` dan `routes.json` | Tombol pada versi terbaru terlewat saat konversi | Terlihat D/P; target sesuai sumber; bukan berkas ke-36 |

Komponen carousel React memulihkan 5 slide TK dan 6 item alumni SMA (2 terlihat pada 390px, 5 pada 1440px), serta 7 slide tiap artikel. Banner SMA memakai dialog pembesaran native. CSS unit berada di `public/styles/pages/units.css`. URL aset memakai akar situs; nama berspasi dipertahankan; dua perbedaan kapitalisasi diperbaiki terhadap nama berkas sebenarnya agar aman pada Linux/Netlify. Unit tidak mempunyai srcset atau sumber gambar lazy/dinamis tambahan yang terlewat; logo pemilih unit dan ikon WhatsApp juga diuji.

## Ketidaksesuaian sumber yang perlu pengelola putuskan

- SMP sejak `smp.html` asli memakai tiga foto `sd/farm.JPG`, `sd/panah.JPG`, `sd/funcooking.JPG`. Dipulihkan di posisi asal, bukan memilih foto SD sebagai pengganti baru. Pengelola perlu mengonfirmasi apakah foto bersama itu memang mewakili program SMP.
- Enam kartu alumni SMA asli semuanya memakai `sma/unsika.png`, sementara caption mencantumkan Unsika, UGM, ITB, IPB, UIN Jakarta, UNJ dan sebagian alt tidak cocok. Pemetaan asli dipertahankan; perlu bukti alumni dan logo/caption yang benar. Tidak mengunduh logo pengganti atau menambah klaim kelulusan.
- Banner SMA asli sudah bertuliskan SPMB **2026–2027**, tetapi masih memuat gelombang 1 **15 September–31 Oktober 2025** dan batas diskon **31 Oktober 2025**. Berkas dipulihkan apa adanya; pengelola perlu memutuskan validitas jadwal/promosi atau menyediakan revisi. Nomor 0813-1418-0955 tercetak sebagai INFO SPMB; ini bukti penggunaan PPDB, bukan pembagian fungsi eksklusif kedua nomor.
- Tidak ditemukan tujuan unduhan brosur resmi pada tombol empat unit. Banner SMA tidak otomatis ditetapkan menjadi brosur. Status “Brosur belum tersedia” tetap.
- Tujuan dokumentasi semarak_milad25 masih berupa placeholder pada sumber. Isi/izin Instagram dan Drive tidak diverifikasi secara eksternal.

## Nama lama yang tidak ditemukan dan batasnya

Tidak ada aset yang masih hilang pada empat halaman unit jika dibandingkan dengan ee33d1f setelah koreksi kapitalisasi. Nama berikut berasal dari versi TK/SD yang lebih lama dan tidak ditemukan dalam HEAD, ZIP, retained, pohon origin/main, maupun seluruh nama objek riwayat Git lokal:

- `assets/custom/images/sd-ulil-albab.jpg`
- `assets/custom/images/tk-activities.jpg`
- `assets/custom/images/qualified-teachers.jpg`
- `assets/custom/images/fun-environment.jpg`
- `assets/custom/images/holistic-approach.jpg`
- `assets/custom/images/gallery1_thumb.jpg`
- `assets/custom/images/gallery2_thumb.jpg`
- `assets/custom/images/gallery3_thumb.jpg`

Referensi nama-nama tersebut telah digantikan oleh penggunaan aset yang memang ada pada halaman unit versi terbaru, bukan oleh gambar generik. Gallery1/2/3, index1/2/3, wallpaper biodata/tanda tangan, dan sejumlah latar demo yang sebelumnya disebut tidak tersedia ternyata mempunyai objek pada riwayat Git lebih lama; temuan itu tidak membuktikan semuanya foto unit. Tidak menempatkan aset template/demo atau biodata ke halaman unit. Daftar awal `missing-original-assets.json` dipertahankan sebagai snapshot baseline lama, bukan daftar kehilangan terbaru. Pekerjaan non-unit/cleanup ditunda.

## Bukti pengujian dan preservasi

- `asset-recovery-manifest.json`: seluruh 35 hash, ukuran, sumber/baris dan komponen sumber.
- `../test-results/recovery-coverage-report.json`: semua gambar/background dan teks empat unit dibandingkan sumber; path dist diperiksa dengan kapitalisasi persis; tujuan kontak lama tidak diganti.
- `../test-results/recovery-visual-report.json` dan `../test-results/recovery-visual/`: sebelum/sesudah empat unit pada dua viewport, semua slide dan pembesaran, halaman terkait serta regresi carousel/logo beranda. Pemeriksaan ikon berita tambahan: `../test-results/recovery-contact-report.json` (40 kunjungan terarah).
- `../test-results/recovery-build.log` dan `../test-results/static-report.json`: 46 halaman + 68 alias dan validasi referensi hasil build.
- Hash PPDB, komponen formulir, site.js, netlify.toml, package/lockfile dan komponen kontak tetap sama dengan snapshot sebelum pemulihan. Tahun aktif 2026/2027 dan identitas Forms dipertahankan. Tiga puluh tombol WhatsApp unit/artikel dipulihkan dari href sumber; tidak mengganti tujuan tombol yang sudah ada.

Browser memakai hasil build melalui server statis lokal, bukan dev Vite atau Netlify. Semua layanan eksternal diblokir pada pengujian hasil pemulihan; baseline lama hanya diizinkan mengambil Bootstrap dari CDN publik untuk tampilan asli. Tidak menguji isi Google Forms atau mengirim data. Pengaturan dashboard dan perilaku CDN Netlify belum diuji.
