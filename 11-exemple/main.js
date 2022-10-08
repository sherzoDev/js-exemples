var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var text = document.querySelector("#text");
var lorem = document.querySelector(".lorem");

elForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  var elInputValFirst = lorem.textContent.indexOf(elInput.value.trim());

  var elTextValSecond = lorem.textContent.indexOf(text.value.trim());

  console.log(lorem.textContent.substr(elInputValFirst, elTextValSecond));

});