// Membuat Object
// Object Literal
var mhs1 = {
  nama: "Fahad Far'i",
  nrp: "023568956124",
  email: "fahad@gmail.com",
  jurusan: "Teknik Mesin",
};
var mhs2 = {
  nama: "Yusron Vanani",
  nrp: "032564875214",
  email: "yusron@gmail.com",
  jurusan: "Teknik Elektro",
};

// Function Declaration
function mhs(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs3 = mhs("Hendri Saleh", "023654895125", "hendri@gmail.com", "Teknik Informatika");

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  // var this = {}
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this
}
var mhs4 = new Mahasiswa("Khairul Imam", "023365897845", "imam@gmail.com", "Tata Boga");
