import { ambilFilm } from "./api.js";
import { state, setDaftarFilm, setStatusPesan } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function inisialisasi() {
  setStatusPesan("Sedang memuat data...");
  render(state);

  try {
    const dataApi = await ambilFilm();
    setDaftarFilm(dataApi);
    setStatusPesan("");
    render(state);
  } catch (galat) {
    setStatusPesan("Gagal memuat data: " + galat.message);
    render(state);
  }

  pasangPendengar();
}

inisialisasi();