var penumpang = [];
var naik = function (namaPenumpang) {
  if (penumpang == 0) {
    penumpang.unshift(namaPenumpang);
    return penumpang;
  } else {
    var kosong = penumpang.filter(function (x) {
      return x === undefined;
    });
    var cari = penumpang.filter(function (x) {
      return x === namaPenumpang;
    });
    if (kosong.length !== 0) {
      penumpang.splice(1, 1, namaPenumpang); // harus pake for
      return penumpang;
    } else {
      if (cari.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
      } else {
        console.log("Nama " + namaPenumpang + " sudah ada!");
        return penumpang;
      }
    }
  }
};

var turun = function (namaPenumpang) {
  if (penumpang == 0) {
    console.log("Tidak ada penumpang!");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[0] = undefined;
        return penumpang;
      }
    }
  }
};
