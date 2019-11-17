'use strict';

function initCheckBirthday() {
	const birthday = document.getElementById('birthday').value;

	const result = checkBirthday(birthday) ? "Да" : "Нет";

	document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
	let now = new Date().getTime();
	birthday = new Date(birthday).getTime();
	let diff = (now - birthday);
	let age = diff / 31557600000;
	return age > 18;
}


function initPrintAnimalSound() {
	const animal = {
		sound: 'grrrr',
	};

	const result = getAnimalSound(animal);

	document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
	let sound = animal.sound;
	if (typeof animal === 'undefined') {
		return null;
	} else
		return sound;
}

function initCalculateStatement() {
	for (let idx = 0; idx < 3; idx++) {
		const marks = document.getElementById('learner-' + idx).value.split(',');

		const average = getAverageMark(marks);

		document.getElementById('learner-' + idx + '-average').innerHTML = average;
	}
}

function getAverageMark(marks) {
	let average = 0;

	for (let mark of marks) {
		average += parseFloat(mark);
	}

	let roundedAverage = Math.round(average / marks.length);
	return roundedAverage;
}