const mhs = ["Imam", "Yusron", "Fahad"];

// menggunakan for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// menggunakan forEach
// mhs.forEach(function (m) {
//   console.log(m);
// });
// mhs.forEach((m) => console.log(m));
// mhs.forEach((m, i) => console.log(i + 1, m));

// for..of

// for (const m of mhs) {
//   console.log(m);
// }

// for (const m of mhs[1]) {
//   console.log(m);
// }

// for (const [i, m] of mhs.entries()) {
//   console.log(i + 1, m);
// }

// Node List
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
function jumlahAngka() {
  // reduce tidak bisa digunakan pada argument
  //   return arguments.reduce((a, i) => a + i);
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahAngka(1, 2, 3, 4, 5));
