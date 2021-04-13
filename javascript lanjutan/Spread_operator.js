// Spread Operator

// Memecah iterables menjadi single element
// const mhs = ["Imam", "Yusron", "Fahad"];
// console.log(...mhs[1]);

// Menggabungkan 2 array
// const mhs = ["Yusron", "Fahad", "Hendri"];
// const dosen = ["Imam", "Zubed", "Hardi"];
// // const orang = mhs.concat(dosen);
// const orang = [...mhs, "Hilman", ...dosen];
// console.log(orang);

// Meng-copy array
// const mhs = ["Imam", "Yusron", "Hendri"];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "Zubed";
// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");

// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //   mhs.push(liMhs[i].textContent);
// // }

// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs);

const nama = document.querySelector("h1");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;
