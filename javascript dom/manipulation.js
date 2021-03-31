// const judul = document.getElementById('judul')
// judul.innerHTML = 'Muhammad Aulia <i>Hanifi</i>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'hello world'

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "honeybeecode");
// judul.removeAttribute('name')

// buat element baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baru");

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
