var form = document.querySelector(".form");
var input = document.querySelector(".form-control");
var select = document.querySelector(".form-select");
var span = document.querySelector(".span");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    span.textContent = input.value * select.value;
});