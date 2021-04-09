// 1. HTML Fragments
// const mhs = {
//   nama: "Yusron Fanani",
//   umur: 27,
//   nrp: "021521452325",
//   email: "yusron@abc.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'Yusron Fanani',
//         email: 'yusron@gmail.com'
//     },
//     {
//         nama: 'Hendri Saleh',
//         email: 'hendri@gmail.com'
//     },
//     {
//         nama: 'Khairul Imam',
//         email: 'imam@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(m =>
//     `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//     ).join('')}
// </div>`

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Sarasvati",
//   //   feat: "Fahad",
// };
// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang
const mhs = {
  nama: "Yusron Fanani",
  semester: 5,
  matkul: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMatkul(matkul) {
  return `
    <ol>
        ${matkul
          .map(function (mk) {
            return `<li>${mk}</li>`;
          })
          .join("")}
        <hr>
        ${matkul.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMatkul(mhs.matkul)}
</div>`;

document.body.innerHTML = el;
