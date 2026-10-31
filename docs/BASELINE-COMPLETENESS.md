# Pemeriksaan kelengkapan terhadap ee33d1f

Pemeriksaan lokal 31 Oktober 2026. Baseline tetap **ee33d1f1318478236ed4b657d5c50989abaa62e8**, dibaca dari objek Git lokal tanpa fetch. Pemeriksaan ini melengkapi [pemulihan aset](ASSET-RECOVERY.md), bukan mengulang audit templat dari awal.

## Hasil dan cara pembandingan

Seluruh **42 HTML baseline** telah dipetakan: **35 halaman sekolah, 3 profil pembuat, 2 fragmen bersama (header/footer), dan 2 contoh/demo**. Sebanyak 38 halaman isi baseline memiliki rute React langsung. Delapan rute sekolah/arsip lama tambahan tetap dipertahankan, sehingga build tetap **46 halaman + 68 URL kompatibilitas**. Tidak ada halaman sekolah baseline yang belum terpetakan.

Perbandingan mencakup 257 blok teks dan total 373 potongan teks (dihitung unik pada masing-masing halaman), 160 referensi tautan isi termasuk placeholder/kontrol, 21 embed/iframe, navigasi bersama, kontak, serta 10 tautan dokumentasi Drive. Normalisasi hanya untuk whitespace/Unicode dan resolusi tujuan relatif; paragraf sekolah, nama, tanggal arsip dan tujuan tidak ditulis ulang. Heading/urutan bagian dan tujuan link dipakai untuk membaca makna konten; tidak menuntut DOM HTML sama dengan struktur komponen React. Perbedaan yang ditemukan ditinjau satu per satu; hasil akhir **0 perbedaan tanpa klasifikasi**, bukan klaim bahwa semua sumber lama harus sama persis.

Peta lengkap, heading per bagian, teks yang sengaja berbeda, seluruh URL dan hash dokumen ada di [baseline-completeness.json](baseline-completeness.json). Pemeriksaan dapat diulang dengan `node scripts/audit-baseline.mjs` setelah build. Script hanya membaca Git lokal dan dist; tidak membuka situs eksternal. Data `content-preservation.json` lama tetap merupakan snapshot pemeriksaan terhadap 61b4601 dan tidak digunakan sebagai bukti tunggal kelengkapan baseline baru.

## Konten yang baru dipulihkan dalam pemeriksaan ini

| Halaman/bagian | Sumber ee33d1f | Pemulihan React | Verifikasi |
| --- | --- | --- | --- |
| Indeks berita | blog-cat-masonry.html, judul Info SIT Ulil Albab | src/pages/blog-cat-masonry.jsx: mengembalikan kata SIT yang tertinggal | Teks build dan screenshot 1440/390 |
| Goes To Campus | uanews/GTC.html:398–415 | src/pages/uanews/GTC.jsx dan public/styles/pages/uanews-GTC.css: empat kartu tujuan, nama lengkap ITS, Museum Angkut, Gunung Bromo, serta Explore More News | Perbandingan visual sebelum/sesudah, seluruh tujuan lokal 200 |
| QLC, Father’s Day, Safari Sosial | Kartu news-card di uanews/campleadersip.html, fathersday.html, safarisosial.html | src/components/DocumentationLink.jsx pada ketiga halaman: kalimat “Jelajahi lebih banyak dokumentasi kami di sini:” dan tampilan kartu asli | Teks/visibilitas, screenshot, href Drive sama; tidak diklik |
| Footer sekolah | footer.html: Visi Misi, Ekstrakulikuler, Program Tahunan; selain Beranda/Unit | src/components/Footer.jsx: tiga pintasan dipulihkan; target /index.html#… bekerja juga dari artikel nested. Profil/Informasi yang sudah ada tetap tersedia | Ketiga anchor diklik lokal pada 1440/390; footer 43 rute sekolah lolos pemeriksaan referensi |

