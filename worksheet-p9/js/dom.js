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