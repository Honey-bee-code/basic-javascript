$.ajax({
  url: "http://www.omdbapi.com/?apikey=a1e37a18&s=avengers",
  success: (m) => {
    const movies = m.Search;
    let hasil = "";
    movies.forEach((movie) => {
      hasil += showHasil(movie);
      $(".movies").html(hasil);
    });
    $(".modal-detail").on("click", function () {
      // console.log($(this).data('id'))
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=a1e37a18&i=" + $(this).data("id"),
        success: (d) => {
          let detail = "";
          detail += showDetail();
          $(".movie-modal").html(detail);
        },
      });
    });
  },
});

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
  