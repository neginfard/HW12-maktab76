const header = document.getElementById("elemId");

header.addEventListener("click", (e) => {
  e.target.innerHTML = "Goodbye";
  let x = e.clientX;
  let y = e.clientY;
  let coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("coordinate").innerHTML = coords;
});
