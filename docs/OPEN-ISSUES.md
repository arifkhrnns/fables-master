# Tindak lanjut masalah terbuka

## Tambahan Perpustakaan — 31 Oktober 2026

Beranda, navigasi dan gambar organisasi asli tersedia lokal. **Gambar 2 sudah diterima dari pesan lanjutan pengguna** dan dipasang utuh sebagai `public/assets/library/struktur-organisasi.png`, tanpa perubahan byte atau pengetikan ulang. Status menunggu gambar organisasi ditutup; tujuan WhatsApp tidak diubah mengikuti nomor yang tercetak pada gambar. **Gambar 1 (referensi desain beranda) masih belum tersedia**, sehingga pencocokan dengan referensi tetap terbuka. Lihat [LIBRARY.md](LIBRARY.md) untuk sumber aset dan hasil uji. Masalah konten lama di bawah tetap ditunda.

Pemeriksaan kelengkapan seluruh baseline ee33d1f telah ditambahkan di [BASELINE-COMPLETENESS.md](BASELINE-COMPLETENESS.md). Judul indeks, daftar tujuan GTC, pengantar dokumentasi tiga artikel dan pintasan footer yang terlewat sudah dipulihkan. Tidak ada halaman sekolah baseline yang belum dipetakan; pengecualian dan informasi resmi yang belum tersedia tetap dinyatakan terpisah.

Status lokal 31 Oktober 2026, setelah pemulihan aset. Sumber sebelum migrasi yang benar untuk unit adalah `ee33d1f` (origin/main yang sudah tersedia lokal), bukan hanya HEAD `61b4601`. Koreksi audit, tabel bukti lengkap, daftar sumber pencarian dan hasil visual: [ASSET-RECOVERY.md](ASSET-RECOVERY.md).

PPDB aktif **2026/2027**, Forms tetap sama, kedua nomor untuk PPDB/kontak umum tanpa pembagian spesifik. GitHub menyimpan kode, Netlify build/hosting, IDwebhost mengelola domain. Tidak ada perubahan layanan eksternal.

## 1. Status gambar setelah pemulihan

35 aset asli telah dipulihkan beserta penggunaannya; semua aset empat halaman unit sesuai sumber terbaru sudah tersedia dan tampil. Kesimpulan lama “hilang sejak sumber awal” tidak berlaku: baseline migrasi tertinggal. Retained dan ZIP telah ditelusuri; aset pemulihan ditemukan di Git terbaru. Manifest hash ada di [asset-recovery-manifest.json](asset-recovery-manifest.json).

Yang masih perlu keputusan:

| Halaman | Informasi yang diperlukan | Lokasi |
| --- | --- | --- |
| SMP | Konfirmasi tiga foto program yang oleh HTML lama memang diarahkan ke folder SD; tidak memilih pengganti sendiri | src/pages/smp.jsx; assets/custom/images/sd/farm.JPG, panah.JPG, funcooking.JPG |
| SMA | Logo/caption dan bukti enam kartu alumni; sumber memakai satu logo Unsika untuk semua kampus | src/pages/sma.jsx; assets/custom/images/sma/unsika.png |
| SMA | Status jadwal/promosi pada banner: tahun 2026–2027, tetapi tanggal gelombang/diskon masih September–Oktober 2025 | public/assets/custom/images/sma/banner.jpg |
| PPDB empat unit | Tujuan unduhan brosur resmi dan periode berlakunya; banner SMA belum ditetapkan sebagai brosur | src/pages/ppdb.jsx |
| /uanews/semarak_milad25.html | URL dokumentasi resmi; sumber hanya “LINK DRIVE DOKUMENTASI”, kini teks non-tautan | src/pages/uanews/semarak_milad25.jsx |

Nama foto TK/SD lama yang tidak ditemukan beserta sumber pencariannya dicatat di ASSET-RECOVERY. Nama tersebut sudah tidak dipakai oleh halaman unit terbaru. Berkas biodata, gambar home4 dan latar demo di inventaris awal berada di luar pemulihan unit; sebagian tersedia dalam riwayat Git, sehingga tidak lagi diklaim tidak pernah ada. Pembersihan tambahan ditunda.

## 2. Profil SMP/SMA

**Profil SMP/SMA tersedia pada sumber sebelum migrasi dan sudah dikembalikan.** SMP mencakup hero, foto/nama kepala sekolah Wihastari,S.Pd, uraian profil dan tiga program. SMA mencakup banner, foto/nama kepala sekolah Nur Alifiyanti, S.Pd., M.Pd., uraian profil dan alumni. Metadata menggunakan isi asli; kedua halaman tidak lagi pesan perbaikan/noindex dan masuk sitemap.

