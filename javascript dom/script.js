// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Honeybeecode";

// document.getElementsByTagName() ->htmlCollection ->array
const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "lightblue";
// atau bisa pake looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName -> htmlCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";
