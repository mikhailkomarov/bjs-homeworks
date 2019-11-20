'use strict'

// Задача №1

class Weapon {
	constructor({name, attack, durability, range}) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.initDurability = this.durability;
	}

	// Метод takeDamage добавляет повреждение от соперника
	takeDamage(damage) {
		this.durability -= damage;
		if (this.durability < 0) {
			this.durability = 0;
		}
	}

	// Метод рассчитывает урон от удара данного оружия
	getDamage() {
		let percent = 0.3;
		if (this.durability >= (this.initDurability * percent)) {
			return this.attack;
		} else if (this.durability <= 0) {
			return 0;
		} else if (this.durability <= (this.initDurability * percent)) {
			return this.attack / 2;
		}
	} 

	// Метод показывает сломано ли оружие
	isBroken() {
		if (this.durability === 0) {
			return true;
		}
		return false;
	}
}


//Задача №2

// Класс 'Рука' наследник класса 'Оружие'
class Arm extends Weapon {
constructor() {
		super({name:'Рука', attack: 1, durability: Infinity, range: 1});
	}
}
// Класс 'Лук' наследник класса 'Оружие'
class Bow extends Weapon {
	constructor() {
		super({name: 'Лук', attack: 10, durability: 200, range: 3});
	}
}
// Класс 'Меч' наследник класса 'Оружие'
class Sword extends Weapon {
	constructor() {
		super({name: 'Меч', attack: 25, durability: 500, range: 1});
	}
}
// Класс 'Нож' наследник класса 'Оружие'
class Knife extends Weapon {
	constructor() {
		super({name: 'Нож', attack: 5, durability: 300, range: 1});
	}
}
// Класс 'Посох' наследник класса 'Оружие'
class Staff extends Weapon {
	constructor() {
		super({name: 'Посох', attack: 8, durability: 300, range: 2});
	}
}


// Класс 'Длинный лук' наследник класса 'Лук'
class LongBow extends Bow {
	constructor() {
		super();
		this.name = 'Длинный лук'; 
		this.attack = 15;
		this.range = 4;
	}
}
// Класс 'Секира' наследник класса 'Меч'
class Axe extends Sword {
	constructor() {
		super();
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
	}
}
// Класс 'Посох Бури' наследник класса 'Посох'
class StormStaff extends Staff {
	constructor() {
		super();
		this.name = 'Посох бури';
		this.attack = 10;
		this.range = 3;
	}
}


//Задача №3

class StudentLog {
	constructor(studentName) {
		this.studentName = studentName;
		this.subjects = {};
	}
	// Метод возвращает имя ученика
	getName() {
		return this.studentName;
	}
	// Метод который вносит оценку по предмету
	addGrade(grade, subject) {
		if (typeof Number(grade) === 'number' && Number(grade) <= 5 && Number(grade) >= 1) { 
			if (this.subjects[subject] !== undefined) {
				this.subjects[subject].push(grade);
			} else {
				this.subjects[subject] = [grade];
			}
			return this.subjects[subject].length;
		} else {
			console.log(`Вы пытались поставить оценку: ${grade}, по предмету: ${subject}. Допускаются числа от: 1 до 5.`);
			return 0;
		}
	}
	// Метод вычисляющий среднюю оценку по названию предмета
	getAverageBySubject(subject) {
		let totalGrade = 0; // Переменная хранящая сумму оценок по предмету
		let getSubject = this.subjects[subject]; // Переменная хранящая оценки по предмету

		if (getSubject !== undefined) {
			for (let i = 0; i < getSubject.length; i++) {
				totalGrade += getSubject[i];
			}
			return totalGrade / getSubject.length;
		} else {
			return 0;
		}
	}
	// Метод вычисляющий среднюю оценку по всем предметам
	getTotalAverage() {
		let averageMarks; // Переменная в которую будут передаваться средние оценки по предметам
		let newSubjects = this.subjects; // Переменная хранящая объект с предметами в качестве ключа и оценками в качестве значений
		let sumMarks = 0; // Переменная хранящая значение суммы всех средних оценок по предметам
		let amountMarks = 0; // Переменная хранящая количество оценок

		// Циклом проходим по объекту с предметами и оценками. Считаем среднюю оценку по каждому предмету и вычисляем среднюю оценку по всем предметам
		for (let key in newSubjects) {
			amountMarks += 1;
			averageMarks = this.getAverageBySubject(key);
			sumMarks += averageMarks;
		}
		// Делаем проверку, если сумма оценок не равна нулю, то возвращаем среднюю оценку по всем предметам, иначе возвращаем ноль
		if (sumMarks !== 0) {
			return sumMarks / amountMarks;
		} else {
			return 0;
		}
	} 
}


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

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bowWeapon = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bowWeapon.takeDamage(20);
console.log(bowWeapon.durability); // 180

bowWeapon.takeDamage(200);
console.log(bowWeapon.durability); // 0

console.log(bowWeapon.durability); // 0
console.log(bowWeapon.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bowWeapon.durability); // 0
console.log(bowWeapon.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false



const bow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

const axe = new Axe();

console.log(axe.name); // Секира
console.log(axe.attack); // 27
console.log(axe.durability); // 800
console.log(axe.range); // 1

const stormStaff = new StormStaff();

console.log(stormStaff.name); // Посох бури
console.log(stormStaff.attack); // 10
console.log(stormStaff.durability); // 300
console.log(stormStaff.range); // 3


const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));
console.log(log.addGrade(4, 'geometry')); 

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3,5
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 4