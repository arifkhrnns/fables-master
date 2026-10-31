# Unit Perpustakaan — implementasi lokal

Status 31 Oktober 2026: beranda, integrasi navigasi dan gambar asli halaman Organisasi sudah terpasang lokal. Gambar referensi desain beranda masih belum tersedia; desain beranda mengikuti arahan tertulis pengguna, belum dibandingkan dengan gambar 1.

## URL dan implementasi

- `/perpustakaan.html`: beranda, hero dua kolom/vertikal pada ponsel, logo SMP resmi, identitas dan NPP `3216071D2000004`, tombol Lihat Organisasi.
- `/perpustakaan-organisasi.html`: header yang sama, penanda Organisasi aktif. Area utama menampilkan gambar organisasi asli secara utuh, lebar penuh dan tinggi otomatis; klik/tap membuka berkas asli dalam tab baru untuk diperbesar.
- Dropdown Unit di header sekolah mencakup Perpustakaan pada desktop dan ponsel.
- `src/components/library/LibraryLayout.jsx`: header/navigasi/footer/WhatsApp khusus. Tema sekolah tidak dimuat pada route library; CSS library tidak dimuat pada halaman sekolah.
- `src/data/library.js`: identitas, menu dan lokasi gambar organisasi. Tentang, Layanan, Pustakawan, Kontak, Blog dan Digilib nonaktif dengan penanda Segera hadir. Tidak ditemukan tujuan khusus perpustakaan yang dapat dipastikan dari konten proyek; halaman umum sekolah tidak diasumsikan sebagai konten perpustakaan.
- `public/styles/pages/library.css`: style terisolasi. `public/assets/library/digital-library.svg`: ilustrasi lokal baru berupa buku dan layar perpustakaan, bukan gambar organisasi atau screenshot referensi.
- Logo asli: `public/assets/custom/images/logo_smp.png`. Satu WhatsApp per halaman mengambil URL lengkap dari `routes['/index.html'].whatsapp`, termasuk nomor dan pesan yang sudah ada.

Kedua route terdaftar di `src/data/routes.json`, melalui renderer React dan generator HTML statis yang sama. Canonical menggunakan URL `.html` masing-masing. Organisasi kini masuk sitemap dan tidak lagi memakai `noindex`. Tidak ada perubahan Netlify, alias, DNS atau fallback SPA.

## Lampiran yang masih dibutuhkan

Pada permintaan awal, folder lampiran hanya berisi dua berkas teks. Pengguna kemudian mengirim gambar organisasi secara langsung dalam percakapan; byte PNG lampiran tersebut berhasil diambil dari pesan sesi yang sama, meskipun tidak muncul sebagai file di folder attachments. Gambar telah diperiksa dan disalin tanpa perubahan ke `public/assets/library/struktur-organisasi.png`.

1. **Gambar 1:** diperlukan untuk membandingkan desain dengan referensi sebenarnya. Beranda saat ini mengikuti palet biru tua/putih/biru muda, hero dua kolom, latar lembut dan menu yang dijabarkan pengguna.
2. **Gambar 2 asli: sudah diterima dan dipasang.** PNG 1600 × 968, 2.309.986 byte; SHA-256 `8b3a6fd98a4d83a2cf2e24d55a197d7559e371a8b4e06edba6675a06a5f79179`. Tidak ada chart pengganti, pengetikan ulang, kompresi ulang atau crop. Informasi kontak yang tercetak dalam gambar dipertahankan sebagai bagian gambar; tujuan WhatsApp website tetap memakai konfigurasi sebelumnya.

`library.organizationImage` menunjuk ke aset asli. Gambar menggunakan `width:100%; height:auto`, tanpa batas tinggi; atribut intrinsik 1600 × 968 menjaga ruang dan rasio gambar. Pengujian khusus pemasangan gambar dicatat pada bagian berikut; hasil sebelum pemasangan di tabel lama tetap menjadi bukti historis.

## Pemeriksaan pemasangan gambar organisasi

