// js/api.js
const ALAMAT = 'data/film.json';

export async function ambilFilm() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}