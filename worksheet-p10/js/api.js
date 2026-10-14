// js/api.js

export async function ambilProyek() {
  // Menggunakan data JSON langsung melalui fetch (bisa menggunakan file lokal atau API publik film)
  // Di sini menggunakan simulasi fetch data JSON film yang bersih dan terstruktur
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5');
  
  if (!response.ok) {
    throw new Error(`Gagal mengambil data: Status ${response.status}`);
  }
  
  const dataMentah = await response.json();
  
  // Mapping data agar propertinya sesuai dengan format film yang dipilih
  const daftarFilmApi = dataMentah.map((item, index) => {
    const judulPilihan = [
      "The Lord of the Rings: The Fellowship of the Ring",
      "The Lord of the Rings: The Two Towers",
      "The Lord of the Rings: The Return of the King",
      "The Hobbit: An Unexpected Journey",
      "The Hobbit: The Desolation of Smaug"
    ];
    const kategoriPilihan = ["lotr", "lotr", "lotr", "hobbit", "hobbit"];
    const tahunPilihan = [2001, 2002, 2003, 2012, 2013];
    const ratingPilihan = [8.8, 8.7, 9.0, 7.8, 7.9];

    return {
      judul: judulPilihan[index] || item.title,
      tahun: tahunPilihan[index] || 2026,
      rating: ratingPilihan[index] || 8.0,
      kategori: kategoriPilihan[index] || "lainnya"
    };
  });

  return daftarFilmApi;
}