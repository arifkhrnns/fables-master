# Catatan pembersihan

Rincian setiap berkas ada di `cleanup-plan.json`; kondisi awal dan referensi ada di `audit-original.json`. Pembersihan dilakukan setelah build, pemeriksaan referensi, dan pengujian browser berhasil. Sumber awal terlindungi Git dan arsip ZIP di luar proyek.

| Kelompok awal | Tindakan dan alasan |
| --- | --- |
| 40 HTML sekolah/profil/arsip | Dipindahkan ke React, URL tetap dihasilkan sebagai HTML statis. HTML sumber lama dihapus setelah verifikasi. |
| 66 HTML demo/contoh/draf campuran | Demo murni dihapus; URL kompatibilitas tersedia. `home1.html` disimpan di retained karena kustomisasi sekolahnya belum pasti. |
| 156 aset/style/font terpakai | Dipindah ke public dengan jalur lama; salinan sumber lama dihapus. |
| Vendor JavaScript | jQuery, Bootstrap JS/Popper, Owl, WOW, Fancybox, Lightbox2, Masonry, timeline, circle-progress, loadscreen, range-slider, off-canvas dan demo dikeluarkan setelah diganti React atau tidak digunakan. |
| Meyawo | Gulp/Sass dan demo components dibuang; CSS, Themify font, logo, foto profil, lisensi tetap ada. |
| 34 aset sekolah tanpa referensi | Foto/logo/video/desain dipertahankan di retained, di luar build; tujuan arsip/publiknya belum pasti. |
| 5 salinan biner identik | Dihapus berdasarkan SHA-256; lokasi salinan yang tetap ada tercatat di rencana. |
| CSS | Inline dipisah per halaman; navigasi/footer tidak lagi digandakan. Latar yang sudah hilang dinonaktifkan. Tema sekolah, Bootstrap CSS, font, dan style titik carousel tetap untuk kesetiaan tampilan. |
| Teks contoh | Lorem ipsum, Billy Richards, kartu berita demo dibuang. Teks sekolah, foto tersedia, tanggal, kontak, integrasi dipertahankan. |
| Dokumentasi/lisensi/config | README lama diarsipkan dan diganti panduan React. LICENSE dan konfigurasi VS Code tetap; lisensi Meyawo dipindah ke public/licenses. |

Rencana 483 berkas awal: 287 penghapusan (termasuk HTML yang dimigrasikan dan duplikat), 156 perpindahan aset aktif, 37 perpindahan arsip/lisensi/aset belum pasti, 2 tetap, dan 1 README diarsipkan lalu diganti. Tidak ada dokumen publik, verifikasi domain, atau konfigurasi hosting awal yang ditemukan untuk dihapus.

Tidak ada salinan seluruh template lama di dist. Retained sengaja di luar public dan tidak ikut build. Aset belum pasti menunggu keputusan pengelola.

Delapan CSS khusus artikel yang terbukti identik digabung menjadi dua berkas (`campus-photo.css` dan `article-gallery.css`), menghilangkan enam salinan CSS tanpa mengubah deklarasi. Daftar pasangan: `css-deduplication.json`.
