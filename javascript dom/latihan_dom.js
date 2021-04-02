const h1 = document.getElementsByTagName("h1")[0];
const hijau = document.getElementById("hijau");
const merah = document.getElementById("merah");
const kuning = document.getElementById("kuning");
const biru = document.getElementById("biru");
const acak = document.getElementById("acak");
// hijau.addEventListener("click", function () {
//   h1.style.color = "white";
//   document.body.style.backgroundColor = "green";
// });
// merah.addEventListener("click", function () {
//   h1.style.color = "yellow";
//   document.body.style.backgroundColor = "red";
// });
// kuning.addEventListener("click", function () {
//   h1.style.color = "green";
//   document.body.style.backgroundColor = "yellow";
// });
// biru.addEventListener("click", function () {
//   //   document.body.setAttribute("class", "biru");
//   document.body.classList.toggle("biru");
// });

// document.body.addEventListener("click", function () {
//   h1.style.color = "black";
//   document.body.style.backgroundColor = "white";
// });

acak.addEventListener("click", function () {
  // ada tika jenis pembulatan, round, floor, ceiling
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  //   console.log(r,g,b);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  h1.style.color = "rgb(" + (r - 50) + "," + (g - 50) + "," + (b - 50) + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
// bisa pake change/input
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const kotak = document.getElementById("sMerah");
  kotak.innerHTML = r;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const kotak = document.getElementById("sHijau");
  kotak.innerHTML = g;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  const kotak = document.getElementById("sBiru");
  kotak.innerHTML = b;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
