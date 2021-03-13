var s = "";
for (var i = 0; i <= 5; i++) {
  if (i % 2 == 0) {
    for (var j = 0; j <= 5; j++) {
      if (j % 2 == 0) {
        s += "0";
      } else {
        s += " ";
      }
    }
    s += "\n";
  } else {
    for (var j = 0; j <= 5; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "0";
      }
    }
    s += "\n";
  }
}
console.log(s);