- `npm run build`: 48 halaman statis dan 68 URL kompatibilitas. `npm test`: 1.377 tautan, 1.250 referensi aset, 0 kegagalan.
- `node scripts/organization-test.mjs`: lulus pada Chrome 1440 × 900 dan 390 × 900, dengan seluruh permintaan eksternal diblokir. Akses langsung dan refresh 200; tidak ada error JavaScript, overflow horizontal atau pesan gambar belum tersedia.
- Gambar pada desktop berukuran sekitar 1353,625 × 818,938 piksel; pada ponsel 370 × 223,844 piksel. Keduanya mempertahankan rasio asli 1600:968, tanpa crop. Screenshot halaman diperiksa secara visual: baris literasi serta pita email/telepon/alamat di bagian bawah terlihat lengkap.
- Klik desktop dan tap ponsel membuka PNG asli di tab baru. Dimensi intrinsik tetap 1600 × 968 dan hash byte yang disajikan sama dengan lampiran asli. Pembesaran tersedia melalui penampil gambar browser.
- Hash `public/` dan `dist/` cocok dengan sumber lampiran. `noindex` dilepas; URL Organisasi ditemukan di sitemap. Tujuan WhatsApp, menu, beranda dan konten sekolah tidak diubah.
- Bukti: `test-results/organization-report.json`, `organization-build.log`, `organization-static.log`, `organization-browser.log`, serta `organization/` (screenshot halaman, gambar dan penampil asli pada kedua ukuran). Uji navigasi sekolah/perpustakaan yang sudah lulus digunakan kembali.

Pengujian ini lokal pada hasil build, bukan pengujian Netlify. Tidak ada push, deploy atau perubahan layanan eksternal.

## Pemeriksaan tahap awal sebelum gambar diterima (historis)

| Pemeriksaan | Hasil |
| --- | --- |
| `npm run build` | 48 halaman React statis + 68 URL kompatibilitas |
| `npm test` | 1.376 tautan, 1.248 referensi aset; 0 kegagalan |
| `node scripts/library-test.mjs` | Lulus untuk fitur tersedia; status gambar organisasi eksplisit BLOCKED |
| Chrome, hasil build, 1440×900 dan 390×900 | Kedua route membuka langsung dan reload 200; tanpa overflow horizontal; logo, ilustrasi dan ikon WhatsApp tampil |
| Navigasi | Dropdown Unit desktop/ponsel, CTA, Beranda, kembali ke sekolah, menu ponsel buka/tutup/Escape dan menu aktif lulus |
| Kontak dan menu nonaktif | Satu WhatsApp sesuai URL beranda; enam menu Segera hadir tanpa tautan kosong; tidak membuka WhatsApp eksternal |
| HTML statis | Konten/navigasi dirender, satu H1, canonical benar; sekolah tetap memakai header/style sekolah |
| 404 | URL tidak dikenal mengembalikan status 404 pada server statis lokal |
| Pelestarian | Snapshot SHA-256 menunjukkan hanya App, menu site, routes dan pemilihan stylesheet HTML berubah dari berkas lama; aset, halaman sekolah, PPDB, Forms, alias, Netlify dan style sekolah tetap |
| Tampilan sebenarnya | Screenshot beranda desktop/ponsel, menu ponsel dan halaman Organisasi sementara sudah diperiksa; gambar organisasi asli dan kesesuaian gambar 1 belum dapat diuji |

Bukti lokal: `test-results/library-report.json`, `library-build.log`, `library-static.log`, `library-browser.log`, `library/` (8 screenshot), dan `library-before.json` (snapshot sebelum perubahan). Script memakai Chrome terpasang dan memblokir permintaan eksternal; snapshot preservasi opsional jika menjalankan dari checkout lain. Tidak mengulang audit baseline atau seluruh uji visual unit yang sebelumnya lulus.

Pengujian browser menggunakan **server statis hasil build**, bukan klaim pengujian runtime Netlify. Konfigurasi Netlify tetap; belum diuji atau di-deploy ke layanan Netlify. Pratinjau lokal: `npm run preview`, port 4173.
