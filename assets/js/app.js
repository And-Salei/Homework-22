function calc() {
let h = +height.value;
let m = +weight.value;
if (h > 3) {index = m / ((h/100) ** 2);}
else {index = m / ((h) ** 2);}
index = Math.round (index * 10) / 10;


if (index <= 16) {result = 'Выраженный дефицит массы тела';}
if (index > 16 && index <=  18.5) {result = 'Недостаточная (дефицит) массы тела';}
if (index > 18.5 && index <=  25) {result = 'Норма';}
if (index > 25 && index <=  30) {result = 'Избыточная масса тела (предожирение)';}
if (index > 30 && index <=  35) {result = 'Ожирение 1 степени';}
if (index > 35 && index <=  40) {result = 'Ожирение 2 степени';}
if (index > 40) {result = 'Ожирение 3 степени';}
resultPlaceIndex.innerHTML = index;
resultPlace.innerHTML = result;

}