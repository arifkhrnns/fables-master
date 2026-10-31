# Hasil validasi migrasi

## Tambahan Perpustakaan — 31 Oktober 2026

**Pemasangan gambar organisasi:** build tetap 48 halaman + 68 URL kompatibilitas; pemeriksaan statis terbaru mencakup 1.377 tautan dan 1.250 referensi aset tanpa kegagalan. `scripts/organization-test.mjs` lulus untuk akses langsung/refresh, rasio 1600:968, satu gambar utuh, sitemap dan klik/tap membuka PNG asli pada desktop 1440px serta ponsel 390px. Screenshot diperiksa: bagian paling bawah tidak terpotong. Hash aset publik, hasil build dan berkas yang dibuka identik dengan lampiran pengguna. Bukti: `test-results/organization-report.json` dan `test-results/organization/`.

Hasil tahap awal berikut dipertahankan sebagai catatan historis:

`npm run build`: 48 halaman statis + 68 URL kompatibilitas. `npm test`: 1.376 tautan, 1.248 referensi aset, 0 kegagalan. `scripts/library-test.mjs`: desktop 1440px dan ponsel 390px pada hasil build; dropdown Unit, navigasi perpustakaan, menu aktif/nonaktif, CTA, kembali ke website sekolah, WhatsApp, akses langsung/reload, gambar yang tersedia dan overflow lulus. Screenshot beranda dan menu telah dilihat. Tidak ada error JavaScript/hydration yang tercatat. Permintaan eksternal diblokir.

Pada pengujian awal tersebut gambar organisasi belum tersedia. **Pembaruan:** gambar organisasi dari pesan lanjutan pengguna sudah dipasang sebagai PNG asli 1600 × 968; hasil pengujian pemasangan dicatat di [LIBRARY.md](LIBRARY.md). Referensi desain beranda (gambar 1) masih belum tersedia sehingga belum dapat dibandingkan dengan beranda.

HTTP kedua route pada Vite port 5173 dan preview statis port 4173: 200 dengan markup navigasi perpustakaan. Uji browser/reload dilakukan pada server statis hasil build. Tidak ada pengujian runtime Netlify atau deploy; konfigurasi hosting tidak diubah. Snapshot hash memverifikasi aset dan halaman sekolah, PPDB, Forms, alias dan konfigurasi Netlify tetap utuh. Pengujian visual unit lama tidak diulang.

> Hasil terbaru pemeriksaan kelengkapan ee33d1f ada pada bagian terakhir dan [BASELINE-COMPLETENESS.md](BASELINE-COMPLETENESS.md). Bukti pengujian yang tidak terdampak digunakan kembali.

> Catatan migrasi awal di bawah memakai baseline Git yang tertinggal. Hasil pemulihan terbaru tercatat pada bagian terakhir dan ASSET-RECOVERY.md. Klaim kelengkapan pada baseline awal tidak membuktikan kesetiaan terhadap origin/main ee33d1f.

Lingkungan: Windows, Node 24.18.0, npm 11.16.0, Vite 8.3.5, React 19.3.1, Chrome headless melalui Playwright. Dijalankan lokal pada 31 Oktober 2026; tidak ada deploy atau pengiriman data pendaftaran.

## Pemeriksaan yang dijalankan