Jumlah perubahan isi: **5 halaman dan 1 komponen footer bersama**; 3 kartu dokumentasi, daftar 4 tujuan kampus, 1 judul indeks, dan 3 pintasan footer. Tidak menambah gambar atau artikel baru pada tahap ini. Galeri, isi artikel, caption dan tahun arsip yang sudah benar tidak dirombak.

## Peta halaman dan bagian

| Sumber baseline | Hasil React | Status / bagian yang dicocokkan |
| --- | --- | --- |
| `404.html` | `src/pages/404.jsx` | Konten sekolah dipertahankan. Pesan halaman belum tersedia dan tautan kembali; halaman galat tetap tersedia. |
| `biodata.html` | `src/pages/biodata.jsx` | Profil pembuat, terpisah. Biodata/profil pembuat; bukan identitas sekolah. Tahun copyright tetap dinamis. |
| `blog-cat-masonry.html` | `src/pages/blog-cat-masonry.jsx` | Konten sekolah dipertahankan. Judul Info SIT Ulil Albab dipulihkan; seluruh kartu/tautan artikel baseline tersedia; koreksi .html.html tetap. |
| `footer.html` | `src/components/Footer.jsx + src/data/site.js` | Digabung ke komponen. Navigasi dan kontak dibahas terpisah di bawah. |
| `form-ppdb.html` | `src/pages/form-ppdb.jsx` | Konten sekolah dipertahankan. Iframe Google Forms dengan identitas sama; heading 2026/2027 dan tautan alternatif; perbedaan kontak dicatat. |
| `header.html` | `src/components/Header.jsx + src/data/site.js` | Digabung ke komponen. Navigasi dan kontak dibahas terpisah di bawah. |
| `index.html` | `src/pages/index.jsx` | Konten sekolah dipertahankan. Dua hero; visi dan tiga misi; tujuh karakteristik; pemilih empat unit; sembilan ekstrakurikuler; delapan program tahunan; tiga berita baseline. Kartu arsip tambahan dari migrasi sebelumnya tetap tersedia. |
| `maulkuadrat.html` | `src/pages/maulkuadrat.jsx` | Profil pembuat, terpisah. Biodata/profil pembuat; bukan identitas sekolah. Tahun copyright tetap dinamis. |
| `meyawo/public_html/components.html` | URL kompatibilitas | Dikecualikan sengaja. Meyawo component demo, not school content; compatibility URL retained. |
| `meyawo/public_html/maulkuadrat.html` | `src/pages/meyawo/public_html/maulkuadrat.jsx` | Profil pembuat, terpisah. Biodata/profil pembuat; bukan identitas sekolah. Tahun copyright tetap dinamis. |
| `ppdb.html` | `src/pages/ppdb.jsx` | Konten sekolah dipertahankan. Hero/banner, alasan memilih sekolah, tiga langkah pendaftaran, empat kartu unit, kontak. Tahun aktif 2026/2027; filler dan tombol brosur palsu tidak dipulihkan. |
| `sd.html` | `src/pages/sd.jsx` | Konten sekolah dipertahankan. Hero, profil/kepala sekolah, tiga program; bukti pemulihan sebelumnya digunakan kembali. |
| `sejarah.html` | `src/pages/sejarah.jsx` | Konten sekolah dipertahankan. Judul, foto yayasan dan seluruh paragraf sejarah. |
| `sma.html` | `src/pages/sma.jsx` | Konten sekolah dipertahankan. Banner/pembesaran, profil/kepala sekolah, enam kartu alumni; logo dan tanggal banner tetap menunggu keputusan. |
| `smp.html` | `src/pages/smp.jsx` | Konten sekolah dipertahankan. Hero, profil/kepala sekolah, tiga program; foto dari folder SD tetap mengikuti sumber dan menunggu keputusan. |
| `tk.html` | `src/pages/tk.jsx` | Konten sekolah dipertahankan. Hero, profil, tiga keunggulan, lima slide galeri; bukti pemulihan sebelumnya digunakan kembali. |
| `uanews/CNTHNEWS.html` | URL kompatibilitas | Dikecualikan sengaja. JUDUL/HEADER JUDUL example, not a school article; compatibility URL retained. |
| `uanews/GTC.html` | `src/pages/uanews/GTC.jsx` | Konten sekolah dipertahankan. Daftar empat tujuan dengan nama baseline dan tombol Explore More News dipulihkan; tujuan URL tetap. |
| `uanews/Milad_25.html` | `src/pages/uanews/Milad_25.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/anbk.html` | `src/pages/uanews/anbk.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/bromo.html` | `src/pages/uanews/bromo.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; media lokal sesuai inventaris pemulihan. |
| `uanews/campleadersip.html` | `src/pages/uanews/campleadersip.jsx` | Konten sekolah dipertahankan. Artikel QLC 2024, galeri, Instagram, Drive; kartu/pengantar dokumentasi dipulihkan. |
| `uanews/fathersday.html` | `src/pages/uanews/fathersday.jsx` | Konten sekolah dipertahankan. Artikel Father’s Day 2024, galeri, Instagram, Drive; kartu/pengantar dokumentasi dipulihkan. |
| `uanews/isra_miraj.html` | `src/pages/uanews/isra_miraj.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/its.html` | `src/pages/uanews/its.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; media lokal sesuai inventaris pemulihan. |
| `uanews/kolosaldrama.html` | `src/pages/uanews/kolosaldrama.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/mabit.html` | `src/pages/uanews/mabit.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/marketday.html` | `src/pages/uanews/marketday.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/maulid.html` | `src/pages/uanews/maulid.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/museumangkot.html` | `src/pages/uanews/museumangkot.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; media lokal sesuai inventaris pemulihan. |
| `uanews/pawai.html` | `src/pages/uanews/pawai.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/puskesmas.html` | `src/pages/uanews/puskesmas.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/raker.html` | `src/pages/uanews/raker.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/safarisosial.html` | `src/pages/uanews/safarisosial.jsx` | Konten sekolah dipertahankan. Artikel Safari Sosial, galeri, Instagram, Drive; kartu/pengantar dokumentasi dipulihkan. |
| `uanews/sdita.html` | `src/pages/uanews/sdita.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/semarak_milad25.html` | `src/pages/uanews/semarak_milad25.jsx` | Konten sekolah dipertahankan. Artikel dan Instagram; placeholder dokumentasi tetap non-tautan sampai URL resmi tersedia. |
| `uanews/seminar_karil.html` | `src/pages/uanews/seminar_karil.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `uanews/supervisi.html` | `src/pages/uanews/supervisi.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; media lokal sesuai inventaris pemulihan. |
| `uanews/unbraw.html` | `src/pages/uanews/unbraw.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; media lokal sesuai inventaris pemulihan. |
| `uanews/upacara17.html` | `src/pages/uanews/upacara17.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; dokumentasi Drive asli. |
| `uanews/walimatu.html` | `src/pages/uanews/walimatu.jsx` | Konten sekolah dipertahankan. Judul, isi dan tujuan tautan artikel; embed asli; media lokal sesuai inventaris pemulihan. |
| `visimisi.html` | `src/pages/visimisi.jsx` | Konten sekolah dipertahankan. Visi dan tiga misi yayasan. |

Delapan rute tambahan yang berasal dari versi lebih lama dan tetap berfungsi: `/anbk.html`, `/blog-details2.html`, `/header2-light.html`, `/home4.html`, `/kolosaldrama.html`, `/pawai.html`, `/supervisi.html`, `/upacara17.html`. Status canonical/noindex dan aliasnya tidak diubah. Dua contoh yang dikecualikan adalah `meyawo/public_html/components.html` (demo UI) dan `uanews/CNTHNEWS.html` (JUDUL/HEADER JUDUL); tidak diperlakukan sebagai artikel sekolah yang hilang. Vendor JavaScript lama tetap digantikan komponen React, bukan dikembalikan.

## Perubahan yang disengaja dan tetap dipertahankan

| Bagian | Perlakuan |
| --- | --- |
| PPDB aktif | Tahun 2026/2027, label Daftar, heading pembungkus formulir dan metadata tetap; tanggal arsip tidak diganti. Hash PPDB/PPDBForm/site.js tetap sesuai bukti sebelumnya |
| Forms/Instagram | Identitas URL asli dipertahankan. Boilerplate loading/markup embed menjadi komponen dengan fallback dan tautan; tidak mengubah isi layanan |
| Navigasi unit | Tujuan 404 lama menuju halaman unit nyata; SMP tidak dikembalikan ke 404 |
| Profil/berita | Visi Misi menuju halaman khusus yang ada; Sejarah Singkat menuju sejarah.html; UA News menuju indeks, menggantikan placeholder/fragmen yang salah pada halaman artikel |
| Footer | Unit menuju /index.html#unit, menggantikan contactus1.html (templat); fragmen visi/ekstra/program dibuat absolut ke beranda. Ikon Facebook/Twitter dengan href=# tidak dikembalikan sebagai akun resmi |
| URL rusak | Akhiran campleadersip.html.html tetap diperbaiki; kapitalisasi gambar dan URL kompatibilitas hasil pemulihan tetap |
| Carousel/pembesaran | Interaksi React menggantikan vendor; label sebelumnya/berikutnya tersedia lewat nama aksesibel. Bukti semua slide dari pemulihan dipakai kembali |
| Demo/search palsu | Lorem ipsum PPDB, contoh vendor, dan overlay search dengan form action=# tanpa backend tidak dikembalikan |
| Tombol tak punya tujuan | Brosur empat unit dan dokumentasi Semarak Milad tetap ditandai belum tersedia; tidak dibuatkan tujuan berdasarkan dugaan |
| Kontak | Nomor dan pemetaan yang sudah disepakati tetap; salam WhatsApp PPDB yang menambah koma dan SIT tetap menuju 0821. Kontak pembuat tidak dicampur dengan kontak sekolah |
| Hosting | netlify.toml, build command penuh, dist, Pretty URLs false, canonical/domain dan 404 tetap; tanpa fallback SPA, push, deploy atau perubahan DNS |

## Dokumen dan tujuan eksternal

Baseline tidak memiliki berkas unduhan PDF/DOC/XLS/PPT/ZIP publik atau atribut download yang memberi tujuan brosur resmi. Sepuluh folder dokumentasi berikut dipertahankan (rujukan folder, bukan klaim bahwa berkas di dalamnya telah diverifikasi):

| Halaman | Tujuan baseline dan React | Status |
| --- | --- | --- |
| `/uanews/campleadersip.html` | `https://drive.google.com/drive/folders/1qDorUZqq3rWdYLly-muE8E_ETtn9_IhP` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/fathersday.html` | `https://drive.google.com/drive/u/0/folders/1lkvibp1BDc4_NwOHHQn_bePyUKIFNdJs` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/kolosaldrama.html` | `https://drive.google.com/drive/folders/1NvKsgA9c5pj4oN5cOfdSbs_AN8yuMWCq?usp=sharing` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/mabit.html` | `https://drive.google.com/drive/u/0/folders/1zQt4oZF-_fxpGEc-iTJ2HhcTTO9v_v3b` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/marketday.html` | `https://drive.google.com/drive/u/0/folders/192FodVMoi2XF4VeghRUH4TmY6NpIagqF` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/maulid.html` | `https://drive.google.com/drive/folders/15RnsT4I_86jwPo07oVvToJY8CKuQZ0_0?usp=sharing` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/pawai.html` | `https://drive.google.com/drive/folders/1ppKr74gK3GLdDigSFd-qDtHYPTnY3c_1` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/raker.html` | `https://drive.google.com/drive/folders/1HZiXAzUKnBIucARB5KrFGG-gIiI7R8N-?usp=sharing` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/safarisosial.html` | `https://drive.google.com/drive/folders/13QgkM9L95Lry8dEj5ptYuwq0Vlk7P9VY?usp=drive_link` | Dipertahankan; isi/izin eksternal tidak diuji |
| `/uanews/upacara17.html` | `https://drive.google.com/drive/folders/1i0ryXejakoiK_VxuUevNP9aAdXfNI0R3` | Dipertahankan; isi/izin eksternal tidak diuji |

