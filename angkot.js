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
      penumpang.splice(1, 1, namaPenumpang);
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