| Pemeriksaan | Hasil |
| --- | --- |
| Instalasi dependency | Berhasil; npm melaporkan 0 kerentanan saat instalasi |
| `npm run dev` | Berhasil, URL utama/artikel langsung merender React dan URL tidak dikenal mengembalikan 404 |
| `npm run build` | Berhasil; 42 HTML berisi konten React + 68 HTML URL kompatibilitas |
| `npm test` | Lolos; referensi 1.037 tautan dan 1.015 aset/integrasi pada HTML, ditambah URL CSS/font, tidak memiliki referensi lokal hilang |
| Chrome desktop 1440 × 900 | 42 rute diperiksa dan di-refresh; tidak ditemukan error JavaScript lokal, respons aset lokal gagal, gambar rusak, atau overflow horizontal |
| Chrome ponsel 390 × 900 | 42 rute diperiksa dan di-refresh dengan hasil yang sama |
| Interaksi pada kedua ukuran | Menu/dropdown TK, pemilih unit SMP, perpindahan carousel hero/ekstrakurikuler, URL WhatsApp, lightbox dan Escape, halaman tidak ditemukan: lolos |
| JavaScript dimatikan | Artikel Safari Sosial tetap berisi konten dalam HTML |
| Formulir PPDB asli | Iframe Google Forms termuat. Menekan Berikutnya dengan isian kosong menampilkan “Pertanyaan ini wajib diisi”. Tidak ada data dimasukkan, endpoint pengiriman/POST diblokir |
| Perbandingan teks | Teks heading/paragraf non-demo dari 40 halaman sumber dipertahankan; 0 kehilangan setelah normalisasi whitespace. Bukti: content-preservation.json |
| Perbandingan visual | Tangkapan desktop/ponsel sebelum dan sesudah. Posisi logo/menu, warna, foto hero, teks, bentuk bagian, dan layout unit dibandingkan; jarak navbar/carousel dikoreksi mengikuti sumber |
| Pembersihan | Build dan pemeriksaan referensi diulang setelah sumber template lama dihapus; berhasil |

Gambar TK/SD dan aset lain yang hilang **sudah tidak ada pada sumber awal**. Kini ditampilkan sebagai “Foto belum tersedia”, bukan dilaporkan sebagai foto yang berhasil dipulihkan. Konten lama yang sebelumnya tersembunyi oleh animasi WOW kini terlihat tanpa menunggu JavaScript/scroll. Kontrol carousel ditambahkan agar bisa digunakan melalui keyboard dan dijeda.

CSS khusus delapan artikel dibandingkan byte demi byte sebelum digabung menjadi dua file bersama. Pengujian tambahan `scripts/smoke-test.mjs` mencakup rute yang terkena deduplikasi, dua URL profil pembuat, autoplay, font, URL kompatibilitas, dan server dev. Script ini memerlukan server dev di port 5173.

Hasil pengujian tambahan akhir: 68 URL kompatibilitas lolos; 22 pemeriksaan halaman (11 halaman × dua ukuran, termasuk home4) lolos; autoplay dan font lolos; empat pemeriksaan dev (tiga URL tersedia dan satu 404) lolos, tanpa error JavaScript. Build akhir dan validasi referensi juga diulang setelah perbaikan tahun copyright dan penghapusan tautan sosial `javascript:void(0)` yang memang tidak memiliki tujuan.

## Bukti lokal

- `test-results/build.log`: log build akhir.
- `test-results/static-report.json`: hasil referensi/metadata.
- `test-results/browser-report.json`: hasil 84 kunjungan serta interaksi.
- `test-results/form-report.json`: validasi kosong Google Forms, tanpa data isian.
- `test-results/smoke-report.json`: pemeriksaan tambahan setelah perapian akhir.
- `test-results/*-1440.png`, `*-390.png`: tangkapan sesudah migrasi, termasuk variasi viewport.
- `test-results/before/`: tangkapan awal delapan halaman representatif pada kedua ukuran.
- `docs/content-preservation.json`: hitungan teks halaman dan daftar kehilangan (kosong).

## Batas pemeriksaan

- Hosting produksi tidak diakses untuk konfigurasi atau deploy. Apache ErrorDocument telah disiapkan, tetapi belum diuji pada server produksi/provider sebenarnya. Nginx/hosting non-Apache memerlukan pengaturan 404 dari panel/server.
- Google Forms hanya diuji validasi halaman pertama dalam keadaan kosong; tidak ada pengiriman, alur pembayaran, login, atau validasi backend pendaftaran yang dicoba.
- WhatsApp diperiksa tujuan URL-nya, tanpa membuka percakapan/mengirim pesan. Tautan dokumentasi eksternal dipertahankan, tidak memverifikasi izin setiap folder Drive.
- GTM tidak dikirim selama tes. Google Maps diblokir dalam pengujian otomatis. Instagram/Google Fonts/Forms bergantung jaringan, kebijakan browser, dan ketersediaan layanan eksternal; hasil “tanpa error” di atas berlaku untuk aplikasi/aset lokal.
- Chrome desktop dan emulasi viewport ponsel diuji; bukan perangkat fisik, Safari, atau Firefox. Tidak mengklaim kesamaan piksel sempurna, terutama pada embed pihak ketiga dan aset yang sejak awal hilang.
- SMP/SMA masih halaman perbaikan; tahun ajaran Google Forms 2025/2026, dua nomor kontak berbeda, dan judul isi artikel puskesmas perlu tinjauan pengelola. Tidak ada informasi pengganti yang dikarang.

