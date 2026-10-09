# PABW - Balqis Quratu'ain Adibah - 25523178
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 Halaman profil saya
Topik halaman saya: Daftar film yang pernah saya tonton
Judul halaman: Daftar Film Favorit Saya
Deskripsi: Daftar film yang pernah saya tonton beserta rating dan informasi sutradaranya
Tautan navigasi: Daftar Film, Tambah Film, Tentang Saya
Dua bagian utama: Daftar Film, Tambah Film
Kolom tabel: Judul, Tahun, Sutradara, Rating
Kolom form: Judul, Tahun, Rating
Gambar: film-1.webp

### Catatan penggunaan AI
- Dibantu AI: Menyusun struktur Markdown README.md, panduan langkah perintah Git, serta penyelesaian kendala pada terminal Git Bash.

## Pertemuan 4 - Design token halaman profil
- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru)

### Token yang saya tetapkan
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus. 

### Catatan penggunaan AI
Saya dibantu AI untuk: debugging masalah tema gelap yang tidak berfungsi (ternyata karena membuka file lewat file:// bukan server lokal), penjelasan konsep design token dan :has(), serta menyusun draf jawaban tiket keluar yang kemudian saya tulis ulang dengan pemahaman saya sendiri.

## Pertemuan 5 - Layout Modern: Flexbox dan Grid
- Berkas yang disesuaikan: layout.css, komponen.css
- Penggunaan Grid: Kerangka halaman utama (3 baris) dan galeri kartu film adaptif
- Penggunaan Flexbox: Header, navbar, dan struktur isi komponen kartu

### Rencana Kerangka Halaman
| Bagian halaman | Peran | Nilai yang saya pakai |
|---|---|---|
| Baris pertama | Kepala halaman: logo, judul, menu | auto |
| Baris kedua | Isi konten | 1fr |
| Baris ketiga | Kaki halaman | auto |

### Catatan penggunaan AI
Saya dibantu AI untuk:
- Membantu penyusunan tahapan commit dan push Git secara bertahap.
- Memperbaiki tata letak CSS pada `layout.css` agar tidak terjadi bentrokan/luberan antara section tabel film dan form input.
- Menyusun penataan galeri kartu yang responsif menggunakan `repeat(auto-fit, minmax(16rem, 1fr))` tanpa media query.


## Pertemuan 6 - Responsif Mobile-First
- Berkas baru: responsif.css
- Strategi: Mobile-First (Gaya dasar tanpa media query untuk layar sempit)
- Titik Henti: 48rem (Tablet - 2 kolom) dan 60rem (Desktop - 3 kolom + sidebar bersanding)
- Penanganan Media: Gambar dengan `max-width: 100%` dan tabel data dalam wadah `.table-wrap` (`overflow-x: auto`)

### Catatan penggunaan AI
Saya dibantu AI untuk:
- Menyusun struktur CSS Mobile-First pada `responsif.css`.
- Menyelesaikan perintah Git Bash untuk menyalin folder P5 ke P6 dan memperbagus riwayat commit/push.
- Menangani kendala tabel meluber pada tampilan mobile 360 px.

## Pertemuan 8 - JavaScript Modern ES6+, Struktur Data, dan Array Methods
- Mengubah data static HTML menjadi variabel, objek, dan array di `js/app.js`
- Menggunakan 2 fungsi murni (`buatPerkenalan` dan `formatKeahlian`)
- Mengolah array of object film favorit memakai array methods: `map`, `filter`, dan `find`
- Mencegah *side-effect* saat pengurutan (*sorting*) menggunakan spread operator `[...array]`

### Deklarasi Catatan Penggunaan AI
Saya dibantu AI untuk:
- Merancang struktur data ES6+ dan contoh fungsi murni di `js/app.js`
- Memahami konsep immutability pada array methods (`map`, `filter`, `find`, `sort`)
- Menyelesaikan isu CORS policy dan pengisian lembar evaluasi Worksheet P8