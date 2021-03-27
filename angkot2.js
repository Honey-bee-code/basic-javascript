var penumpang = [];
var naik = function (namaPenumpang) {
  if (penumpang == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        console.log("Nama " + namaPenumpang + " sudah ada!");
        return penumpang;
      } else {
        if (penumpang[i] == undefined) {
          penumpang[i] = namaPenumpang;
          return penumpang;
        } else if (i == penumpang.length - 1) {
          penumpang.push(namaPenumpang);
          return penumpang;
        } else if (penumpang[i] == namaPenumpang) {
          console.log("Nama " + namaPenumpang + " sudah ada!");
          return penumpang;
        }
      }
    }
  }
};
