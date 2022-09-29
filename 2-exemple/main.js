var randomNumber = Number(prompt("Raqam kiriting!"))

if (randomNumber % 3 == 0 && randomNumber % 5 === 0) {
  console.log((`FizzBuzz`));
} else if (randomNumber % 5 === 0 ) {
  console.log((`Buzz!`));
} else if (randomNumber % 3 === 0 ) {
  console.log((`Fizz`));
} else {
  console.log((randomNumber + " " + "Bu son bo'linmaydi"));
}