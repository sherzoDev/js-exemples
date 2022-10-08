var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var elInputValue = elInput.value;
  console.log(elInputValue.replaceAll(" ", ""));
})