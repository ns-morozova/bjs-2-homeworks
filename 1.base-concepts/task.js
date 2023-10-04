"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    console.log ('Уравнение не имеет корней');
    return false;
  } else if (D == 0) {
    arr[0] = -b/(2 * a);
  } else if (D > 0) {
	  arr[0] = (-b + Math.sqrt(D)) / (2 * a);
	  arr[1] = (-b - Math.sqrt(D)) / (2 * a);	  
  }
  return arr;
}

let f = solveEquation(2, 5, -3);
console.log('Корни уравнения: ' + f);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/100/12; //преобразованная процентная ставка
  let S = amount - contribution; //тело кредита = сумма кредита - первоначальный взнос
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1))); //ежемесячный платеж
  let totalAmount = monthlyPayment * countMonths; //общая сумма, которую заплатит клиент
  return totalAmount;
}

let Mortgage = calculateTotalMortgage(10, 0, 50000, 12).toFixed(2);
console.log ('Общая сумма, которую клиент должен заплатить: ' + Mortgage);