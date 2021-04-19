// Refactoring using async and await
const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("button-search");

buttonSearch.addEventListener("click", async function () {
  try {
    const movies = await movieDatabasesFetch(inputSearch.value);
    updateUI(movies);
  } catch (err) {
    hasil = `<div class="alert alert-info" role="alert">${err}</div>`;
    document.querySelector(".movies").innerHTML = hasil;  }
});

inputSearch.addEventListener("keyup", async function () {
  try {
    if (event.keyCode === 13) {
      const movies = await movieDatabasesFetch(inputSearch.value);
      updateUI(movies);
    }
  } catch (err) {
    hasil = `<div class="alert alert-info" role="alert">${err}</div>`;
    document.querySelector(".movies").innerHTML = hasil;
  }
});

function movieDatabasesFetch(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=a1e37a18&s=" + keyword)
    .then((response) => {
      // event handler at fetch process
      if (response.ok == false) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      // event handler at UI update
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

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
