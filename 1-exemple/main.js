var user = prompt("Ismingizni kiriting:");
var surname = prompt("Familangizni kiriting:");
var age = prompt("Yoshingizni kiriting:");
var passportid = prompt("Passport Idni kiriting:");
var valut = Number(prompt("Valutani kiriting:") * 11040);

console.log(`Sizning ismingiz: ${user},  Sizning familangiz: ${surname},
Sizning yoshingiz ${age},
AQSH dollari so'mda ${valut}`);

var pass = document.getElementById("pass")

pass.innerHTML=(`Sizning ismingiz: ${user}, <br>  Sizning familangiz: ${surname}, <br>
Sizning yoshingiz: ${age}, <br>
AQSH dollari so'mda: ${valut}`);