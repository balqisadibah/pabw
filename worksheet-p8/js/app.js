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