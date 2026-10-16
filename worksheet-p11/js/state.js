export const state = {
  daftarFilm: [],
  kategoriAktif: "semua",
  statusPesan: "",
};

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
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