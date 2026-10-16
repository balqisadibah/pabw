const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  daftarFilm: [],
  kategoriAktif: "semua",
  statusPesan: "",
};

// Fungsi memuat dari localStorage dengan try/catch & pengecekan versi
export function muatState() {
  try {
    const hasil = JSON.parse(localStorage.getItem(KUNCI));
    if (hasil?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return hasil;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

// Muat pilihan kategori terakhir jika tersimpan di localStorage
const tersimpan = muatState();
if (tersimpan?.kategoriAktif) {
  state.kategoriAktif = tersimpan.kategoriAktif;
}

export function simpanState() {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function aturUlangState() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpanState(); // Simpan otomatis setiap kategori diubah
}

export function setDaftarFilm(filmBaru) {
  state.daftarFilm = filmBaru;
}

export function tambahFilmBaru(film) {
  state.daftarFilm = [...state.daftarFilm, film];
}

export function setStatusPesan(pesan) {
  state.statusPesan = pesan;
}