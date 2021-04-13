// Callback

// Synchronus Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan nama : ");
//   callback(nama);
// }
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Khairul Imam",
//     alamat: "Sengkerang",
//     umur: 23,
//   },
//   {
//     nama: "Yusron Fanani",
//     alamat: "Penujak",
//     umur: 24,
//   },
//   {
//     nama: "Hendri Saleh",
//     alamat: "Janapria",
//     umur: 27,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronus Callback
// menggunakan vanila javascript

// function getDataMhs(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// function success(result) {
//   JSON.parse(result).forEach((m) => console.log(m.nama));
// }
// function error() {
//   //
// }

// console.log("mulai");
// getDataMhs("data/mhs.json", success, error);
// // getDataMhs(
// //   "data/mhs.json",
// //   (result) => {
// //     JSON.parse(result).forEach((m) => console.log(m.nama));
// //   },
// //   (error) => {}
// // );
// console.log("selesai");

// menggunakan JQuery
console.log("mulai");
$.ajax({
  url: "data/mhs.json",
  success: (result) => {
    result.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    document.innerHTML = e.responseText;
  },
});
console.log("selesai");
