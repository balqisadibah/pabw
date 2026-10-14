/* =========================================================
   P10 — JavaScript Asinkron, fetch, Promise, dan JSON
   ========================================================= */

import { daftarFilm } from "./app.js";
import { ambilProyek } from "./api.js";

// --- Seleksi Elemen ---
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// Fungsi murni untuk membuat 1 elemen kartu <li>
function buatKartu(item) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const judul = item.judul || item.title || "Judul Tidak Tersedia";
  const tahun = item.tahun || 2026;
  const rating = item.rating || "N/A";
  
  li.textContent = `${judul} (${tahun}) — Rating: ${rating}`;
  return li;
}

// Fungsi render untuk menampilkan seluruh data ke halaman
function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  daftar.forEach((item) => wadah.append(buatKartu(item)));
}

// --- Menangani Pengambilan Data Asinkron & Penanganan Galat ---
async function muatDataAwal() {
  // 1. Keadaan Memuat (Loading)
  wadah.innerHTML = "<p>Sedang memuat data dari jaringan...</p>";
  kosong.hidden = true;

  try {
    // Mengambil data dari API eksternal
    const dataApi = await ambilProyek();
    render(dataApi);
  } catch (galat) {
    // 2. Keadaan Gagal / Galat (Fallback ke data lokal)
    wadah.innerHTML = `<p style="color: var(--color-danger);">Gagal memuat data: ${galat.message}. Menampilkan data lokal.</p>`;
    render(daftarFilm);
  }
}

// Jalankan pemuatan data asinkron saat halaman dimuat
muatDataAwal();

// --- Event Delegation pada Tombol Filter ---
const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    document.querySelectorAll("#filter button").forEach((b) => b.classList.remove("aktif"));
    tombol.classList.add("aktif");

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarFilm.filter(
      (film) => kategori === "semua" || film.kategori === kategori
    );

    render(terpilih);
  });
}

// --- Validasi Form Tanpa Reload ---
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
      errorJudul.style.display = "inline";
      inputJudul.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorJudul.style.display = "none";
      inputJudul.removeAttribute("aria-invalid");
    }

    if (!ratingVal || ratingVal < 1 || ratingVal > 10) {
      errorRating.style.display = "inline";
      inputRating.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorRating.style.display = "none";
      inputRating.removeAttribute("aria-invalid");
    }

    if (valid) {
      const inputTahun = document.querySelector("#tahun");
      const tahunVal = inputTahun ? Number(inputTahun.value) || 2026 : 2026;

      daftarFilm.push({
        judul: judulVal,
        tahun: tahunVal,
        sutradara: "Anonim",
        rating: ratingVal,
        kategori: "lainnya"
      });

      render(daftarFilm);
      formFilm.reset();
    }
  });
}