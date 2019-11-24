'use strict'

// Задача №1
console.log('Задача №1\n');

const compareArrays = (arr1, arr2) => arr1.length === arr2.length &&
  arr1.every((num, i) => num === arr2[i]);

	const mas1 = [1, 2, 3];
	const mas2 = [1, 2];
	console.log(compareArrays(mas1, mas2));

console.log('\n---------------------------------------------\n');

// Задача №2
console.log('Задача №2\n');

const memoize = (fn, limit) => {
  const results = [];

  return function () {
    const argFunction = Array.from(arguments); 

    let elCheck = results.find(result => compareArrays(result.args, argFunction));
    if (elCheck) {
      return `Результат из памяти: ${elCheck.result}`;
    }

    results.push({
      args: argFunction,
      result: fn(...argFunction),
    });

    if (results.length > limit) {
      results.shift();
    }

    return `Вычисляем результат: ${results[results.length - 1].result}`;
  }
};

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); // 2 результата хранятся в памяти
// Вызов этих функций даёт один и тот же результат
console.log(sum( 3, 4 )); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum( 3, 4 )); // 7

console.log(mSum( 3, 4 ));


console.log('\n---------------------------------------------\n');

