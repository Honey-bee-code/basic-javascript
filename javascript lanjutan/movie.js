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
//           console.log(d);
//           detail += showDetail();
//           $(".movie-modal").html(detail);
//         },
//       });
//     });
//   },
// });

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status === 200) {
    if (xhr.readyState === 4) {
      const result = xhr.response;
      const movies = JSON.parse(result).Search;
      // console.log(movies);
      let hasil = "";
      movies.forEach((movie) => {
        hasil += showHasil(movie);
        document.querySelector(".movies").innerHTML = hasil;
      });
      const detailBtn = document.querySelectorAll(".modal-detail");
      detailBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const id = btn.dataset.id;
          let detail = "";
          const xhrDetail = new XMLHttpRequest();
          if (xhrDetail.status === 200) {
            if (xhrDetail.readyState === 4) {
              xhrDetail.onreadystatechange = function () {
                const modalDetail = xhr.response.Search;
                console.log(modalDetail)
                detail += showDetail(modalDetail);
                document.querySelector(".movie-modal").innerHTML = detail;
              };
            }
          } else {
            console.log(xhrDetail.response);
          }
          xhrDetail.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&i=" + id);
          xhrDetail.send();
        });
      });
    }
  } else {
    console.log(xhr.response);
  }
};
xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&s=avengers");
xhr.send();

function showHasil(m) {
  return `
    <div class="col-sm-2" >
        <div class="card" >
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
            <img src="${d.Poster}" alt="">
        </div>
        <div class="col-md-9">
            <ul>
                <li><h4>${d.Title}</h4></li>
                <li><strong>Director : </strong>${d.Director}</li>
                <li><strong>Actors : </strong>${d.Actors}</li>
                <li>${d.Plot}</li>
            </ul>
        </div>
    </div>`;
}