Yang belum dapat ditetapkan dari proyek: validitas terkini nama/jabatan dan klaim program/alumni, visi-misi unit pada kartu PPDB yang masih kosong, rincian biaya/jadwal/kuota/cakupan formulir per unit, brosur resmi, serta pembagian fungsi/petugas kontak. Data fasilitas terperinci, akreditasi dan NPSN SMP/SMA tidak ditambahkan tanpa sumber. Teks yang dipulihkan adalah konten sekolah versi lama, bukan verifikasi faktual terbaru.

## 3. Kontak sekolah dan pembuat

**Perbedaan baseline yang perlu keputusan resmi:** `ee33d1f:form-ppdb.html` memakai WhatsApp 0821 dan mengambil `footer.html` yang berisi 0821. React saat ini memakai footer/WhatsApp 0813 pada halaman formulir. Tujuan yang sudah digunakan dipertahankan sesuai arahan pengelola; tidak diseragamkan otomatis. Konfirmasi pemetaan khusus halaman formulir masih diperlukan. Salam WhatsApp halaman PPDB memiliki tambahan koma dan kata SIT, tetapi nomor tujuannya tetap 0821.

| Nomor | Penggunaan | Jumlah |
| --- | --- | --- |
| 0821-2203-7474 | Footer Ibu Lina, WhatsApp dengan pesan PPDB | Footer 15 halaman; WhatsApp mengambang 35 halaman; tombol isi PPDB |
| 0813-1418-0955 | Footer Ibu Lina, WhatsApp halaman formulir; juga tercetak INFO SPMB pada banner SMA | Footer 28 halaman; WhatsApp mengambang 1 halaman |
| 08817597553 | Pembuat Muhammad Rizqi Maulana, terpisah dari sekolah | 3 profil standalone |

Tabel seluruh 43 rute footer sekolah. Nilai berasal dari `src/data/routes.json` dengan fallback `src/components/Footer.jsx`; WhatsApp dirender oleh `WhatsAppButton.jsx`. Footer merupakan teks, bukan tautan tel. Tidak ada tujuan lama yang diganti. Tiga puluh tombol WhatsApp yang hilang dipulihkan persis dari HTML unit/artikel ee33d1f.

| Halaman | Footer | WhatsApp |
| --- | --- | --- |
| `/404.html` | 0821 | 0821 |
| `/anbk.html` | 0813 | — |
| `/blog-cat-masonry.html` | 0821 | 0821 |
| `/blog-details2.html` | 0821 | — |
| `/form-ppdb.html` | 0813 | 0813 |
| `/header2-light.html` | 0821 | 0821 |
| `/home4.html` | 0821 | — |
| `/index.html` | 0821 | 0821 |
| `/kolosaldrama.html` | 0821 | — |
| `/pawai.html` | 0821 | — |
| `/ppdb.html` | 0821 | 0821 |
| `/sd.html` | 0821 | 0821 |
| `/sejarah.html` | 0821 | 0821 |
| `/supervisi.html` | 0813 | — |
| `/tk.html` | 0821 | 0821 |
| `/uanews/anbk.html` | 0813 | 0821 |
| `/uanews/bromo.html` | 0813 | 0821 |
| `/uanews/campleadersip.html` | 0813 | 0821 |
| `/uanews/fathersday.html` | 0813 | 0821 |
| `/uanews/GTC.html` | 0813 | 0821 |
| `/uanews/its.html` | 0813 | 0821 |
| `/uanews/kolosaldrama.html` | 0813 | 0821 |
| `/uanews/mabit.html` | 0813 | 0821 |
| `/uanews/marketday.html` | 0813 | 0821 |
| `/uanews/maulid.html` | 0813 | 0821 |
| `/uanews/museumangkot.html` | 0813 | 0821 |
| `/uanews/pawai.html` | 0813 | 0821 |
| `/uanews/puskesmas.html` | 0813 | 0821 |
| `/uanews/raker.html` | 0813 | 0821 |
| `/uanews/safarisosial.html` | 0813 | 0821 |
| `/uanews/sdita.html` | 0813 | 0821 |
| `/uanews/supervisi.html` | 0813 | 0821 |
| `/uanews/unbraw.html` | 0813 | 0821 |
| `/uanews/upacara17.html` | 0813 | 0821 |
| `/uanews/walimatu.html` | 0813 | 0821 |
| `/upacara17.html` | 0813 | — |
| `/visimisi.html` | 0821 | 0821 |
| `/smp.html` | 0821 (default) | 0821 |
| `/sma.html` | 0821 (default) | 0821 |
| `/uanews/isra_miraj.html` | 0813 | 0821 |
| `/uanews/Milad_25.html` | 0813 | 0821 |
| `/uanews/semarak_milad25.html` | 0813 | 0821 |
| `/uanews/seminar_karil.html` | 0813 | 0821 |

