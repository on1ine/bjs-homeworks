'use strict'

// Задача №1
console.log('Задача №1\n');

class Weapon {
	constructor(weapon) {
		this.name = weapon.name;
		this.attack = weapon.attack;
		this.durability = weapon.durability;
		this.range = weapon.range;
		this.defaultDurability = this.durability;
	}
	takeDamage(damage) {
		this.durability = this.durability > damage ? this.durability - damage : 0;
	}

	getDamage() {
    if (this.durability === 0) {
			return 0;
		} else if (this.durability >= 0.3 * this.defaultDurability) {
			return this.attack;
		} else {
			return this.attack / 2;
		}
  }

	isBroken() {
		return !this.durability;
	}
}

// ---Пример 1---
console.log('Пример 1\n');

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

// ---Пример 2---
console.log('Пример 2\n');

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

// ---Пример 3---
console.log('Пример 3\n');

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

// ---Пример 4---
console.log('Пример 4\n');

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

// ---Пример 6---

const sworD = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const stuff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

//Усиленное

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});

console.log('\n---------------------------------------------\n');

// Задача №2
console.log('Задача №2\n');

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    });
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    });
  }
}

class SworD extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    });
  }
}

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends SworD {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const newBow = new Bow();
const newArm = new Arm();

console.log(newBow.name);  // Лук
console.log(newBow.attack);  // 10
console.log(newBow.durability);  // 200
console.log(newBow.range);  // 3

newBow.takeDamage(20);
console.log(newBow.durability); // 180

newBow.takeDamage(200);
console.log(newBow.durability); // 0

console.log(newBow.durability); // 0
console.log(newBow.getDamage()); // 0

console.log(newArm.durability); // Infinity
console.log(newArm.getDamage()); // 1


console.log(newBow.durability); // 0
console.log(newBow.isBroken()); // true

console.log(newArm.durability); // Infinity
console.log(newArm.isBroken()); // false

console.log('\n---------------------------------------------\n');

// Задача №3
console.log('Задача №3\n');

class StudentLog {
	constructor(name) {
		this.name = name;
	}
	getName () {
		return this.name;
	}

	subjects = {};

	addGrade(grade, subject) {
    if (!this.subjects[subject]) {
      this.subjects[subject] = [];
    }

    if (![1, 2, 3, 4, 5].includes(grade)) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      return this.subjects[subject].length;
    }

    this.subjects[subject].push(grade);
    return this.subjects[subject].length;
	}
	
	getAverageBySubject(subject) {
    const marks = this.subjects[subject];

    if (marks) {
      const totalMarks = marks.reduce((assessment, mark) => assessment + mark);
      return totalMarks / marks.length;
    } else {
      return 0;
    }
  }

	getTotalAverage() {
    let averageMarks = 0;

    for (const subject in this.subjects) {
      averageMarks += this.getAverageBySubject(subject);
    }

    return averageMarks ? averageMarks / Object.keys(this.subjects).length : 0;
  }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров


console.log(log.addGrade(3, 'algebra')); // 1
console.log(log.addGrade('отлично!', 'math')); // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5. // 0
console.log(log.addGrade(4, 'algebra')); // 2
console.log(log.addGrade(5, 'geometry')); // 1
console.log(log.addGrade(25, 'geometry')); // Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5. // 1

const log1 = new StudentLog('Иван Петров');
console.log(log1.getName())

log1.addGrade(2, 'algebra');
log1.addGrade(4, 'algebra');
log1.addGrade(5, 'geometry');
log1.addGrade(4, 'geometry');

console.log(log1.getAverageBySubject('geometry')); // 4.5
console.log(log1.getAverageBySubject('algebra')); // 3
console.log(log1.getAverageBySubject('math')); // 0

const log2 = new StudentLog('Петр Иванов');
console.log(log2.getName())

log2.addGrade(2, 'algebra');
log2.addGrade(4, 'algebra');
log2.addGrade(5, 'geometry');
log2.addGrade(4, 'geometry');

console.log(log2.getTotalAverage()); // 3,75

console.log('\n---------------------------------------------\n');