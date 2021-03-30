// Manipulasi Array

// 1. Menambah isi array
// var arr = [];

// arr[0] = "Fahad";
// arr[1] = "Yusron";
// arr[3] = "Hendri";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Fahad", "Yusron", "Hendri"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Fahad", "Yusron", "Imam", "Hendri"];
// for (i = 0; i < arr.length; i++) {
//   console.log("Siswa ke - " + (i + 1) + " : " + arr[i]);
// }

// Method Pada Array

// 1. Join
// var arr = ["Fahad", "Yusron", "Imam", "Hendri"];
// console.log(arr.join(" - "));

// 2. push & pop (menambahkan dan menghapus di akhir)
// arr.push('Zubed', 'Hilman')
// arr.pop()
// arr.pop()
// console.log(arr.join(' - '))

// 3. unshift & shift (menambahkan dan menghapus di awal)
// arr.unshift('Zubed', 'Hilman')
// arr.shift()
// arr.shift()
// console.log(arr.join(" - "));

// 4. splice
// var arr = ["Fahad", "Yusron", "Imam", "Hendri"];
// splice(indexAwal, dihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Zubed', 'Hilman')
// arr.splice(2, 2, 'Zubed', 'Hilman')
// console.log(arr.join(' - '))

// 5. slice
// slice(indexAwal, indexAkhir)
// var arr = ["Fahad", "Yusron", "Imam", "Hendri"];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(" - "));
// console.log(arr2.join(' - '))

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var arr = ["Fahad", "Yusron", "Imam", "Hendri"];
// for (i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// angka.forEach(function (e) {
//   console.log(e);
// });
// arr.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i+1) + " : " + e);
// });

// 7. map

// var random = [2, 3, 5, 4, 8, 9, 5, 1];
// var angka = random.map(function (e) {
//   return e * 2;
// });
// console.log(angka.join(' - '));

// 8. sort
// var random = [2, 3, 5, 20, 4, 8, 9, 5,100, 1, 10];
// console.log(random.join());
// random.sort();
// console.log(random.join());
// random.sort(function (a, b) {
//   return a - b;
// });
// console.log(random.join());

// 9. filter & find (filter bisa mengembalikan banyak nilai)
var random = [2, 3, 5, 20, 4, 8, 9, 5, 100, 1, 10];
var angka5 = random.filter(function (x) {
  return x > 5;
});
console.log(angka5.sort(function (a,b) {
    return a-b
}))
