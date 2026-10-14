// js/api.js

const ALAMAT = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export async function ambilProyek() {
  const respons = await fetch(ALAMAT);
  
  // Periksa status respons agar galat 4xx/5xx tertangkap
  if (!respons.ok) {
    throw new Error(`Gagal mengambil data: Status ${respons.status}`);
  }

  const isi = await respons.json();
  return isi;
}