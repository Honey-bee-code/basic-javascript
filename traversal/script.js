// const hapus = document.querySelector(".close");
// // const container = document.querySelector(".container");
// const card = document.querySelector(".card");
// hapus.addEventListener("click", function () {
//   //   container.removeChild(card);
//   card.style.display = "none";
// });

// DOM Traversal

// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     // close[i].parentElement.style.display = "none";
//     event.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (element) {
//   element.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//     event.preventDefault();
//     event.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function () {
//     alert("OK");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (event) {
  if (event.target.className == "close") {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
  }
});
