"use strict"
//1
let input = document.querySelector('#myInput');
let paragraph = document.querySelector('#myParagraph');

input.addEventListener('blur', function() {
    let inputValue = input.value;
    paragraph.textContent += inputValue;
});

//2
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let resultParagraph = document.querySelector('#resultParagraph');
let calculateButton = document.querySelector('#calculateButton');

calculateButton.addEventListener('click', function() {
    let num1 = Number(input1.value) || 0;
    let num2 = Number(input2.value) || 0;
    let num3 = Number(input3.value) || 0;
    let sum = num1 + num2 + num3;
    resultParagraph.textContent = 'Сумма: ' + sum;
});

//3
let numberInput = document.querySelector('#numberInput');
let digitSumParagraph = document.querySelector('#digitSumParagraph');

numberInput.addEventListener('blur', function() {
    let inputValue = numberInput.value;
    let sum = 0;

    for (let i = 0; i < inputValue.length; i++) {
        sum += Number(inputValue[i]);
    }

    digitSumParagraph.textContent = 'Сумма цифр: ' + sum;
});

//4
let numbersInput = document.querySelector('#numbersInput');
let averageParagraph = document.querySelector('#averageParagraph');

numbersInput.addEventListener('blur', function() {
    let inputValues = numbersInput.value;
    let numbers = inputValues.split(',').map(Number);
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    averageParagraph.textContent = 'Среднее арифметическое: ' + average;
});

//5
let fullNameInput = document.querySelector('#fullNameInput');
let lastNameInput = document.querySelector('#lastNameInput');
let firstNameInput = document.querySelector('#firstNameInput');
let middleNameInput = document.querySelector('#middleNameInput');

fullNameInput.addEventListener('blur', function() {
    let fullName = fullNameInput.value;
    let parts = fullName.split(' ');

    if (parts.length >= 3) {
        lastNameInput.value = parts[0];
        firstNameInput.value = parts[1];
        middleNameInput.value = parts.slice(2).join(' ');
    } else if (parts.length === 2) {
        lastNameInput.value = parts[0];
        firstNameInput.value = parts[1];
        middleNameInput.value = '';
    } else {
        lastNameInput.value = fullName;
        firstNameInput.value = '';
        middleNameInput.value = '';
    }
});

// Задача 6
let formattedFIOInput = document.querySelector('#formattedFIOInput');
formattedFIOInput.addEventListener('blur', () => {
    let fio = formattedFIOInput.value.split(' ');
    for (let i = 0; i < fio.length; i++) {
        fio[i] = fio[i][0].toUpperCase() + fio[i].slice(1);
    }
    formattedFIOInput.value = fio.join(' ');
});

// Задача 7
let wordCountInput = document.querySelector('#wordCountInput');
let resultParagraph7 = document.querySelector('#resultParagraph7');
wordCountInput.addEventListener('blur', () => {
    let text = wordCountInput.value;
    let words = text.split(' ');
    let count = words.length;
    resultParagraph7.textContent = 'Количество слов: ' + count;
});

// Задача 8
let dateFormatInput = document.querySelector('#dateFormatInput');
dateFormatInput.addEventListener('blur', () => {
    let dateParts = dateFormatInput.value.split('.');
    if (dateParts.length === 3) {
        let formattedDate = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
        dateFormatInput.value = formattedDate;
    }
});

// Задача 9
let palindromeInput = document.querySelector('#palindromeInput');
let resultParagraph9 = document.querySelector('#resultParagraph9');
let checkPalindrome = (str) => {
    let cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};
palindromeInput.addEventListener('blur', () => {
    resultParagraph9.textContent = 'Это палиндром: ' + checkPalindrome(palindromeInput.value);
});

// Задача 10
let digitSearchInput = document.querySelector('#digitSearchInput');
let resultParagraph10 = document.querySelector('#resultParagraph10');
digitSearchInput.addEventListener('blur', () => {
    resultParagraph10.textContent = 'Содержит цифру 3: ' + digitSearchInput.value.includes('3');
});

// Задача 11
let numberButton1 = document.querySelector('#numberButton1');
let numberButton2 = document.querySelector('#numberButton2');
let numberButton3 = document.querySelector('#numberButton3');
let paragraphs = document.querySelectorAll('.task p');
let addNumberToParagraph = (index) => {
    paragraphs[index].textContent += ' ' + (index + 1);
};
numberButton1.addEventListener('click', () => {
    addNumberToParagraph(0);
});
numberButton2.addEventListener('click', () => {
    addNumberToParagraph(1);
});
numberButton3.addEventListener('click', () => {
    addNumberToParagraph(2);
});

// Задача 12
let links = document.querySelectorAll('.task a');
links.forEach((link) => {
    link.textContent += ` (${link.href})`;
});

