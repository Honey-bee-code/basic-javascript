var lagi = true;
while (lagi) {
  var c = Math.random();
  var h = "";
  var g = "gajah";
  var s = "semut";
  var o = "orang";
  var win = "KAMU MENANG";
  var lose = "KAMU KALAH";
  var p = prompt("Silahkan ketik: gajah/semut/orang");
  console.log(c);
  if (c < 0.34) {
    c = g;
  } else if (c > 0.34 && c < 0.67) {
    c = s;
  } else if (c > 0.67) {
    c = o;
  }

  if (p == c) {
    h = "Hasilnya : SERI!";
  } else if (p == g) {
    if (c == o) {
      h = win;
    } else {
      h = lose;
    }
  } else if (p == s) {
    if (c == g) {
      h = win;
    } else {
      h = lose;
    }
  } else if (p == o) {
    if (c == s) {
      h = win;
    } else {
      h = lose;
    }
  } else {
    console.log("salah input");
  }

  console.log("kamu memilih " + p);
  console.log("computer memilih " + c);
  console.log("hasilnya : " + h);
  alert("Kamu memilih " + p + "\nComputer memilih " + c + "\nHasilnya : " + h);
  lagi = confirm("Ingin bermain lagi?");
}
alert("Terima kasih sudah bermain!");