Masih diperlukan: pembagian fungsi/petugas per nomor atau keputusan bahwa keduanya setara. Tidak ada bukti pembagian eksklusif PPDB versus kontak umum atau per jenjang. Peralihan PPDB (0821) ke formulir (0813), perbedaan artikel akar/uanews, serta fallback SMP/SMA tetap dicatat, bukan diseragamkan. Label Ibu Lina mengikuti sumber; banner hanya membuktikan 0813 juga dipakai SPMB.

Kontak pembuat tetap pada `src/pages/biodata.jsx`, `src/pages/maulkuadrat.jsx` dan `src/pages/meyawo/public_html/maulkuadrat.jsx`; ketiganya standalone tanpa footer sekolah.

## 4. PPDB 2026/2027 dan Google Forms yang tetap digunakan

**Satu formulir unik**, dengan dua bentuk URL. Tahun 2025/2026 yang ditemukan pada audit berasal dari isi Google Forms, bukan parameter URL. Bukti lokal `test-results/form-report.json` mencatat judul “PPDB SIT Ulil Albab 2025/2026”; tanggal pemeriksaan sebelumnya tercatat 31 Oktober 2026 di VALIDATION. Status eksternal tidak diperiksa ulang pada tindak lanjut ini. **Tahun ajaran website sekarang 2026/2027**, sesuai konfirmasi pengelola; bukti judul 2025/2026 di atas tetap merupakan temuan historis pada isi formulir yang belum diperbarui oleh pekerjaan ini.

| Bentuk | URL lengkap | Halaman/penggunaan | Referensi |
| --- | --- | --- | --- |
| Embed | `https://docs.google.com/forms/d/e/1FAIpQLSfcOFD1bp7WGoWrKmTtHsWQLm_qepCG8avFr54juUgx_4K5xg/viewform?embedded=true` | `/form-ppdb.html`, iframe pendaftaran | `src/data/site.js:7`; `src/components/PPDBForm.jsx:9` |
| Buka langsung | `https://docs.google.com/forms/d/e/1FAIpQLSfcOFD1bp7WGoWrKmTtHsWQLm_qepCG8avFr54juUgx_4K5xg/viewform` | `/form-ppdb.html`, tautan alternatif jika iframe tidak tampil | `src/components/PPDBForm.jsx:10`, diturunkan dari `site.form` |

| Pintu masuk lokal | Tujuan | Lokasi | Cakupan |
| --- | --- | --- | --- |
| Menu “Pendaftaran” | `/form-ppdb.html` | `src/data/site.js:17`, komponen Header melalui App | Semua 43 halaman dalam tabel kontak, termasuk halaman formulir sendiri |
| Tombol “Daftar 2026/2027” hero pertama | `/form-ppdb.html` | `src/pages/index.jsx:25` | `/index.html` dan alamat `/` |
| Tombol “Daftar 2026/2027” hero kedua | `/form-ppdb.html` | `src/pages/index.jsx:42` | `/index.html` dan alamat `/` |
| “Daftar 2026/2027” | `/form-ppdb.html` | `src/pages/ppdb.jsx:22` | `/ppdb.html` |
| Tautan alternatif Google Forms | URL langsung di atas | `src/components/PPDBForm.jsx:10` | `/form-ppdb.html` |

Pada 46 dokumen rute utama terdapat 46 tautan lokal ke `/form-ppdb.html` (43 header + 3 tombol isi), 1 tautan langsung ke Google Forms, dan 1 iframe. `/` menggunakan dokumen beranda yang sama, bukan formulir tambahan. Tidak ditemukan formulir PPDB kedua atau tautan `forms.gle` di sumber aktif. Berkas alias hanya mengarahkan pengunjung ke halaman lain; tidak memiliki formulir tersendiri. Draf `retained/home1.html` tidak memiliki tautan Google Forms/form-ppdb dan tidak dikirim dalam build.

Sudah dikonfirmasi: **2026/2027**, URL embed dan tautan langsung tetap sama. Label tombol beranda dan PPDB, judul/banner PPDB, judul halaman formulir di luar iframe, serta metadata terkait telah diperbarui. Nilai antarmuka memakai `site.ppdbYear`; metadata tiga rute diselaraskan di `routes.json`. Tidak ada penggantian tahun menyeluruh pada arsip berita/kegiatan.