## Validasi terbatas tindak lanjut — 31 Oktober 2026

Perubahan kode hanya pada tombol brosur `src/pages/ppdb.jsx` dan deskripsi home4 di `src/data/routes.json`. Tidak mengulang pengujian seluruh rute, carousel, menu, atau Google Forms. Semua permintaan eksternal diblokir dalam pemeriksaan browser tindak lanjut; tidak membuka halaman formulir atau mengirim data.

| Pemeriksaan terkait perubahan | Hasil |
| --- | --- |
| Build setelah perubahan | Berhasil: 42 halaman React + 68 URL kompatibilitas; `test-results/follow-up-build.log` |
| PPDB di Chrome 1440px dan 390px | Empat tombol brosur bertipe button, disabled, tanpa href palsu, dengan label belum tersedia; tidak ada overflow, error JavaScript, atau respons aset lokal gagal |
| Tautan pendaftaran/WhatsApp pada PPDB | Nilai href tetap; tidak diklik atau dikirim |
| HTML home4 | Meta description “SIT Ulil Albab”; testimoni demo tidak tersisa; noindex tetap |
| Inventaris laporan | 28 nama gambar unik, seluruh 39 rute kontak sekolah tercantum; pemetaan selector CSS dan pintu masuk formulir dibaca dari sumber/HTML lokal |

Bukti baru: `test-results/follow-up-report.json`, `test-results/follow-up-brochures-1440.png`, dan `test-results/follow-up-brochures-390.png`. Tangkapan 390px ditinjau untuk memastikan label tombol muat dalam kartu. Laporan pengujian migrasi sebelumnya tetap dipertahankan sebagai catatan historis; rincian informasi yang menunggu pengelola ada di [OPEN-ISSUES.md](OPEN-ISSUES.md).

## Pembaruan PPDB 2026/2027 dan konfigurasi Netlify — 31 Oktober 2026

Pengelola mengonfirmasi tahun ajaran 2026/2027, penggunaan Google Forms yang sama, penggunaan kedua nomor untuk PPDB/kontak umum, serta GitHub/Netlify/IDwebhost. Teks/metadata aktif diperbarui, pemetaan kontak tetap, dan `netlify.toml` ditambahkan. Tidak mengulang audit inventaris, pengujian seluruh browser, carousel/menu, atau pemeriksaan Google Forms eksternal.

| Pemeriksaan terkait perubahan | Hasil |
| --- | --- |
| `npm run build` | Lolos, 42 dokumen halaman + 68 dokumen kompatibilitas, sitemap/robots/aset tetap di dist |
| `npm test` | Lolos, 1.037 tautan dan 1.015 referensi aset/integrasi; tidak ada referensi lokal hilang. Relevan karena artefak lengkap akan dipublikasikan Netlify |
| Sintaks TOML | Berhasil diparse dengan @iarna/toml 2.2.5, dipasang pada folder alat di luar proyek; dependency/lockfile proyek tidak diubah |
| Konfigurasi | Build command lengkap, publish dist, Node 24.18.0, Pretty URLs false; tidak ada redirect wildcard/SPA maupun dist/_redirects |
| Rute/canonical/alias pada artefak | Semua canonical lokal menunjuk dokumen yang ada; 68 target alias dan fragmen sesuai; tidak ada siklus alias atau tabrakan nama.html dengan nama/index.html |
| Tujuan Forms dan kontak | Identitas URL embed/langsung serta phone/whatsapp seluruh rute sama dengan snapshot sebelum perubahan; Footer dan WhatsAppButton tidak berubah |
| Arsip/profil | Hash 40 berkas halaman lain dan 2 komponen kontak sama; metadata rute di luar beranda/PPDB/formulir tetap. Tahun arsip tidak diganti |
| Chrome melalui server statis lokal | Beranda, PPDB, dan halaman formulir pada 1440px/390px, akses langsung dan refresh: 200, tanpa overflow, error JavaScript, atau aset lokal gagal |
| Pemeriksaan HTTP server statis | Dua artikel nested, tiga contoh alias dan aset bernama spasi/kapital: 200; path HTML/direktori/aset tidak dikenal: 404 |
| Middleware Vite lokal | `/`, `/ppdb.html`, `/form-ppdb.html`: 200 dan berisi tahun baru; `/tidak-ada.html`: 404 |
| Materi visual PPDB | Foto latar UPACARA ditinjau; tidak terlihat label tahun ajaran lama. Screenshot PPDB/formulir 390px ditinjau; teks tahun baru muat |

