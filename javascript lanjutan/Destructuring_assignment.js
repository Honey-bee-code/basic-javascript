// DESTRUCTURING VARIABLE / ASSIGNMENT
// array
// const orang = ["Yusron", "Fahad", "Imam"];
// const [a, b, c] = orang;

// Rest parameter
// const [a, ...value] = orang;

// function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();

// Object
// const mhs = {
//   nama: "Khairul Imam",
//   umur: 28,
//   lulus: true,
// };
// const { nama, umur, lulus } = mhs;

// Assignment object tanpa deklarasi
// ({ nama, umur } = { nama: "Khairul Imam", umur: 28 });

// Assign ke variable baru
// const mhs = {
//   nama: "Khairul Imam",
//   umur: 28,
//   lulus: true,
// };
// const { nama: n, umur: u, lulus: l } = mhs;

// Memberikan default value
// const mhs = {
//   nama: "Khairul Imam",
//   umur: 28,
// };
// const { nama: n, umur: u, email: e = 'default@email.com'} = mhs;

// Mengambil field pada object
// const mhs = {
//   id: 123,
//   nama: "Khairul Imam",
//   umur: 28,
// };
// function getId(object) {
//   return object.id;
// }
// function getId({id}) {
//     return id;
// }