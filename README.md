# Website SIT Ulil Albab

React + Vite + JavaScript, dengan **HTML statis berisi konten untuk setiap URL**. URL `.html` dan direktori `uanews/` tetap tersedia. Node.js hanya diperlukan di komputer pengembang untuk build, bukan di hosting.

## Instalasi dan menjalankan

Gunakan Node.js 22.12 atau lebih baru (divalidasi dengan Node 24.18.0).

```sh
npm ci
npm run dev
```

Buka alamat Vite, biasanya `http://127.0.0.1:5173`. Rute seperti `/tk.html`, `/sd.html`, `/uanews/safarisosial.html` dapat dibuka langsung dan di-refresh.

```sh
npm run build
npm run preview
```

Keluaran: `dist/`. Pratinjau: `http://127.0.0.1:4173`, memakai server statis dengan status 404 sungguhan tanpa fallback SPA. Jangan membuka melalui `file://` karena aset menggunakan URL dari akar domain.

## Mengedit konten

### Unit Perpustakaan (pratinjau lokal)

- Beranda: `http://127.0.0.1:4173/perpustakaan.html`
- Organisasi: `http://127.0.0.1:4173/perpustakaan-organisasi.html`

Jalankan `npm run build` lalu `npm run preview`. Menu Unit desktop/ponsel sudah mencakup Perpustakaan. Header/style khusus, ilustrasi SVG lokal dan WhatsApp menggunakan konfigurasi kontak sekolah yang ada. Enam menu tanpa tujuan resmi ditandai Segera hadir.

**Gambar Organisasi sudah terpasang:** PNG asli 1600 × 968 ditampilkan utuh dan dapat diklik/ditap untuk membuka ukuran asli. Halaman Organisasi masuk sitemap. Referensi desain beranda (gambar 1) masih belum tersedia; beranda mengikuti arahan visual tertulis. Rincian komponen, aset dan hasil pemeriksaan: [docs/LIBRARY.md](docs/LIBRARY.md). Build memuat 48 halaman dan 68 URL kompatibilitas. Masalah editorial sebelumnya tetap ditunda. Uji khusus: `node scripts/library-test.mjs`; uji gambar organisasi: `node scripts/organization-test.mjs` (Chrome lokal).

### Lokasi konten

| Lokasi | Kegunaan |
| --- | --- |
| `src/pages/index.jsx` | Beranda, program, ekstrakurikuler, data pemilih unit |
| `src/pages/tk.jsx`, `sd.jsx`, `smp.jsx`, `sma.jsx`, `ppdb.jsx`, `visimisi.jsx`, `sejarah.jsx` | Halaman utama sekolah |
| `src/pages/uanews/*.jsx` | Artikel/indeks berita |
| `src/pages/blog-cat-masonry.jsx` | Kartu daftar berita |
| `src/data/site.js` | Identitas, menu, Instagram, Google Forms, GTM |
| `src/data/routes.json` | URL, komponen, metadata SEO, canonical, kontak tiap halaman |
| `src/data/aliases.json` | Tujuan URL kompatibilitas |
| `src/components/` | Header, Footer, carousel, galeri, unit, WhatsApp, embed |
| `public/assets/custom/images/` | Foto/logo yang dipakai, nama asli |
| `public/assets/custom/css/` | Tema dan CSS responsif sekolah |
| `public/styles/pages/` | CSS khusus halaman yang sebelumnya inline |
| `src/styles/react.css` | Style interaksi React/perbaikan responsif |

Artikel baru: buat JSX di `src/pages/uanews/`, tambahkan `/uanews/nama.html` di `routes.json` dengan `component: "uanews/nama"`, kemudian tambahkan kartu berita. Build menghasilkan HTML, metadata dan sitemap. Cocokkan kapitalisasi nama berkas untuk hosting Linux; URL aset misalnya `/assets/custom/images/foto.jpg`.