Iframe Forms tetap memakai `1FAIpQLSfcOFD1bp7WGoWrKmTtHsWQLm_qepCG8avFr54juUgx_4K5xg`; permalink Instagram, video/Maps profil pembuat dan GTM dibandingkan dari atribut lokal. Isi, izin akses atau ketersediaan eksternal tidak diuji. Tautan program tahunan yang sejak baseline hanya `#` tidak dianggap memiliki dokumen tersembunyi; tujuan resmi tetap memerlukan pengelola.

## Hal yang masih memerlukan informasi resmi

Foto program SMP dari folder SD, logo/caption alumni SMA, tanggal gelombang/diskon 2025 pada banner, serta tujuan brosur **tidak diganti**. Teks jabatan/program yang dipertahankan dari baseline bukan verifikasi faktual terkini. Judul artikel puskesmas dan placeholder dokumentasi Semarak Milad tetap tercatat di OPEN-ISSUES.

Perbedaan tambahan yang ditemukan: `form-ppdb.html` baseline mengambil footer bersama berisi **0821** dan memakai WhatsApp **0821**, sedangkan React saat ini memakai footer/WhatsApp **0813**. Pengelola sebelumnya meminta kedua nomor dan tujuan yang sudah digunakan dipertahankan tanpa menebak fungsi. Karena itu tidak dilakukan pergantian; pemetaan khusus halaman formulir masih memerlukan keputusan resmi. Ini pengecualian yang diungkapkan, bukan dinyatakan sama dengan baseline.

