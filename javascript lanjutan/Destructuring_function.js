// Destructuring Function

// return arrray
// function kalkulasi(a, b) {
//   return [a + b, a * b, a - b, a / b];
// }
// // const jumKal = jumlahKali(2, 3);
// // const jumlah = jumlahKali(2, 3)[0];
// // const kali = jumlahKali(2, 3)[1];
// // const [jumlah, kali] = jumlahKali(2, 3);
// const [tambah, kali, kurang, bagi = 'tidak ada'] = kalkulasi(2, 3);

// return object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kali: a * b,
//     kurang: a - b,
//     bagi: a / b,
//   };
// }
// const { bagi, kurang, tambah, kali } = kalkulasi(2, 3);

// arguments
const mhs1 = {
  nama: "Khairul Imam",
  umur: 28,
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};
// cara 1
// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// }

// cara2
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
//   }
//   console.log(cetakMhs(mhs1));

// cara 3
function cetakMhs({ nama, umur, nilai: {tugas, uas, uts} }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, nilai UAS saya adalah ${uas} `;
}
console.log(cetakMhs(mhs1));
