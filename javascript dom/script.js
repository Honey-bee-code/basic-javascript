// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Honeybeecode";

// document.getElementsByTagName() ->htmlCollection ->array
// const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightblue";
// atau bisa pake looping
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// document.getElementsByClassName -> htmlCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Ini diubah dari javascript";

// document.querySelector() -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = 'orange'

// document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p')
// p[2].style.backgroundColor = 'lightblue'

// Node Root
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "orange";