| Lokasi tahun/visual | Status dan tindakan berikutnya |
| --- | --- |
| Teks website: beranda, portal PPDB, halaman formulir dan metadata | Selesai lokal, 2026/2027 |
| Isi Google Forms pada URL embed/langsung di atas | Bukti pemeriksaan lama mencatat judul 2025/2026. Pemilik formulir perlu memperbarui judul/isi untuk 2026/2027. Formulir tidak dibuka, diedit, atau dikirim dalam pekerjaan ini |
| `public/assets/custom/images/UPACARA (1).jpg`, latar hero beranda dan PPDB | Foto kegiatan ditinjau visual; tidak terlihat label tahun ajaran PPDB 2025/2026. Tidak diubah. Logo unit pada portal adalah logo, bukan banner tahun ajaran |
| Banner SMA yang dipulihkan | Tahun gambar 2026–2027, tetapi jadwal gelombang/diskon masih 2025; perlu keputusan pengelola, berkas tidak diedit |
| Brosur empat unit | Tidak ada tautan brosur resmi; masih “Brosur belum tersedia”. Jika pengelola memilih gambar/PDF dari retained atau sumber lain, tahun tercetak perlu diperiksa sebelum dipublikasikan |
| Foto/arsip berita dan kegiatan terdahulu | Tahun dan berkas asli dipertahankan; tidak diklaim sudah diperbarui menjadi materi PPDB baru |

Yang masih diperlukan: pembaruan isi Google Forms oleh pemilik, konfirmasi cakupan per unit, status/jadwal pendaftaran, dan brosur resmi jika akan ditampilkan. Pemeriksaan visual dibatasi pada materi PPDB aktif; tidak melakukan OCR/audit ulang seluruh arsip gambar.

## 5. Hosting Netlify dan pengaturan yang perlu dicocokkan

Pengelola sudah memastikan **GitHub → build dan hosting Netlify**, sedangkan domain `ulilalbab.sch.id` dikelola melalui **IDwebhost**. Pertanyaan provider/FTP/document root Apache pada audit awal sudah digantikan oleh informasi ini; tidak perlu menentukan cara upload FTP ke IDwebhost.

| Komponen | Status terbaru |
| --- | --- |
| `netlify.toml` | Dibuat lokal: build `npm run build`, publish `dist`, Node `24.18.0`, Pretty URLs `false` |
| Generator HTML | Tetap menghasilkan 46 halaman statis dan 68 URL kompatibilitas, sitemap dan robots |
| Routing Netlify | Index dan custom `404.html` memakai perilaku bawaan Netlify. Tidak ada fallback SPA, redirect slash-only, atau aturan domain baru |
| `.htaccess` | Hanya artefak opsional Apache; tidak diandalkan oleh Netlify |
| Domain/canonical | Tetap `https://ulilalbab.sch.id`; DNS dan nameserver tidak diubah |
| URL lama | HTML alias tetap tersedia; tidak diubah menjadi HTTP 301 dan tidak diberi redirect balik |
| Validasi produksi | Belum diuji di CDN/build environment Netlify; validasi lokal tidak membuktikan pengaturan dashboard yang sedang berlaku |

Yang masih perlu dicocokkan di dashboard: site/repository dan production branch yang benar; base/package directory root proyek; build command/publish directory; Node dan pemasangan devDependencies; context overrides; Pretty URLs; build plugins/Edge Functions/aturan redirect lama; primary domain dan HTTPS yang sudah ada. Rincian beserta matriks URL .html/tanpa ekstensi/trailing slash ada di [NETLIFY.md](NETLIFY.md).

Tidak ada git push, link/login site, deploy, perubahan dashboard, DNS, nameserver, atau pengiriman formulir. Sumber dan konfigurasi siap ditinjau lokal.


## 6. Batas dan tindak lanjut editorial

Judul isi artikel puskesmas masih menyebut Safari Sosial walaupun berita membahas TTD/cek HB; perlu judul resmi dari pengelola. Data terstruktur [open-issues-inventory.json](open-issues-inventory.json) telah diperbarui untuk 43 kontak efektif dan pintu masuk Forms. Daftar missing di dalamnya diberi status historis/koreksi. Hasil terbaru ada di [VALIDATION.md](VALIDATION.md). Tidak ada push, deploy, perubahan DNS/Forms atau layanan eksternal.
