import { ambilFilm } from "./api.js";
import { state, setDaftarFilm, setStatusPesan } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function inisialisasi() {
  setStatusPesan("Sedang memuat data...");
  render(state); // Render awal langsung memuat kategori yang tersimpan

  try {
    const dataApi = await ambilFilm();
    
    // Membaca data tambahan film dari localStorage jika ada
    const dataLokalSimpan = localStorage.getItem("film_tambah");
    const filmTambahan = dataLokalSimpan ? JSON.parse(dataLokalSimpan) : [];
    
    const semuaFilm = [...dataApi, ...filmTambahan];
    
    setDaftarFilm(semuaFilm);
    setStatusPesan("");
    render(state);
  } catch (galat) {
    setStatusPesan("Gagal memuat data: " + galat.message);
    render(state);
  }

  pasangPendengar();
}

inisialisasi();