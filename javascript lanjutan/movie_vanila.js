
function movieDatabases() {
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
            // console.log(id);

            xhr.onreadystatechange = function () {
              if (xhr.status === 200) {
                if (xhr.readyState === 4) {
                  let detail = "";
                  //   console.log(xhr.response);
                  const modalDetail = JSON.parse(xhr.response);
                  detail += showDetail(modalDetail);
                  document.querySelector(".movie-modal").innerHTML = detail;
                }
              } else {
                console.log(xhr.response);
              }
            };
            xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&i=" + id);
            xhr.send();
          });
        });
      }
    } else {
      console.log(xhr.response);
    }
  };
  xhr.open("get", "http://www.omdbapi.com/?apikey=a1e37a18&s=" + inputSearch.value);
  xhr.send();
}
