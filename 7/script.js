function event_function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("show_position").innerHTML = coords;
}