// Задача 13
links.forEach((link) => {
    if (link.href.startsWith('http://')) {
        link.textContent += ' →';
    }
});

// Задача 14
let numberParagraphs = document.querySelectorAll('.numberParagraph');
numberParagraphs.forEach((paragraph) => {
    let number = Number(paragraph.textContent);
    if (!isNaN(number)) {
        paragraph.textContent = 'Квадрат: ' + (number * number);
    }
});

// Задача 15
let dayOfWeekInput = document.querySelector('#dayOfWeekInput');
let resultParagraph15 = document.querySelector('#resultParagraph15');
dayOfWeekInput.addEventListener('blur', () => {
    let dateParts = dayOfWeekInput.value.split('.');
    if (dateParts.length === 3) {
        let day = Number(dateParts[0], 10);
        let month = Number(dateParts[1], 10);
        let year = Number(dateParts[2], 10);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            let date = new Date(year, month - 1, day);
            let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            let dayOfWeek = daysOfWeek[date.getDay()];
            resultParagraph15.textContent = 'День недели: ' + dayOfWeek;
        }
    }
});

// Задача 16
let incrementInput = document.querySelector('#incrementInput');
let incrementButton = document.querySelector('#incrementButton');
let decrementButton = document.querySelector('#decrementButton');
incrementButton.addEventListener('click', () => {
    let value = Number(incrementInput.value, 10);
    if (!isNaN(value)) {
        value++;
        incrementInput.value = value;
    }
});
decrementButton.addEventListener('click', () => {
    let value = Number(incrementInput.value, 10);
    if (!isNaN(value) && value > 0) {
        value--;
        incrementInput.value = value;
    }
});

// Задача 17
let clickParagraphs = document.querySelectorAll('.clickParagraph');
let clickCount = 0;
clickParagraphs.forEach((paragraph) => {
    paragraph.addEventListener('click', () => {
        clickCount++;
        paragraph.textContent = clickCount;
    });
});

// Задача 18
let trimDivs = document.querySelectorAll('.trimDiv');
trimDivs.forEach((div) => {
    let text = div.textContent;
    if (text.length > 10) {
        div.textContent = text.slice(0, 10) + '...';
    }
});

// Задача 19
let randomStringInput = document.querySelector('#randomStringInput');
let generateRandomStringButton = document.querySelector('#generateRandomStringButton');
generateRandomStringButton.addEventListener('click', () => {
    let randomString = Math.random().toString(36).substring(2, 10);
    randomStringInput.value = randomString;
});

// Задача 20
let shuffleInput = document.querySelector('#shuffleInput');
let shuffleButton = document.querySelector('#shuffleButton');
shuffleButton.addEventListener('click', () => {
    let inputText = shuffleInput.value;
    let shuffledText = inputText.split('').sort(() => Math.random() - 0.5).join('');
    shuffleInput.value = shuffledText;
});

// Задача 21
let fahrenheitInput = document.querySelector('#fahrenheitInput');
let convertButton = document.querySelector('#convertButton');
let resultParagraph21 = document.querySelector('#resultParagraph21');
convertButton.addEventListener('click', () => {
    let fahrenheit = Number(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * (5 / 9);
        resultParagraph21.textContent = 'Температура в °C: ' + celsius.toFixed(2);
    }
});

// Задача 22
let factorialInput = document.querySelector('#factorialInput');
let calculateFactorialButton = document.querySelector('#calculateFactorialButton');
let resultParagraph22 = document.querySelector('#resultParagraph22');
let factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
calculateFactorialButton.addEventListener('click', () => {
    let n = Number(factorialInput.value, 10);
    if (!isNaN(n) && n >= 0) {
        let fact = factorial(n);
        resultParagraph22.textContent = 'Факториал: ' + fact;
    } else {
        resultParagraph22.textContent = 'Пожалуйста, введите неотрицательное число';
    }
});

// Задача 23
let aInput = document.querySelector('#aInput');
let bInput = document.querySelector('#bInput');
let cInput = document.querySelector('#cInput');
let calculateRootsButton = document.querySelector('#calculateRootsButton');
let resultParagraph23 = document.querySelector('#resultParagraph23');
calculateRootsButton.addEventListener('click', () => {
    let a = Number(aInput.value);
    let b = Number(bInput.value);
    let c = Number(cInput.value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultParagraph23.textContent = 'Корни уравнения: ' + root1 + ', ' + root2;
        } else if (discriminant === 0) {
            let root = -b / (2 * a);
            resultParagraph23.textContent = 'Уравнение имеет один корень: ' + root;
        } else {
            resultParagraph23.textContent = 'Уравнение не имеет действительных корней';
        }
    } else {
        resultParagraph23.textContent = 'Пожалуйста, введите числа во все инпуты';
    }
});