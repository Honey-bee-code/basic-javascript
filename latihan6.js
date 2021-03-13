var s = "";
var n = 15;
for (var i = n; i > 0; i--) {
  for (var k = n; k > i; k--) {
    s += "-";
  }
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  for (var l = 1; l < i; l++) {
    s += "*";
  }
  for (var m = n; m > i; m--) {
    s += "-";
  }
  s += "\n";
}
console.log(s);
