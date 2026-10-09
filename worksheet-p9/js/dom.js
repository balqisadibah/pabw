/* =========================================================
   P9 — DOM, Event Delegation, dan Interaktivitas
   ========================================================= */

// Mengimpor data daftarFilm dari app.js
import { daftarFilm } from "./app.js";

// --- LEMBAR A: Seleksi Elemen ---
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// --- LEMBAR B: Menyusun Elemen Kartu dari Data ---

// Fungsi murni untuk membuat 1 elemen kartu <li>
function buatKartu(film) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = `${film.judul} (${film.tahun}) — Rating: ${film.rating}`;
  return li;
}

// Fungsi render untuk menampilkan seluruh data ke halaman
function render(daftar) {
  // 1. Kosongkan wadah terlebih dahulu agar kartu tidak berlipat ganda
  wadah.textContent = "";

  // 2. Jika data kosong, tampilkan pesan kosong
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  // 3. Jika ada data, sembunyikan pesan kosong & tampilkan kartu
  kosong.hidden = true;
  daftar.forEach((film) => wadah.append(buatKartu(film)));
}

// Jalankan render awal saat halaman pertama kali dimuat
render(daftarFilm);


// --- LEMBAR C: Event Delegation pada Tombol Filter ---
const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    // Mencari tombol terdekat yang diklik
    const tombol = event.target.closest("button");
    if (!tombol) return; // Jika yang diklik bukan tombol, abaikan

    // Tandai tombol yang sedang aktif
    document.querySelectorAll("#filter button").forEach((b) => b.classList.remove("aktif"));
    tombol.classList.add("aktif");

    // Menyaring data berdasarkan kategori tombol
    const kategori = tombol.dataset.kategori;
    const terpilih = daftarFilm.filter(
      (film) => kategori === "semua" || film.kategori === kategori
    );

    // Render ulang daftar film yang sesuai
    render(terpilih);
  });
}

// --- LEMBAR D: Validasi Form Tanpa Reload ---
const formFilm = document.querySelector("#form-film");
const inputJudul = document.querySelector("#judul");
const inputRating = document.querySelector("#rating");
const errorJudul = document.querySelector("#error-judul");
const errorRating = document.querySelector("#error-rating");

if (formFilm) {
  formFilm.addEventListener("submit", (event) => {
    // 1. Hentikan reload halaman bawaan form
    event.preventDefault();

    let valid = true;
    const judulVal = inputJudul.value.trim();
    const ratingVal = Number(inputRating.value);

    // 2. Validasi Kolom Judul
    if (judulVal === "") {
      errorJudul.style.display = "inline";
      inputJudul.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorJudul.style.display = "none";
      inputJudul.removeAttribute("aria-invalid");
    }

    // 3. Validasi Kolom Rating (harus 1 - 10)
    if (!ratingVal || ratingVal < 1 || ratingVal > 10) {
      errorRating.style.display = "inline";
      inputRating.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      errorRating.style.display = "none";
      inputRating.removeAttribute("aria-invalid");
    }

    // 4. Jika validasi lolos, tambahkan film ke array dan render ulang
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

      // Render ulang daftar film dengan data terbaru
      render(daftarFilm);

      // Reset isian form
      formFilm.reset();
    }
  });
}