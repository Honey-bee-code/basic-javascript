// AJAX menggunakan JQuery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=a1e37a18&s=avengers",
//   success: (m) => {
//     const movies = m.Search;
//     movies.forEach((m) => {
//       console.log(m.Title);
//     });
//   },
// });

// AJAX menggunakan vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       const result = xhr.response;
//       const parsingResult = JSON.parse(result);
//       const movies = parsingResult.Search;
//       console.log(movies);
//       movies.forEach((m) => console.log(m.Title));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&s=avengers");
// xhr.send();

// AJAX menggunakan fetch
// fetch("http://www.omdbapi.com/?apikey=a1e37a18&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response.Search));

// Promise
// Object yang merepresetasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// janji (terpenuhi / ingkar)
// statse (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh membuat promise 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji ditepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });
// // console.log(janji1);
// janji1.then((response) => console.log(response)).catch((response) => console.log(response));

// contoh membuat promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Janji ditepati setelah 3 detik");
//     }, 3000);
//   } else {
//     setTimeout(() => {
//       reject("Janji diingkari setelah 2 detik");
//     }, 2000);
//   }
// });

// console.log("mulai");

// // console.log(janji2.then(() => console.log(janji2)).catch(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("Selesai menunggu"))
//   .then(() => console.log(janji2))
//   .catch(() => console.log(janji2));

// console.log("selesai");

// Promise All()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Ibnu Syauqi",
        actors: "Imam, Fahad",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "mataram",
        temperatur: 26,
        keterangan: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response[0]));
// cuaca.then((response) => console.log(response[0]));

Promise.all([film, cuaca])
  //   .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film[0]);
    console.log(cuaca[0]);
  });
