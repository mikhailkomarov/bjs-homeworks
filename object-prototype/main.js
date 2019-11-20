'use strict'

// Задача №1

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now(new Date()); // Переменная хранящая значение текущей даты в милисекундах
    let dateOfBirthday = +new Date(birthday); // Переменная хранящая значение даты рождения пользователя в милисекундах
    console.log(dateOfBirthday);
    let diff = now - dateOfBirthday; // Переменная хранящая значение разницы между текущей датой и датой рождения пользователя в милисекундах
    let age = diff / (1000 * 60 * 60 * 24 * 365.25); // Переменная хранящая в качестве значения возраст пользователя
    return age >= 18 ? true : false;
}


// Задача №2

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr'
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    return sound === undefined ? null : sound;
}


// Задача №3

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }    
}

function getAverageMark(marks) {
    let arrayMarks = []; // Инициализация пустого массива
    let roundedAverage = 0; // Переменная хранящая округленный средний балл ученика
    let sum = 0; // Переменная хранящая сумму всех оценок

    for (let i = 0; i < marks.length; i++) {
        arrayMarks[i] = parseInt(marks[i], 10);
        sum += arrayMarks[i];
    }
    return roundedAverage = Math.round(sum / arrayMarks.length);
}