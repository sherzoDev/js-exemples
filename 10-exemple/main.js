var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var text = document.querySelector("#text");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var elInputValue = elInput.value;
  var textValue = text.value;
  console.log(textValue.includes(elInputValue));
});