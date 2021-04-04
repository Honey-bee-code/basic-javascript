const hapus = document.querySelector(".close");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
hapus.addEventListener("click", function () {
  container.removeChild(card);
});
