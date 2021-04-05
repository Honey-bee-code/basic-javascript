// cara untuk membuat object pada javascript

// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama: "Yusron",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log("halo " + this.nama + " selamat makan");
//     console.log("jumlah energi : " + this.energi);
//     return mahasiswa;
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("Hai " + this.nama + ", energi anda bertambah " + porsi);
//     console.log("Jumlah energi : " + this.energi);
//   };
//   mahasiswa.main = function (jam) {
//       this.energi -= jam
//       console.log("Hai " + this.nama + ", energi anda berkurang " + jam);
//       console.log("Jumlah energi : " + this.energi);
//   }
//   return mahasiswa;
// }

// let Yusron = Mahasiswa("Yusron", 10);
// let Fahad = Mahasiswa("Fahad", 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log("Hai " + this.nama + ", energi anda bertambah " + porsi);
//     console.log("Jumlah energi : " + this.energi);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log("Hai " + this.nama + ", energi anda berkurang " + jam);
//     console.log("Jumlah energi : " + this.energi);
//   };
// }
// let Yusron = new Mahasiswa('Yusron', 10);

// 4. Object.create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log("Hai " + this.nama + ", energi anda bertambah " + porsi);
//     console.log("Jumlah energi : " + this.energi);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log("Hai " + this.nama + ", energi anda berkurang " + jam);
//     console.log("Jumlah energi : " + this.energi);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log("Selamat tidur " + this.nama + ", energi anda bertambah " + jam);
//     console.log("Jumlah energi : " + this.energi);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   // tidak perlu lagi pake object dibawah ini:
//   // mahasiswa.makan = methodMahasiswa.makan;
//   // mahasiswa.main = methodMahasiswa.main;
//   // mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let Yusron = Mahasiswa("Yusron", 10);
// let Fahad = Mahasiswa("Fahad", 20);

// 5. Prototype
function Mahasiswa(nama, energi) {
  // secara default constructor sudah punya parent bernama prototype
  // let this = Object.create(Mahasiswa.prototype);
  this.nama = nama;
  this.energi = energi;
  //   return this;
}
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log("Hai " + this.nama + " energi anda bertambah " + porsi);
  console.log("Jumlah energi : " + this.energi);
};

let Fahad = new Mahasiswa("Fahad", 10);
