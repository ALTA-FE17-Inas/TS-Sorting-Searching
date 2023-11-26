function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // untuk membandingkan bilangan berturut-turut
      if (arr[j] > arr[j + 1]) {
        // menukar bilangan jika mereka berada dalam urutan yang salah
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const nilaiMahasiswa: number[] = [80, 65, 90, 75, 85, 70, 95, 60];
// Sorting Bubble Sort
const nilaiTerurut: number[] = bubbleSort(nilaiMahasiswa);

console.log("nilaiTerurut =", nilaiTerurut);
