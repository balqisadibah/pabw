/* =========================================================
   P8 — JavaScript Modern ES6+, Struktur Data, & Array Methods
   ========================================================= */

// --- LEMBAR B: Data Profil sebagai Variabel & Objek ---
export const profil = {
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

export function buatPerkenalan({ nama, peran }) {
  return `Halo! Saya ${nama}, ${peran}. Selamat datang di portofolio saya!`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log("Keahlian Utama:", formatKeahlian(profil.keahlian));

// --- LEMBAR D: Array of Object & Array Methods ---

export const daftarFilm = [
  { judul: "The Lord of the Rings: The Fellowship of the Ring", tahun: 2001, sutradara: "Peter Jackson", rating: 8.8, selesai: true, kategori: "lotr" },
  { judul: "The Lord of the Rings: The Two Towers", tahun: 2002, sutradara: "Peter Jackson", rating: 8.7, selesai: true, kategori: "lotr" },
  { judul: "The Lord of the Rings: The Return of the King", tahun: 2003, sutradara: "Peter Jackson", rating: 9.0, selesai: true, kategori: "lotr" },
  { judul: "The Hobbit: An Unexpected Journey", tahun: 2012, sutradara: "Peter Jackson", rating: 7.8, selesai: true, kategori: "hobbit" },
  { judul: "Enola Holmes 3", tahun: 2026, sutradara: "Philip Barantini", rating: 8.0, selesai: false, kategori: "lainnya" },
];

console.log("--- Seluruh Daftar Film (Data Asli) ---");
console.table(daftarFilm);