Semua permintaan jaringan eksternal pada pengujian browser diblokir, termasuk iframe Google Forms, GTM, Maps, dan WhatsApp. Area iframe terlihat kosong pada screenshot karena pemblokiran tersebut. Yang diverifikasi adalah halaman pembungkus serta atribut URL, bukan judul/isi Google Forms. Tidak ada data diisi, klik pengiriman, atau pesan dikirim.

**Batas Netlify:** tidak ada Netlify CLI/runtime/CDN atau build environment Netlify yang dijalankan. Parser TOML, pemeriksaan artefak, server statis, dan middleware Vite bukan emulasi penuh Netlify. Konfigurasi mengikuti dokumentasi resmi; normalisasi `.html`/slash, custom 404 CDN, context overrides, dan aturan yang mungkin ada di akun harus dicocokkan melalui matriks [NETLIFY.md](NETLIFY.md). Tidak mengklaim pengujian produksi atau deploy preview sudah dilakukan.

Bukti lokal terbaru:

- `test-results/ppdb-netlify-build.log`, `ppdb-netlify-static.log`.
- `test-results/ppdb-netlify-config-report.json`: konfigurasi, alias/canonical, identitas Forms/kontak, dan preservasi sumber.
- `test-results/ppdb-netlify-browser-report.json`: enam kunjungan browser beserta refresh, HTTP server statis dan Vite.
- `test-results/ppdb-2026-*-1440.png`, `ppdb-2026-*-390.png`: tampilan lokal tiga halaman terkait.
- `test-results/ppdb-netlify-before.json`: snapshot lokal sebelum perubahan untuk perbandingan.

Tidak ada git push, login/link akun, deploy, perubahan Google Forms, DNS/nameserver, atau layanan eksternal. Pada tahap ini foto/profil SMP/SMA masih dianggap belum tersedia; kesimpulan itu dikoreksi oleh pemulihan berikutnya. Pembagian fungsi nomor tetap belum ditentukan.

## Pemulihan regresi aset — 31 Oktober 2026

Baseline diperbaiki: origin/main lokal `ee33d1f1318478236ed4b657d5c50989abaa62e8` memiliki profil dan aset yang tidak ada pada HEAD `61b4601` yang dipakai migrasi awal. ZIP, retained, seluruh pohon/subfolder template dan nama objek riwayat Git lokal juga diperiksa. Rincian sumber, jumlah dan tabel per aset ada di [ASSET-RECOVERY.md](ASSET-RECOVERY.md).

