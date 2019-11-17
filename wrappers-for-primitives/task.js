'use strict';

function calculateMortgage() {
	let percent = window.percent.value;
	let contribution = window.contribution.value;
	let amount = window.amount.value;
	let date = window.date.value;

	let result = calculateTotalMortgage(percent, contribution, amount, date);
	let span = window.mortageResult;
	span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	let arg = {
		percent,
		contribution,
		amount
	};
	for (let key in arg) {
		if (isNaN(Number(arg[key]))) {
			let result = `Параметр ${key} содержит неправильное значение ${arg[key]}`;
			console.log(result);
			return result;
		}
	}

	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	date = new Date(date);

	let currentDate = new Date();
	let months = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));

	let percentRate = (percent / 100) / 12;
	let monthlyPayment = (amount - contribution) * (percentRate + percentRate / (((1 + percentRate) ** months) - 1));
	return (monthlyPayment * months).toFixed(2);
}

function sayHello() {
	let name = window.personName.value;
	let greeting = getGreeting(name);
	let span = window.helloResult;
	span.textContent = greeting;
}

function getGreeting(name) {
	name = name ? name : 'Аноним';

	let greeting = `Привет, мир! Меню зовут ${name}.`;
	return greeting;
}