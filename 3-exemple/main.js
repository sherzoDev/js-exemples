var elForm = document.querySelector("#form");
var elInput = document.querySelector(".form-control");
var elAlert = document.querySelector(".alert");

elForm.addEventListener("submit", function (even) {
  even.preventDefault();
  var inputValue = Number(elInput.value);
  if (inputValue % 3 == 0 && inputValue % 5 === 0) {
    elAlert.textContent = `FizzBuzz`;
  } else if (inputValue % 5 === 0) {
    elAlert.textContent = `Buzz!`;
  } else if (inputValue % 3 === 0) {
    elAlert.textContent = `Fizz`;
  } else {
    elAlert.textContent = inputValue + " " + "Bu son bo'linmaydi";
  }

  elInput.value = "";

})