| Pemeriksaan terkait pemulihan | Hasil |
| --- | --- |
| `npm run build` | Lolos: 46 halaman statis + 68 URL kompatibilitas |
| `npm test` | Lolos: 1.191 tautan, 1.228 referensi aset/integrasi; 0 kegagalan |
| Identitas 35 aset | SHA-256 dan ukuran sama dengan sumber asli; tersedia di public dan dist |
| Kelengkapan empat unit | Semua gambar, latar inline, heading dan paragraf sumber ee33d1f ada pada hasil build; nama berkas dist diperiksa dengan kapitalisasi persis |
| Perbandingan browser | 16 kunjungan: empat unit × sebelum/sesudah × 1440px/390px; screenshot sebelum/sesudah ditinjau visual |
| Gambar dan latar hasil pemulihan | Decode berhasil, elemen berukuran positif dan terlihat; tidak ada overflow horizontal atau error JavaScript pada empat halaman unit |
| Galeri TK | Lima slide dilalui pada kedua viewport; gambar aktif diperiksa melalui hit test area yang benar-benar terlukis, bukan sekadar HTTP 200 |
| Alumni SMA | Enam item dapat dicapai melalui 2 posisi desktop/5 posisi ponsel; setiap posisi diperiksa visibilitasnya; pemetaan logo asli yang tidak cocok caption tetap dicatat untuk pengelola |
| Banner SMA | Terlihat penuh sesuai rasio asli; dialog pembesaran dibuka, gambar terdecode, ditutup dengan Escape pada kedua viewport |
| Market Day/Raker | Masing-masing 7 slide unik terlihat pada kedua viewport; seluruh slide diambil screenshot |
| Halaman terkait | 24 pemeriksaan (dua galeri artikel dan sepuluh halaman lain × dua viewport), termasuk empat artikel yang dipulihkan, beranda, indeks, sejarah, Fathers Day, Camp Leadership dan GTC |
| Komponen bersama yang berubah | 12 pemeriksaan regresi: keempat logo pemilih unit, tombol lanjut carousel hero dan ekstrakurikuler pada kedua viewport |
| Preservasi perubahan sebelumnya | Hash PPDB, PPDBForm, site.js, netlify.toml, package/lockfile, Footer dan WhatsAppButton tidak berubah; tahun aktif 2026/2027; tidak ada tujuan kontak lama yang diganti |
| Ikon berita tambahan | 40 pemeriksaan terarah (20 halaman × dua viewport): ikon terlihat/terdecode, href sama persis dengan HTML asal, tanpa membuka WhatsApp |
| Kontak yang dikembalikan | Tiga puluh WhatsApp unit/artikel/indeks/404 mengikuti href HTML asal, bukan penetapan fungsi baru; 43 footer sekolah (15 nomor 0821, 28 nomor 0813), 3 profil pembuat tetap terpisah |

Kegagalan awal pada tautan literal `LINK DRIVE DOKUMENTASI` di artikel yang dipulihkan diperbaiki menjadi keterangan non-tautan; build dan pemeriksaan referensi setelah perbaikan lolos. Perbedaan `.JPG`/`.jpg` pada galeri TK kelima dan Raker ketujuh juga diperbaiki.

Tangkapan desktop/ponsel empat unit dan lembar tinjauan seluruh slide TK, Market Day, Raker serta alumni diperiksa. Foto profil, tiga hero CSS, banner, kartu program dan galeri tampil. Perbedaan tata letak kecil dari navigasi/komponen React yang sudah ada dipertahankan; tidak mengklaim kesamaan piksel sempurna. Banner SMA bertahun 2026–2027 masih memiliki tanggal gelombang/diskon 2025 pada piksel gambar; tidak diedit atau dianggap mutakhir otomatis.

Pengujian menggunakan Chrome dan hasil build melalui **server statis lokal**, bukan Vite dev ataupun lingkungan Netlify. Jaringan eksternal diblokir untuk hasil pemulihan, termasuk Forms, Instagram, GTM, WhatsApp dan Drive. Baseline HTML lama hanya diizinkan memuat Bootstrap dari CDN publik; tidak melakukan perubahan eksternal. Isi Instagram/izin Drive tidak divalidasi. Tidak mengulang seluruh suite browser migrasi yang tidak terkait.

Bukti lokal: `test-results/recovery-build.log`, `recovery-static.log`, `recovery-coverage-report.json`, `recovery-visual-report.json`, `recovery-protected.json`, `recovery-contact-report.json`, serta screenshot dalam `test-results/recovery-visual/`. Manifest yang ikut dokumentasi: `docs/asset-recovery-manifest.json`. Konfigurasi Netlify tetap; perilaku CDN/dashboard belum diuji, sebagaimana batas pada [NETLIFY.md](NETLIFY.md). Tidak ada push, deploy, pengisian formulir, atau perubahan layanan eksternal.