Pengelola mengonfirmasi kedua nomor sekolah dipakai untuk PPDB dan kontak umum. Pembagian fungsi per nomor belum ditentukan; metadata `phone`/`whatsapp` tetap mempertahankan tujuan menurut halaman asal. Kontak pembuat tetap terpisah. Profil dan aset TK/SD/SMP/SMA telah dipulihkan dari sumber Git sebelum migrasi yang lebih baru (`ee33d1f`), termasuk galeri dan banner. Lihat [bukti pemulihan 35 aset](docs/ASSET-RECOVERY.md) beserta manifest hash. Daftar `missing-original-assets.json` adalah snapshot baseline lama, bukan daftar kehilangan unit terkini.

PPDB aktif menggunakan **tahun ajaran 2026/2027**, sesuai konfirmasi pengelola. Tahun teks antarmuka berada di `site.ppdbYear` pada `src/data/site.js`; metadata beranda/PPDB/formulir ada di `src/data/routes.json`. Arsip berita/kegiatan mempertahankan tahun asli. URL embed, tautan langsung, dan identitas Google Forms tetap sama. Bukti pemeriksaan lama menunjukkan judul Google Forms 2025/2026: pemilik formulir masih perlu memperbarui judul/isinya sendiri. Perubahan teks situs tidak mengubah isi iframe Google Forms.

Banner SMA asli bertahun 2026–2027 tetapi memuat tanggal gelombang/diskon tahun 2025; perlu konfirmasi pengelola. Foto program SMP dan logo alumni SMA memiliki pemetaan asli yang perlu tinjauan editorial; tidak diganti berdasarkan dugaan.

Rincian tindak lanjut: [docs/OPEN-ISSUES.md](docs/OPEN-ISSUES.md), mencakup ketidaksesuaian gambar/profil sumber lama, pemetaan kontak, formulir, dan status hosting terbaru. Inventaris terstruktur: [docs/open-issues-inventory.json](docs/open-issues-inventory.json). Tombol brosur PPDB dinonaktifkan sampai tujuan unduhan resmi ditentukan.

## Struktur

```text
src/
  App.jsx, main.jsx
  components/
  data/
  pages/                 # termasuk uanews/ dan profil pembuat
  styles/
public/
  assets/                # aset yang dipakai
  meyawo/                # CSS/font/foto profil pembuat yang dipakai
  styles/pages/
  licenses/
scripts/                 # build, server statis, validasi
docs/                    # audit, inventaris, hasil pengujian
retained/                # belum pasti; tidak masuk build
dist/                    # hasil build, diabaikan Git
test-results/            # laporan/screenshot lokal, diabaikan Git
```

