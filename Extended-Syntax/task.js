"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let result = [];

	if (d === 0) {
			result.push((-b + Math.sqrt(d)) / (2 * a));
	} else if (d > 0) {
			result.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	}

	return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log('В массиве больше 5 оценок. Вычисление будет сделано по первым 5-и оценкам');
        marks = marks.slice(0, 5);
    }

    let totalMark = 0;
    for (let mark of marks) {
        totalMark += mark;
    }

    return totalMark / marks.length;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	let age = (new Date().getFullYear()) - dateOfBirthday.getFullYear();

	if (age > 17) {
			return `Не желаете ли олд-фэшн, ${name}?`;
	}
	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}
