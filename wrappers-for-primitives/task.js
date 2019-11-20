'use strict'

// Задача №1

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
  let creditTerms = []; // Инициализация пустого массива

  // Проверка циклом на корректность введенных данных
  for (let i = 0; i < arguments.length - 1; i++) {
    creditTerms[i] = parseInt(arguments[i], 10);
    if (isNaN(arguments[i])) {
      return `Параметр ${i + 1} содержит неправильное значение ${arguments[i]}`;
    }
  }
  
  let S = amount - contribution; // Переменная хранящая сумму, которую необходимо вернуть банку
  let P = (percent / 100) / 12; // Переменная хранящая размер процентной ставки
  let currentDate = new Date(); // Переменная хранящая текущую дату
  let endOfCredit = new Date(date); // Переменная хранящая значение даты окончания кредита
  let n = ((endOfCredit.getMonth() - currentDate.getMonth()) + (12 * (endOfCredit.getFullYear() - currentDate.getFullYear()))); // Коли-во месяцев кредита
  let payment = S * (P + P / (((1 + P) ** n) - 1)); // Переменная хранащая значение суммы ежемесячного платежа
  let totalAmount = (n * payment).toFixed(2); // Переменная хранащая значение общей суммы к оплате
  return totalAmount;
}


// Задача №2

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  if (name == null || name == undefined || name == Number(name)) {
    name = 'Аноним';
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`;
  } else { 
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`;
  }
}      