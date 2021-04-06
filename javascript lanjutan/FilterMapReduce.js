const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);

// mencari angka >= 3
// menggunakan for
const newAngka1 = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka1.push(angka[i]);
  }
}
console.log(newAngka1);

// menggunakan filter
const newAngka2 = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka2);

// atau bisa disederhanakan lagi menggunakan arrow function
const newAngka3 = angka.filter((a) => a >= 3);
console.log(newAngka3);

// kalikan semua angka dengan 2
// menggunakan for
const newAngka4 = [];
for (let i = 0; i < angka.length; i++) {
  newAngka4.push(angka[i] * 2);
}
console.log(newAngka4);

// menggunakan map
const newAngka5 = angka.map((a) => a * 2);
console.log(newAngka5);

// reduce
// jumlahkan seluruh element pada array
// jika tidak ditulis, nilaiAwal default adalah 0
const nilaiAwal = 5; // nilai Awal bisa ditulis/tidak
const newAngka6 = angka.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, nilaiAwal);
console.log(newAngka6);

// sederhanakan menjadi arrow function
const newAngka7 = angka.reduce((acc, cur) => acc + cur, nilaiAwal);
console.log(newAngka7);

// Method Chain (berantai)
// Cari angka > 5
// kalikan 3
// dibagi 2
// jumlahkan seluruhnya
const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a / 2) // 24,27,27
  .map(a => a / 2) 
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);
