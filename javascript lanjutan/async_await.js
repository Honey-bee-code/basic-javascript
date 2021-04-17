// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 3000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((berhasil, gagal) => {
    const waktu = 4000;
    if (waktu < 5000) {
      setTimeout(() => {
        berhasil("selesai");
      }, waktu);
    } else {
      gagal("kelamaan");
    }
  });
}

// const coba = cobaPromise();
// // console.log(coba);
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// menggunakan async dan await (try and catch())
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}
cobaAsync();
