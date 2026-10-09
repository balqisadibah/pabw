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