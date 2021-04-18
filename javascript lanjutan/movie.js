// Refactoring using async and await
const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("button-search");

buttonSearch.addEventListener("click", async function () {
  const movies = await movieDatabasesFetch(inputSearch.value);
  updateUI(movies);
});

inputSearch.addEventListener("keyup", async function () {
  if (event.keyCode === 13) {
    const movies = await movieDatabasesFetch(inputSearch.value);
    updateUI(movies);
  }
});

// event binding for detail button
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail")) {
    const idMovie = e.target.dataset.id;
    const movieDetail = await getMovieDetail(idMovie);
    updateUIDetail(movieDetail);
  }
});

function updateUIDetail(detailMovie) {
  let detail = "";
  detail += showDetail(detailMovie);
  document.querySelector(".movie-modal").innerHTML = detail;
}

function getMovieDetail(idMovie) {
  return fetch("http://www.omdbapi.com/?apikey=a1e37a18&i=" + idMovie)
    .then((response) => response.json())
    .then((response) => response);
}

function movieDatabasesFetch(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=a1e37a18&s=" + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let hasil = "";
  movies.forEach((movie) => {
    hasil += showHasil(movie);
    document.querySelector(".movies").innerHTML = hasil;
  });
}

function showHasil(m) {
  return `
    <div class="col-sm-3 mb-1" >
        <div class="card" >
        <img src="${m.Poster}" width="100%">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <p>${m.Year}</p>
            <button type="button" class="btn btn-primary modal-detail" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="${m.imdbID}">
            Show Details
            </button>
        </div>
        </div>
    </div>`;
}

function showDetail(d) {
  return `
    <div class="row">
        <div class="col-md-3">
            <img src="${d.Poster}" width="100%">
        </div>
        <div class="col-md-9">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><h4>${d.Title}</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${d.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${d.Actors}</li>
                <li class="list-group-item">${d.Plot}</li>
            </ul>
        </div>
    </div>`;
}

// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=a1e37a18&s=avengers",
//   success: (m) => {
//     const movies = m.Search;
//     let hasil = "";
//     movies.forEach((movie) => {
//       hasil += showHasil(movie);
//       $(".movies").html(hasil);
//     });
//     $(".modal-detail").on("click", function () {
//       // console.log($(this).data('id'))
//       $.ajax({
//         url: "http://www.omdbapi.com/?apikey=a1e37a18&i=" + $(this).data("id"),
//         success: (d) => {
//           let detail = "";
//           detail += showDetail();
//           $(".movie-modal").html(detail);
//         },
//       });
//     });
//   },
// });

// function movieDatabases() {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//       if (xhr.readyState === 4) {
//         const result = xhr.response;
//         const movies = JSON.parse(result).Search;
//         // console.log(movies);
//         let hasil = "";
//         movies.forEach((movie) => {
//           hasil += showHasil(movie);
//           document.querySelector(".movies").innerHTML = hasil;
//         });
//         const detailBtn = document.querySelectorAll(".modal-detail");
//         detailBtn.forEach(function (btn) {
//           btn.addEventListener("click", function () {
//             const id = btn.dataset.id;
//             // console.log(id);

//             xhr.onreadystatechange = function () {
//               if (xhr.status === 200) {
//                 if (xhr.readyState === 4) {
//                   let detail = "";
//                   //   console.log(xhr.response);
//                   const modalDetail = JSON.parse(xhr.response);
//                   detail += showDetail(modalDetail);
//                   document.querySelector(".movie-modal").innerHTML = detail;
//                 }
//               } else {
//                 console.log(xhr.response);
//               }
//             };
//             xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&i=" + id);
//             xhr.send();
//           });
//         });
//       }
//     } else {
//       console.log(xhr.response);
//     }
//   };
//   xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&s=" + inputSearch.value);
//   xhr.send();
// }
