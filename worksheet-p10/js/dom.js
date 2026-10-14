// js/dom.js
import { ambilFilm } from "./api.js";

// --- Seleksi Elemen ---
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const statusPesan = document.querySelector("#status");

let semuaFilm = [];

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
  statusPesan.textContent = "Sedang memuat data...";
  kosong.hidden = true;

  try {
    const dataApi = await ambilFilm();
    
    // Membaca data tambahan dari localStorage menggunakan JSON.parse
    const dataLokalSimpan = localStorage.getItem("film_tambah");
    const filmTambahan = dataLokalSimpan ? JSON.parse(dataLokalSimpan) : [];
    
    semuaFilm = [...dataApi, ...filmTambahan];
    
    statusPesan.textContent = "";
    render(semuaFilm);
  } catch (galat) {
    statusPesan.textContent = "Gagal memuat data: " + galat.message;
    kosong.hidden = true;
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
    const terpilih = semuaFilm.filter(
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
      errorJudul.hidden = false;
      inputJudul.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorJudul.hidden = true;
      inputJudul.removeAttribute("aria-invalid");
    }

    if (!ratingVal || ratingVal < 1 || ratingVal > 10) {
      errorRating.hidden = false;
      inputRating.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorRating.hidden = true;
      inputRating.removeAttribute("aria-invalid");
    }

    if (valid) {
      const inputTahun = document.querySelector("#tahun");
      const tahunVal = inputTahun ? Number(inputTahun.value) || 2026 : 2026;

      const filmBaru = {
        judul: judulVal,
        tahun: tahunVal,
        rating: ratingVal,
        kategori: "lainnya"
      };

      semuaFilm.push(filmBaru);

      // Menyimpan data ke localStorage menggunakan JSON.stringify
      const dataLokalSimpan = localStorage.getItem("film_tambah");
      const filmTambahan = dataLokalSimpan ? JSON.parse(dataLokalSimpan) : [];
      filmTambahan.push(filmBaru);
      localStorage.setItem("film_tambah", JSON.stringify(filmTambahan));

      render(semuaFilm);
      formFilm.reset();
    }
  });
}