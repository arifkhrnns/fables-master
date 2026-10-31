# Konfigurasi Netlify untuk hasil migrasi

Pengelola: sumber di GitHub; build dan hosting melalui Netlify; domain `ulilalbab.sch.id` dikelola di IDwebhost. Dokumen ini menjelaskan konfigurasi yang disiapkan lokal, bukan hasil pembacaan akun/dashboard produksi.

## Build dan keluaran

`netlify.toml` menetapkan `command = "npm run build"`, `publish = "dist"`, dan `NODE_VERSION = "24.18.0"`. Perintah npm menjalankan `scripts/build.mjs`: build aset Vite, render HTML React untuk 46 rute, lalu tulis 68 HTML kompatibilitas, sitemap, robots, dan `.htaccess` opsional Apache. `vite build` saja tidak menjalankan tahap render halaman tersebut.

Tidak perlu Node runtime, server SSR, Netlify Functions, atau adapter SPA di hosting. Instalasi dependency build tetap memerlukan devDependencies. Cocokkan agar dashboard tidak memakai `NODE_ENV=production`, `NPM_FLAGS=--omit=dev`, atau opsi lain yang menghilangkan Vite/plugin sebelum build. Versi Node berasal dari konfigurasi file; periksa apabila repository/dashboard memiliki override lain. [Dependency build Netlify](https://docs.netlify.com/build/configure-builds/manage-dependencies/).

## Routing dan normalisasi

| Aspek | Keputusan lokal dan alasan |
| --- | --- |
| `/` dan `/index.html` | Keduanya memiliki konten beranda dari index.html; canonical tetap `https://ulilalbab.sch.id/` |
| Halaman `.html` | Dokumen tersedia secara fisik, termasuk `uanews/GTC.html`; huruf besar/kecil dipertahankan |
| Pretty URLs | `false`. Ini mencegah fitur post-processing mengubah tautan `.html` menjadi bentuk pretty yang tidak sama dengan canonical proyek |
| Trailing slash | Tidak dibuat aturan redirect yang hanya menambah/menghapus slash. Netlify menormalisasi path sebelum mencocokkan redirect; aturan slash-only dapat berulang |
| URL tanpa ekstensi | Tidak ditambahkan sebagai rute/canonical baru. Resolusi alternatif seperti `/ppdb` atau `/ppdb/` harus dicatat saat diuji di CDN; tidak diasumsikan sama dengan middleware Vite |
| 68 URL kompatibilitas | Tetap file HTML dengan meta refresh dan tautan alternatif menuju target yang sudah ada. Tidak menambahkan lapisan redirect yang kembali ke URL asal |
| Canonical artikel ganda | Versi akar tertentu tetap canonical ke versi `uanews/`; ini metadata, bukan instruksi HTTP redirect |
| Path tidak dikenal/aset hilang | Netlify memakai `404.html` akar secara otomatis dengan status 404; tidak perlu menyalin `ErrorDocument` Apache menjadi wildcard rewrite |
| `.htaccess` | Diabaikan Netlify; bukan prasyarat routing |
| Domain | Tidak ada rule domain/www/http baru; origin tetap `https://ulilalbab.sch.id`. Pengaturan domain/HTTPS lama perlu dicocokkan |

Tidak ada `[[redirects]]`, `_redirects`, atau fallback `/* /index.html 200` yang ditambahkan. Pemeriksaan lokal memastikan target alias ada, tidak memiliki siklus, canonical lokal merujuk berkas yang ada, serta tidak ada tabrakan dokumen `nama.html` dengan `nama/index.html`. Ini memeriksa artefak dan aturan yang diketahui; bukan bukti perilaku CDN produksi.

Landasan: [Netlify redirect options](https://docs.netlify.com/manage/routing/redirects/redirect-options/) menjelaskan custom 404 otomatis, normalisasi slash, dan Pretty URLs. Opsi `[build.processing.html] pretty_urls` berada pada [konfigurasi berbasis file](https://docs.netlify.com/build/configure-builds/file-based-configuration/).

## Pengaturan dashboard yang perlu dicocokkan

1. Site Netlify yang benar, repository GitHub yang terhubung, dan production branch yang berlaku. Nama branch tidak ditebak atau diubah lokal.
2. Base/package directory menuju akar proyek; build command `npm run build`; publish `dist`. Periksa context production/branch/deploy-preview dan konfigurasi monorepo lama jika ada.
3. Node 24.18.0 dan instalasi devDependencies. Jangan mengecualikan package-lock atau memakai perintah build template Vite yang melewati generator.
4. Developer settings → Post processing → Pretty URLs: konfigurasi file menetapkan false. Cocokkan hasil konfigurasi efektif, bukan hanya nilai lama pada UI.
5. Build plugins/adapter/Edge Functions atau aturan redirect lama tidak menambah fallback SPA, normalisasi `.html` yang bertentangan, atau pengarah bolak-balik. Tidak ada konfigurasi tambahan tersebut pada proyek lokal yang diperiksa.
6. Custom domain/primary domain/HTTPS yang sudah aktif sesuai origin. Domain dikelola di IDwebhost; tidak ada kebutuhan perubahan DNS/nameserver dari perubahan kode ini.
7. Netlify Forms tidak diperlukan untuk iframe Google Forms ini. Jangan mengganti form eksternal menjadi form Netlify otomatis.

## Matriks pemeriksaan di lingkungan Netlify nantinya

Jalankan setelah tersedia lingkungan Netlify yang diizinkan. Belum dijalankan dalam pekerjaan ini.

| URL/perilaku | Yang diperiksa |
| --- | --- |
| `/`, `/index.html` | Beranda tampil, canonical `/`, tidak ada loop |
| `/ppdb.html`, `/form-ppdb.html`, `/tk.html` | Dokumen tepat, akses langsung dan refresh berhasil, tahun PPDB lokal 2026/2027 |
| `/uanews/GTC.html`, `/uanews/safarisosial.html` | Nested path, kapitalisasi, aset dan refresh benar |
| `/home1.html`, `/contact.html`, `/uanews/CNTHNEWS.html` | Alias sampai ke target `/index.html`, `/index.html#kontak`, `/404.html`; fragmen tidak hilang, tidak berulang |
| `/ppdb`, `/ppdb/`, `/ppdb.html/`, `/uanews/GTC`, `/uanews/GTC/` | Catat status dan Location dari CDN; bila terselesaikan ke halaman yang sama, canonical tetap `.html`, tidak boleh loop atau menjadi beranda |
| `/tidak-ada.html`, `/tidak-ada/`, `/assets/tidak-ada.png` | Status HTTP 404, bukan fallback 200 beranda |
| `/404.html` | Dokumen error dapat dibuka langsung; respons langsung dapat 200, berbeda dengan path tidak dikenal yang harus 404 |
| Aset dengan spasi dan huruf besar, sitemap, robots | Aset berhasil, MIME sesuai, URL produksi/canonical tetap domain yang sudah ada |
| Forms dan WhatsApp | Periksa atribut URL saja; tidak perlu mengirim respons atau pesan |

Jangan menyamakan hasil Vite, server pratinjau statis, atau pemeriksaan TOML dengan pengujian Netlify CDN. Hasil lokal yang benar-benar dijalankan dicatat dalam [VALIDATION.md](VALIDATION.md). Tidak ada login/link site, push, deploy, perubahan dashboard atau DNS pada pekerjaan ini.
