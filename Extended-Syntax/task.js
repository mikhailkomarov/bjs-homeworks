'use strict'

//Задача №1

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x1, x2, result; // Переменные хранящие значения x, x1 и x2
    let x = []; // Инициализация пустого массива
    let D = Math.pow(b,2) - 4 * a * c; // Формула дискриминанта 

    // Нахождение корней квадратного уравнения и их вычисление
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        x.push(x1,x2);
        result = `В квадратном уравнении два корня: x₁ = ${x[0]}, x₂ = ${x[1]}`;
        return x = result;
    } else if (D === 0) {
        x1 = -b / (2 * a);
        x.push(x1);
        result = `В квадратном уравнении один корень: x = ${x}`;
        return x = result;
    } else if (D < 0) {
        result = 'В квадратном уравнении корней нет т.к. D < 0';
        return x = result; 
    }
}


// Задача №2

function calculateAverageRating(){
    let marks = window.marks.value.split(" ").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0; // Переменная хранящая сумму всех оценок
    let arrayMarks = []; // Инициализация пустого массива
    let scoreCounter = 5; // Переменная хранящая ограничение на количество введённых оценок

    // Проверяем, если количество введенных оценок больше 5, то выводим эту информацию в консоль и обрезаем массив
    if (marks.length > scoreCounter) {
        console.log(`Количество оценок: ${marks.length}`);
        arrayMarks = marks.slice(0, scoreCounter);
    };

    // С помощью цикла проходим по массиву и складываем все оценки в общую сумму
    for (let i = 0; i < arrayMarks.length; i++) {
        sum += arrayMarks[i];
    };
    return sum / arrayMarks.length; // Вычисляем среднюю оценку
}



//Задача №3

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let currentDate = new Date(); // Инициализация объекта с текущей датой
    let age = currentDate.getFullYear() - dateOfBirthday.getFullYear(); // Переменная хранящая (возраст), результат вычислений даты рождения и текущей даты
    let result;

    if (age >= 18) {
        result = `Ваш возраст: ${age}. Не желаете ли олд-фэшн, ${name}`;
        return result;
    } else {
        result = `Ваш возраст: ${age}. Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        return result;
    }
}