var penumpang = [];
var naik = function (namaPenumpang) {
  if (penumpang == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        console.log("Nama " + namaPenumpang + " sudah ada!");
      } else if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
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
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log("Nama " + namaPenumpang + " tidak ada!");
        return penumpang;
      }
    }
  }
};
