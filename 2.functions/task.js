function getArrayParams(...arr) {
  let min = Infinity; //минимальное значение
  let max = -Infinity; //максимальное значение
  let sum = 0; //сумма
  let avg = 0; //среднее
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
    avg = Number(avg);
  }
  return { min: min, max: max, avg: avg };
}

let f = getArrayParams(5);
console.log(f);


function summElementsWorker(...arr) { //функция суммы элементов массива
  if (arr.length == 0) {
    return 0;
  }
  let sum = 0; //сумма
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) { //функция вычисления разницы максимального и минимального элементов
  if (arr.length == 0) {
    return 0;
  }
  let min = arr[0]; //минимальное значение
  let max = arr[arr.length - 1]; //максимальное значение
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
  }
  return (max - min);
}


function differenceEvenOddWorker(...arr) { //функция вычисления разницы сумм чётных и нечётных элементов
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0; //сумма четных элементов
  let sumOddElement = 0; //сумма нечетных элементов
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 == 0) {
       sumEvenElement += arr[i]
     } 
     else {
       sumOddElement += arr[i]
     }
    };
    return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) { //среднее значение чётных элементов
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0; //сумма чётных элементов
  let countEvenElement = 0; //количество чётных элементов
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 == 0) {
       sumEvenElement += arr[i];
       countEvenElement += 1;
     };
    };
  return (sumEvenElement / countEvenElement);
}




function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity; //максимальный результат
  for (let i = 0; i < arrOfArr.length; i++) {
    let res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
