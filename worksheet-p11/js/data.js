export const profil = {
  nama: "Balqis Quratu'ain Adibah",
  peran: "Mahasiswa Informatika UII",
  keahlian: ["HTML5", "CSS Grid & Flexbox", "JavaScript ES6+", "Git & GitHub"],
  jumlahProyek: 3,
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo! Saya ${nama}, ${peran}. Selamat datang di portofolio saya!`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");