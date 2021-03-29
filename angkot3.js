function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.naik = function (nama) {
    if (this.penumpang == 0) {
      this.penumpang.push(nama);
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        var cekNama = this.penumpang.filter(function (x) {
          return x == nama;
        });
        if (cekNama != 0) {
          console.log(nama + " sudah ada!");
          return this.penumpang;
        } else if (this.penumpang[i] == undefined) {
          this.penumpang[i] = nama;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(nama);
          return this.penumpang;
        }
      }
    }
  };
  this.turun = function (nama, bayar) {
    if (this.penumpang == 0) {
      console.log("Angkot kosong!");
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == nama) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          console.log(nama + " Tidak ada!");
        }
      }
    }
  };
}

var angkot1 = new Angkot("Hendri Saleh", ["Mataram", "Gunungsari"], [], 0);
var angkot2 = new Angkot("Yusron Vanani", ["Gerung", "Lembar"], [], 0);
