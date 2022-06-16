const btns = document.getElementById("buttons");

btns.addEventListener("click", (e) => {
  if (e.target.className === "buttonClass") {
    console.log(e.target.className);
  } else {
    console.log("Click!");
  }
});
