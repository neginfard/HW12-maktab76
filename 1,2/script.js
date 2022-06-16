const nameInput = document.querySelector(".name");

nameInput.addEventListener("change", (event) => {
  if (nameInput.value) {
    console.log(event.target.value);
  } else {
    console.log("required Name");
  }
});

const emailInput = document.querySelector(".email");
emailInput.addEventListener("keyup", (e) => {
  const infoEmail = document.querySelector("#email").innerHTML;
  emailInput.value = infoEmail;
});

const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.history.back();
});
