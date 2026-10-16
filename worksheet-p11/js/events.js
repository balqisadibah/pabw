import { state, pilihKategori, tambahFilmBaru } from "./state.js";
import { render } from "./dom.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
      render(state);
    });
  }

  const formFilm = document.querySelector("#form-film");
  const inputJudul = document.querySelector("#judul");
  const inputRating = document.querySelector("#rating");
  const errorJudul = document.querySelector("#error-judul");
  const errorRating = document.querySelector("#error-rating");

  if (formFilm) {
    formFilm.addEventListener("submit", (event) => {
      event.preventDefault();

      let valid = true;
      const judulVal = inputJudul.value.trim();
      const ratingVal = Number(inputRating.value);

      if (judulVal === "") {
        if (errorJudul) errorJudul.style.display = "inline";
        inputJudul.setAttribute("aria-invalid", "true");
        valid = false;
      } else {
        if (errorJudul) errorJudul.style.display = "none";
        inputJudul.removeAttribute("aria-invalid");
      }

      if (!ratingVal || ratingVal < 1 || ratingVal > 10) {
        if (errorRating) errorRating.style.display = "inline";
        inputRating.setAttribute("aria-invalid", "true");
        valid = false;
      } else {
        if (errorRating) errorRating.style.display = "none";
        inputRating.removeAttribute("aria-invalid");
      }

      if (valid) {
        const inputTahun = document.querySelector("#tahun");
        const tahunVal = inputTahun ? Number(inputTahun.value) || 2026 : 2026;

        tambahFilmBaru({
          judul: judulVal,
          tahun: tahunVal,
          rating: ratingVal,
          kategori: "lainnya"
        });

        render(state);
        formFilm.reset();
      }
    });
  }
}