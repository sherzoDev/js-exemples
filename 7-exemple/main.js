var elForm = document.querySelector("#form");
var elInput = document.querySelector(".form-control");
var elAlert = document.querySelector(".alert");
var newStr = "";

elForm.addEventListener("submit", function (even) {

  even.preventDefault();
  var inputValue = Number(elInput.value.trim());

  if (inputValue % 3 == 0) {
    return newStr += "Fizz";
  }
  if (inputValue % 5 == 0) {
    return newStr += "Buzz";
  } 

  elAlert.textContent = newStr || inputValue;

  elInput.value = "";

});