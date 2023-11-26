interface Karyawan {
  id: number;
  nama: string;
}

function binarySearch(data: Karyawan[], targetID: number): Karyawan | null {
  let low = 0;
  let high = data.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (data[mid].id === targetID) {
      // Jika ID ditemukan, kembalikan objek karyawan
      return data[mid];
    } else if (data[mid].id < targetID) {
      // Jika ID di tengah kurang dari target, cari di sebelah kanan
      low = mid + 1;
    } else {
      // Jika ID di tengah lebih dari target, cari di sebelah kiri
      high = mid - 1;
    }
  }

  // Jika ID tidak ditemukan, kembalikan null
  return null;
}

// Input
const dataKaryawan: Karyawan[] = [
  { id: 101, nama: "Rani" },
  { id: 203, nama: "Andi" },
  { id: 305, nama: "Budi" },
  { id: 410, nama: "Cindy" },
  { id: 520, nama: "Dodi" },
  { id: 635, nama: "Eka" },
  { id: 742, nama: "Fani" },
];
const targetID: number = 305;

// Panggil fungsi binarySearch
const karyawan: Karyawan | null = binarySearch(dataKaryawan, targetID);

// Output
console.log("karyawan =", karyawan);
