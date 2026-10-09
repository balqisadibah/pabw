/* =========================================================
   P8 — JavaScript Modern ES6+, Struktur Data, & Array Methods
   ========================================================= */

// --- LEMBAR B: Data Profil sebagai Variabel & Objek ---
const profil = {
  nama: "Balqis Quratu'ain Adibah",
  peran: "Mahasiswa Informatika UII",
  keahlian: ["HTML5", "CSS Grid & Flexbox", "JavaScript ES6+", "Git & GitHub"],
  jumlahProyek: 3,
};

// Template Literal & Akses Aman (?.) / Nullish Coalescing (??)
const sapaan = `Nama saya ${profil.nama}, seorang ${profil.peran}.`;
console.log(sapaan);
console.log(`Jumlah keahlian: ${profil.keahlian?.length ?? 0}`);

// --- LEMBAR C: Dua Fungsi Murni ---

// 1. Fungsi Murni: Menyusun kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `Halo! Saya ${nama}, ${peran}. Selamat datang di portofolio saya!`;
}

// 2. Fungsi Murni (Arrow Function): Merapikan daftar keahlian
const formatKeahlian = (daftar) => daftar.join(" · ");

// Uji coba fungsi murni di Console
console.log(buatPerkenalan(profil));
console.log("Keahlian Utama:", formatKeahlian(profil.keahlian));

// --- LEMBAR D: Array of Object & Array Methods ---

const daftarFilm = [
  { judul: "The Lord of the Rings: The Fellowship of the Ring", tahun: 2001, sutradara: "Peter Jackson", rating: 8.8, selesai: true },
  { judul: "The Lord of the Rings: The Two Towers", tahun: 2002, sutradara: "Peter Jackson", rating: 8.7, selesai: true },
  { judul: "The Lord of the Rings: The Return of the King", tahun: 2003, sutradara: "Peter Jackson", rating: 9.0, selesai: true },
  { judul: "The Hobbit: An Unexpected Journey", tahun: 2012, sutradara: "Peter Jackson", rating: 7.8, selesai: true },
  { judul: "Enola Holmes 3", tahun: 2026, sutradara: "Philip Barantini", rating: 8.0, selesai: false },
];

// 1. Display Seluruh Data dengan console.table
console.log("--- Seluruh Daftar Film (Data Asli) ---");
console.table(daftarFilm);

// 2. Array Method: MAP (Mengambil daftar judul film saja)
const daftarJudul = daftarFilm.map((film) => film.judul);
console.log("Daftar Judul Film (map):", daftarJudul);

// 3. Array Method: FILTER (Film yang ratingnya >= 8.5)
const filmRatingTinggi = daftarFilm.filter((film) => film.rating >= 8.5);
console.log("--- Film Rating Tinggi >= 8.5 (filter) ---");
console.table(filmRatingTinggi);

// 4. Array Method: FIND (Mencari satu film spesifik berdasarkan judul)
const filmCarian = daftarFilm.find((film) => film.judul === "Enola Holmes 3");
console.log("Hasil pencarian spesifik (find):", filmCarian);

// 5. Menyalin Array tanpa mengubah data asli (Immutability)
const filmDiurutkan = [...daftarFilm].sort((a, b) => b.rating - a.rating);
console.log("--- Film Diurutkan berdasarkan Rating (Salinan) ---");
console.table(filmDiurutkan);