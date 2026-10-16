const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const statusPesan = document.querySelector("#status");

function buatKartu(item) {
  const li = document.createElement("li");
  li.className = "kartu";
  
  const judul = item.judul || item.title || "Judul Tidak Tersedia";
  const tahun = item.tahun || 2026;
  const rating = item.rating || "N/A";
  
  li.textContent = `${judul} (${tahun}) — Rating: ${rating}`;
  return li;
}

export function saring(state) {
  const { daftarFilm, kategoriAktif } = state;
  return daftarFilm.filter(
    (film) => kategoriAktif === "semua" || film.kategori === kategoriAktif
  );
}

export function render(state) {
  wadah.textContent = "";

  if (statusPesan) {
    statusPesan.textContent = state.statusPesan;
  }

  const tampil = saring(state);

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  tampil.forEach((item) => wadah.append(buatKartu(item)));

  document.querySelectorAll("#filter button").forEach((b) => {
    if (b.dataset.kategori === state.kategoriAktif) {
      b.classList.add("aktif");
    } else {
      b.classList.remove("aktif");
    }
  });
}