function calc() {
let h = +height.value;
let m = +weight.value;
let index = m / h ** 2;
index = Math.round (index * 10) / 10;
resultPlaceIndex.innerHTML = index;

if (index <= 16) {resultPlace = 'Выраженный дефицит массы тела';}
if (index > 16 && index <=  18.5) {resultPlace = 'Недостаточная (дефицит) массы тела';}
if (index > 18.5 && index <=  25) {resultPlace = 'Норма';}
if (index > 25 && index <=  30) {resultPlace = 'Избыточная масса тела (предожирение)';}
if (index > 30 && index <=  35) {resultPlace = 'Ожирение 1 степени';}
if (index > 35 && index <=  40) {resultPlace = 'Ожирение 2 степени';}
if (index > 40) {resultPlace = 'Ожирение 3 степени';}

}