Edit sumber JSX, bukan HTML `dist/`. Header/footer tidak memakai fetch. React dirender saat build lalu di-hydrate, mengikuti dokumentasi [Vite](https://vite.dev/guide/) dan [React hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot).

## Pengujian

```sh
npm run build
npm test
npm run test:browser
```

- `npm test`: HTML berisi konten, title/h1/meta/canonical, referensi HTML/CSS/font/gambar, URL lama, tujuan Google Forms.
- `test:browser`: perlu Chrome terpasang. Memeriksa seluruh route terdaftar (kini 48 halaman) pada 1440px/390px, reload, menu, carousel, unit, lightbox, tujuan WhatsApp, console, gambar, overflow, 404, HTML tanpa JavaScript. Set `BROWSER_CHANNEL=msedge` untuk Edge. Pada penambahan perpustakaan hanya uji browser khusus yang dijalankan; hasil uji unit lama digunakan kembali.
- `scripts/form-check.mjs` adalah pemeriksaan eksternal terpisah yang memuat formulir asli dan menekan Berikutnya dengan isian kosong. Tidak dijalankan pada pembaruan PPDB/Netlify; pemeriksaan baru hanya memeriksa URL iframe/tautan dari HTML lokal dengan jaringan eksternal diblokir.
- Laporan/screenshot: `test-results/`. Hasil yang benar-benar dijalankan: `docs/VALIDATION.md`.

## Hosting Netlify

Pengelola mengonfirmasi alur **GitHub → build dan hosting Netlify**; domain `ulilalbab.sch.id` dikelola melalui **IDwebhost**. IDwebhost bukan tujuan upload berkas situs pada alur ini. Konfigurasi lokal ada di [netlify.toml](netlify.toml).

| Pengaturan | Nilai yang perlu cocok di Netlify |
| --- | --- |
| Repository / production branch | Repository GitHub dan branch produksi yang sudah terhubung; nama persisnya perlu dicocokkan di dashboard |
| Base/package directory | Akar proyek yang berisi `package.json` dan `netlify.toml`; untuk struktur repository ini gunakan root, tanpa subfolder tambahan |
| Build command | `npm run build`, menjalankan Vite **dan** generator 46 halaman + 68 URL kompatibilitas; jangan diganti hanya `vite build` |
| Publish directory | `dist` |
| Node.js | `24.18.0`, ditetapkan melalui `NODE_VERSION` pada netlify.toml dan sama dengan lingkungan validasi lokal |
| Dependencies | `package-lock.json` disertakan; Vite/plugin berada dalam devDependencies sehingga instalasinya tidak boleh dihilangkan |
| Pretty URLs | `false` dari `[build.processing.html]`; pertahankan URL `.html` yang dipakai tautan/canonical |
| Domain | Tetap `https://ulilalbab.sch.id`; cocokkan primary domain/HTTPS yang sudah ada tanpa mengubah DNS/nameserver |

Netlify melayani `index.html` untuk `/` dan memakai `dist/404.html` sebagai custom 404 secara otomatis. Konfigurasi ini tidak menambahkan redirect wildcard atau fallback SPA. `.htaccess` tetap dihasilkan untuk kompatibilitas Apache, tetapi **tidak digunakan oleh Netlify**. URL kompatibilitas tetap berupa dokumen pengarah HTML; belum diubah menjadi redirect HTTP 301.

Periksa juga context overrides, environment variables, build plugins, Edge Functions, dan aturan redirect lama yang mungkin ditambahkan melalui dashboard/integrasi. Rincian risiko normalisasi URL dan matriks pemeriksaan setelah ada lingkungan Netlify tersedia di [docs/NETLIFY.md](docs/NETLIFY.md), mengikuti [dokumentasi routing Netlify](https://docs.netlify.com/manage/routing/redirects/redirect-options/) dan [konfigurasi berbasis file](https://docs.netlify.com/build/configure-builds/file-based-configuration/).

`npm run dev` menguji middleware Vite; `npm run preview` menguji server statis lokal. Keduanya tidak meniru seluruh CDN/post-processing Netlify. Konfigurasi dashboard dan perilaku Netlify sebenarnya belum diuji. Hanya `dist` yang dipublikasikan; sumber, `node_modules`, `docs`, `retained`, cadangan, `.env`, dan laporan tidak masuk artefak publik. GTM aktif pada beranda build produksi; dimatikan pada dev.

**Pekerjaan tetap lokal: tidak ada git push, deploy, perubahan Forms, domain, DNS, atau nameserver.**

## Audit, pembersihan, pemulihan

- `docs/AUDIT.md`: temuan dan keterbatasan sumber.
- `docs/CLEANUP.md`, `docs/cleanup-plan.json`: rincian file dan alasan pembersihan.
- [docs/BASELINE-COMPLETENESS.md](docs/BASELINE-COMPLETENESS.md): peta seluruh halaman/bagian baseline, tujuan tautan, pemulihan tambahan, perubahan disengaja dan keputusan pengelola yang masih diperlukan.
- `docs/baseline-completeness.json`: perbandingan konten terhadap **ee33d1f1318478236ed4b657d5c50989abaa62e8**. Jalankan `node scripts/audit-baseline.mjs` setelah build untuk memeriksa ulang secara lokal.
- `docs/content-preservation.json`: snapshot pemeriksaan awal terhadap `61b4601`; bukan bukti kelengkapan baseline terbaru.
- Baseline sebelum migrasi: **ee33d1f**. Migrasi awal sempat memakai `61b4601` yang tertinggal; kesimpulan audit dan konten yang terlewat sudah dikoreksi.
- Cadangan: `C:/Users/Lenovo/Documents/fables-before-react-20261031.zip`, di luar proyek/build.
- Pulihkan file dari ZIP ke folder terpisah atau tinjau menggunakan `git show <commit>:<path>`. Hindari reset seluruh proyek yang dapat membuang perubahan baru.

Lisensi Fables tetap di `LICENSE`; salinan lisensi distribusi/Meyawo di `public/licenses/`. Atribusi vendor CSS/font dipertahankan.
