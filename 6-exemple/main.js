var elForm = document.querySelector(".js-form-find");
var input = document.querySelector(".form-control");
var result = document.querySelector(".js-find-result");
var attemp = document.querySelector(".attemp");

var randomNumber = Math.floor(Math.random() * 100);

var maxAttempNumber = 6;

attemp.textContent = `Urinishlar soni ${maxAttempNumber}`;

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  var elInputValue = Number(input.value.trim());

  if(elInputValue > randomNumber) {
    result.textContent = "Kiritgan raqamingiz x sonidan katta";
    result.classList.add("alert-danger");
  };
});