## Kelengkapan konten baseline ee33d1f — 31 Oktober 2026

Seluruh 42 HTML baseline dipetakan ke 35 halaman sekolah, tiga profil pembuat, dua komponen bersama, dan dua contoh/demo yang sengaja dikecualikan. Delapan rute arsip/kompatibilitas dari versi lebih lama tetap dipertahankan. Perbandingan memakai makna teks/bagian, tujuan tautan dan identitas embed, bukan kesamaan pohon HTML/JSX. Hasil dan seluruh pengecualian: [BASELINE-COMPLETENESS.md](BASELINE-COMPLETENESS.md), data [baseline-completeness.json](baseline-completeness.json).

Pemulihan tambahan menyentuh lima halaman dan satu komponen bersama: judul indeks berita, nama/kartu tujuan GTC, tiga pengantar/kartu dokumentasi, serta tiga pintasan footer. Tidak ada perubahan gambar, tahun PPDB, URL Forms, konfigurasi Netlify atau pemetaan nomor.

| Pemeriksaan | Hasil |
| --- | --- |
| `npm run build` | Lolos: 46 halaman + 68 URL kompatibilitas |
| `npm test` | Lolos: 1.320 tautan, 1.228 referensi aset/integrasi; 0 kegagalan. Relevan karena footer dipakai 43 rute sekolah |
| `node scripts/audit-baseline.mjs` | Lolos: 257 blok teks, total 373 potongan teks (unik per halaman), 160 referensi tautan isi, 21 embed/iframe, menu/footer dan kontak; 0 selisih tanpa klasifikasi |
| Dokumen unduhan | Sepuluh tujuan folder Drive sama; tidak ada berkas unduhan publik/brosur resmi pada baseline. Placeholder dibedakan dari dokumen hilang |
| Browser sebelum/sesudah | 24 pemeriksaan bagian: lima halaman terdampak + footer beranda, dua versi, viewport 1440px/390px |
| Tampilan baru | Screenshot sebelum/sesudah ditinjau; daftar kampus, pengantar dokumentasi, judul dan tautan footer tampil tanpa overflow/error JavaScript |
| Tujuan lokal | Empat tujuan GTC merespons 200; tiga pintasan footer diklik ke fragmen beranda yang benar pada dua viewport |
| Tujuan eksternal | Href dokumentasi diperiksa tanpa klik; seluruh permintaan eksternal browser diblokir |
| Preservasi | Hash tujuh berkas terlindungi (PPDB, formulir, site.js, Netlify, package/lockfile, WhatsAppButton) serta 35 gambar asli tetap sama. Footer hanya menambah pintasan; nomor tidak diubah |
| Bukti digunakan kembali | Pemulihan empat unit, seluruh slide, banner, logo, serta halaman tak berubah memakai recovery reports dan browser-report sebelumnya; tidak menjalankan ulang seluruh suite browser |

Selisih kontak yang diungkapkan: baseline halaman formulir memakai footer/WhatsApp 0821, sementara React saat ini 0813. Nomor saat ini dipertahankan sesuai arahan pengelola dan dicatat untuk keputusan resmi, tidak dinyatakan identik baseline. Salam PPDB tetap menuju 0821 walaupun teks pembukanya berbeda tanda baca/kata SIT. Foto SMP, logo alumni, tanggal banner, brosur dan placeholder dokumentasi tetap terbuka.

Bukti baru: `test-results/baseline-content-build.log`, `baseline-content-static.log`, `baseline-completeness.log`, `baseline-content-browser-report.json`, dan `test-results/baseline-content/`. Pengujian menggunakan hasil build pada server statis lokal; tidak menguji Netlify/CDN atau mengulang Vite dev. Tidak ada push, deploy, akses/pengiriman Google Forms, atau perubahan layanan eksternal.
