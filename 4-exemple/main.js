var tripMoney = Number(prompt("Alisher qancha pulingiz bor sayaohat uchun."));

var oneDollar = 11063.05;
var oneEuro = 10940.25;

var planeCost = 500;
var hotelCost = 250;
var museumCost = 120;

var tripCost = planeCost * oneDollar + hotelCost * oneDollar + museumCost * oneEuro;

if (tripMoney >= tripCost) {
  alert("Oq yo'l Alisher mazza qilib aylanib qiling!");
} else {
  alert("Ozgina sabr qilib pul yig'ing!")
}