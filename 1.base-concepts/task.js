"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d == 0) {
    arr[0] = -b/(2 * a);
  } else if (d > 0) {
	  arr[0] = (-b + Math.sqrt(d)) / (2 * a);
	  arr[1] = (-b - Math.sqrt(d)) / (2 * a);	  
  }
  return arr;
}

let f = solveEquation(2, 5, -3);
console.log('Корни уравнения: ' + f);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent/100/12; //преобразованная процентная ставка
  let s = amount - contribution; //тело кредита = сумма кредита - первоначальный взнос
  let monthlyPayment = s * (p + (p / (((1 + p) ** countMonths) - 1))); //ежемесячный платеж
  let totalAmount = monthlyPayment * countMonths; //общая сумма, которую заплатит клиент
  return totalAmount;
}

let Mortgage = +calculateTotalMortgage(10, 0, 50000, 12).toFixed(2);
console.log ('Общая сумма, которую клиент должен заплатить: ' + Mortgage);