## Bukti yang digunakan kembali dan pengujian baru

| Cakupan | Bukti / tindakan |
| --- | --- |
| 35 aset, empat unit, galeri TK/Market Day/Raker, alumni/banner, logo pemilih unit | ASSET-RECOVERY, manifest, recovery-coverage-report dan recovery-visual-report; hash 35 berkas tetap cocok. Tidak mengulang seluruh slide/unit |
| Halaman yang teks/tujuan medianya sudah sama dan tidak diubah | Pemetaan semantik baru + browser-report/recovery reports sebelumnya; tidak mengulang seluruh suite 46 rute |
| Bagian yang baru dipulihkan | 24 pemeriksaan browser: lima halaman dan footer beranda × sebelum/sesudah × 1440/390. Screenshot bagian ditinjau; tidak ada overflow/error JavaScript pada hasil React |
| Build dan referensi | npm run build dan npm test lolos: 46 halaman, 68 alias, 1.320 tautan, 1.228 referensi aset/integrasi, 0 kegagalan |
| Perbandingan konten akhir | node scripts/audit-baseline.mjs lolos; semua selisih memiliki klasifikasi, 0 selisih tidak dikenal |

Bukti lokal baru: `test-results/baseline-content-build.log`, `baseline-content-static.log`, `baseline-completeness.log`, `baseline-content-browser-report.json`, dan screenshot dalam `test-results/baseline-content/`. Browser membaca hasil build melalui server statis lokal, bukan Vite dev atau Netlify; semua permintaan eksternal diblokir. Tidak membuka Forms/Drive/WhatsApp, mengirim data, push, deploy atau mengubah layanan eksternal. Perilaku CDN/dashboard Netlify masih belum diuji.
