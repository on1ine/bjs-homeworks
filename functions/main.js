"use strict"

// Задача №1
console.log('Задача №1\n');

function getSolutions( a, b, c ) {
	let d = b ** 2 - 4 * a * c;
	let result = {
		d
	} 
		if (d  === 0) {
			let x1 = -b / (2 * a);
			result.roots = [x1];
		}
		if (d > 0) {
			let x1 = (-b + Math.sqrt(d)) / (2 * a), x2 = (-b - Math.sqrt(d)) / (2 * a);
			result.roots = [x1, x2];
		}
		return result;		
}

// console.log(getSolutions(2, 4, -3));

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.d}`);

	if (result.d === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else if (result.d > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}	else {
		console.log('Уравнение не имеет вещественных корней');
	}
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log('\n---------------------------------------------\n');


// Задача №2
console.log('Задача №2\n');

function getAverageScore(data) {
  const result = {};
  let totalMark = 0;

  for (const lessons in data) {
    const averageMark = getAverageArray(data[lessons]);
    result[lessons] = averageMark;
    totalMark += averageMark;
  }

  result.average = totalMark / Object.keys(data).length;
  return result;
}

function getAverageArray(arr) {
  let totalScore = 0;

  for (let el of arr) {
    totalScore += el;
  }

  return totalScore / arr.length;
}

console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}));


console.log('\n---------------------------------------------\n');


// Задача №3
console.log('Задача №3\n');

function getPersonData(secretData) {
  const result = {};
  
  for (let property in secretData) {
    let newProperty;

    if (property === 'aaa') {
      newProperty = 'firstName';
    } else {
      newProperty = 'lastName';
    }

    result[newProperty] = decrypt(secretData[property]);
  }

  return result;
}

  function decrypt(code) {
    return code ? 'Эмильо' : 'Родриго';
  }

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));

console.log('\n---------------------------------------------\n');