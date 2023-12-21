"use strict"
// задания с 1-14
// №1
let GeometryFunctions = {
    Square: () => {
        let side = parseFloat(document.querySelectorAll('#squareSide').value);
        let area = side * side;
        let perimeter = 4 * side;
        document.querySelectorAll('#squareResult').innerText = `Площадь: ${area}, Периметр: ${perimeter}`;
    },

    Rectangle: () => {
        let length = parseFloat(document.querySelectorAll('#rectangleLength').value);
        let width = parseFloat(document.querySelectorAll('#rectangleWidth').value);
        let area = length * width;
        let perimeter = 2 * (length + width);
        document.querySelectorAll('#rectangleResult').innerText = `Площадь: ${area}, Периметр: ${perimeter}`;
    },

    Circle: () => {
        let radius = parseFloat(document.querySelectorAll('#circleRadius').value);
        let area = Math.PI * radius * radius;
        let circumference = 2 * Math.PI * radius;
        document.querySelectorAll('#circleResult').innerText = `Площадь: ${area}, Длина окружности: ${circumference}`;
    },

    Triangle: () => {
        let a = parseFloat(document.querySelectorAll('#triangleSideA').value);
        let b = parseFloat(document.querySelectorAll('#triangleSideB').value);
        let c = parseFloat(document.querySelectorAll('#triangleSideC').value);
        let perimeter = (a + b + c) / 2;
        let area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
        document.querySelectorAll('#triangleResult').innerText = `Площадь: ${area}`;
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GeometryFunctions;
}
// №3
let game = document.getElementById('game');
let hiddenCells = [];
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.classList.add('hidden');
        cell.addEventListener('click', function() {
            if (hiddenCells.includes(cell)) {
                cell.classList.remove('hidden');
                cell.classList.add('found');
                hiddenCells.splice(hiddenCells.indexOf(cell), 1);
                if (hiddenCells.length === 0) {
                    alert('Вы выиграли!');
                }
            }
        });
        row.appendChild(cell);
    }
    game.appendChild(row);
}
let cells = Array.from(game.getElementsByTagName('td'));
while (hiddenCells.length < 10) {
    let randomCell = cells[Math.floor(Math.random() * cells.length)];
    if (!hiddenCells.includes(randomCell)) {
        hiddenCells.push(randomCell);
    }
}

// №4
let game = document.getElementById('game');
let timerElement = document.getElementById('timer');
let hiddenCells = [];
let timer;

function startGame() {
    game.innerHTML = '';
    hiddenCells = [];
    if (timer) {
        clearInterval(timer);
    }

    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('td');
            cell.classList.add('hidden');
            cell.addEventListener('click', function() {
                if (hiddenCells.includes(cell)) {
                    cell.classList.remove('hidden');
                    cell.classList.add('found');
                    hiddenCells.splice(hiddenCells.indexOf(cell), 1);
                    if (hiddenCells.length === 0) {
                        clearInterval(timer);
                        alert('Вы выиграли!');
                    }
                }
            });
            row.appendChild(cell);
        }
        game.appendChild(row);
    }

    let cells = Array.from(game.getElementsByTagName('td'));
    while (hiddenCells.length < 5) {
        let randomCell = cells[Math.floor(Math.random() * cells.length)];
        if (!hiddenCells.includes(randomCell)) {
            hiddenCells.push(randomCell);
        }
    }

    // Начать таймер
    let timeLeft = 60;
    timerElement.textContent = 'Оставшееся время: ' + timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = 'Оставшееся время: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Время вышло! Вы проиграли.');
        }
    }, 1000);
}

// №5
let screenType = document.getElementById('screenType');
let screenKeyboard = document.getElementById('screenKeyboard');
let screenKeyboardShow = document.getElementById('screenKeyboardShow');
let capsLockActivated = false;

function show() {
    if (screenKeyboard.style.display === 'none') {
        screenKeyboard.style.display = "block";
    } else {
        screenKeyboard.style.display = "none";
    }
}

function addLetter(letter) {
    if (letter === 'Backspace') {
        let currentValue = screenType.value;
        screenType.value = currentValue.slice(0, -1);
    } else {
        if (capsLockActivated) {
            letter = letter.toUpperCase();
        }
        screenType.value += letter;
    }
}

function toggleCapsLock() {
    capsLockActivated = !capsLockActivated;
    let capsLockButton = document.querySelector('.key:last-child');
    capsLockButton.classList.toggle('capsLockOn');
}

screenType.addEventListener('input', function() {
    if (capsLockActivated) {
        this.value = this.value.toUpperCase();
    }
});


// №6
let date = new Date();
let daysElement = document.getElementById('days');
let monthAndYearElement = document.getElementById('monthAndYear');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

function updateCalendar() {
    daysElement.innerHTML = '';
    let month = date.getMonth();
    let year = date.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        if (new Date().toDateString() === new Date(year, month, i).toDateString()) {
            li.classList.add('today');
        }
        daysElement.appendChild(li);
    }
    monthAndYearElement.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
}

prevButton.addEventListener('click', function() {
    date.setMonth(date.getMonth() - 1);
    updateCalendar();
});

nextButton.addEventListener('click', function() {
    date.setMonth(date.getMonth() + 1);
    updateCalendar();
});

updateCalendar();

// №7
let tagDescriptions = {
    "a": "Тег <a> является якорем или ссылкой, создающей гиперссылки.",
    "abbr": "Тег <abbr> представляет сокращение или аббревиатуру.",
    "address": "Тег <address> используется для определения контактной информации.",
    "article": "Тег <article> представляет независимую часть содержания страницы.",
    "aside": "Тег <aside> представляет содержание, которое относится к контенту, но не является его основной частью.",
    "b": "Тег <b> представляет текст, который должен быть отображен полужирным шрифтом.",
    "blockquote": "Тег <blockquote> представляет цитату из другого источника.",
    "cite": "Тег <cite> определяет название книги, фильма, музыкальной композиции или другого произведения.",
    "code": "Тег <code> используется для представления фрагмента кода.",
    "datalist": "Тег <datalist> определяет список предварительно определенных вариантов для элемента <input> с типом text.",
    "em": "Тег <em> выделяет текст как ударение.",
    "figcaption": "Тег <figcaption> представляет заголовок для элемента <figure>.",
    "footer": "Тег <footer> определяет нижнюю часть документа или раздела.",
    "header": "Тег <header> представляет верхнюю часть документа или раздела.",
    "i": "Тег <i> обозначает текст, который должен быть отображен курсивом.",
    "main": "Тег <main> определяет основное содержание документа.",
    "mark": "Тег <mark> отмечает текст как выделенный или подчеркнутый для акцента.",
    "nav": "Тег <nav> представляет навигационные ссылки.",
    "ol": "Тег <ol> создает нумерованный список.",
    "progress": "Тег <progress> представляет прогресс выполнения задачи.",
    "q": "Тег <q> определяет короткую цитату."
};

function getTagDescription(tagName) {
    return tagDescriptions[tagName.toLowerCase()] || "Такой тег не найден.";
}

// Обработка нажатия клавиши Enter
document.getElementById('tagInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let tagInput = document.getElementById('tagInput');
        let tagDescription = document.getElementById('tagDescription');
        let tagName = tagInput.value.trim().toLowerCase();
        let description = getTagDescription(tagName);

        tagDescription.textContent = description;
        tagInput.value = '';
    }
});

// №8
let input = document.getElementById('input');
let table = document.getElementById('table');

let events = [
    {year: 2000, date: '01.01.2000', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2000, date: '02.02.2000', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2001, date: '01.01.2001', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2001, date: '02.02.2001', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2002, date: '01.01.2002', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2002, date: '02.02.2002', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2003, date: '01.01.2003', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2003, date: '02.02.2003', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2004, date: '01.01.2004', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2004, date: '02.02.2004', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2005, date: '01.01.2005', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2005, date: '02.02.2005', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2006, date: '01.01.2006', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2006, date: '02.02.2006', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2007, date: '01.01.2007', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2007, date: '02.02.2007', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2008, date: '01.01.2008', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2008, date: '02.02.2008', name: 'Событие 6', description: 'Описание события 6'},
    {year: 2009, date: '01.01.2009', name: 'Событие 1', description: 'Описание события 1'},
    {year: 2009, date: '02.02.2009', name: 'Событие 2', description: 'Описание события 2'},
    {year: 2010, date: '01.01.2010', name: 'Событие 3', description: 'Описание события 3'},
    {year: 2010, date: '02.02.2010', name: 'Событие 4', description: 'Описание события 4'},
    {year: 2011, date: '01.01.2011', name: 'Событие 5', description: 'Описание события 5'},
    {year: 2011, date: '02.02.2011', name: 'Событие 6', description: 'Описание события 6'},
];

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let year = input.value;
        let yearEvents = events.filter(event => event.year == year);
        if (yearEvents.length > 0) {
            table.innerHTML = '';
            for (let event of yearEvents) {
                let row = document.createElement('tr');
                row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
                table.appendChild(row);
            }
        } else {
            alert('Нет событий для этого года');
        }
    }
});

// №9
function getHoroscope() {
    let birthdate = document.getElementById("birthdate").value;
    let selectedDate = document.querySelector('input[name="date"]:checked').value;

    let zodiacSign = determineZodiacSign(birthdate);
    let horoscope = generateHoroscope(zodiacSign, selectedDate);

    let horoscopeResult = document.getElementById("horoscopeResult");
    horoscopeResult.innerHTML = `<p>Гороскоп для ${zodiacSign} на ${selectedDate}: ${horoscope}</p>`;
}

function determineZodiacSign(birthdate) {
    let date = new Date(birthdate);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Козерог";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Водолей";
    } else {
        return "Рыбы";
    }
}
function generateHoroscope(zodiacSign, selectedDate) {
    let horoscopes = {
        "Овен": {
            "today": "Сегодня у вас будет активный день, полный энергии. Будьте осторожны в принятии решений.",
            "tomorrow": "Завтра подойдет для новых начинаний. Возможно, стоит обратить внимание на свои цели.",
            "dayAfterTomorrow": "Послезавтра принесет невероятные возможности. Будьте готовы к неожиданным событиям."
        },
        "Телец": {
            "today": "Сегодня будет спокойным и продуктивным днем. Используйте время для размышлений.",
            "tomorrow": "Завтра будет хорошее время для общения с близкими. Помните о важных взаимоотношениях.",
            "dayAfterTomorrow": "Послезавтра будет благоприятным для деловых начинаний."
        },
        "Близнецы": {
            "today": "Сегодня будет день перемен и возможностей. Будьте готовы к новым идеям.",
            "tomorrow": "Завтра подойдет для обучения и изучения чего-то нового.",
            "dayAfterTomorrow": "Послезавтра может прийти время для планирования будущих целей."
        },
        "Рак": {
            "today": "Сегодня у вас будет активный день, полный энергии. Будьте осторожны в принятии решений.",
            "tomorrow": "Завтра подойдет для новых начинаний. Возможно, стоит обратить внимание на свои цели.",
            "dayAfterTomorrow": "Послезавтра принесет невероятные возможности. Будьте готовы к неожиданным событиям."
        },
        "Лев": {
            "today": "Сегодня будет спокойным и продуктивным днем. Используйте время для размышлений.",
            "tomorrow": "Завтра будет хорошее время для общения с близкими. Помните о важных взаимоотношениях.",
            "dayAfterTomorrow": "Послезавтра будет благоприятным для деловых начинаний."
        },
        "Дева": {
            "today": "Сегодня будет день перемен и возможностей. Будьте готовы к новым идеям.",
            "tomorrow": "Завтра подойдет для обучения и изучения чего-то нового.",
            "dayAfterTomorrow": "Послезавтра может прийти время для планирования будущих целей."
        },
        "Весы": {
            "today": "Сегодня у вас будет активный день, полный энергии. Будьте осторожны в принятии решений.",
            "tomorrow": "Завтра подойдет для новых начинаний. Возможно, стоит обратить внимание на свои цели.",
            "dayAfterTomorrow": "Послезавтра принесет невероятные возможности. Будьте готовы к неожиданным событиям."
        },
        "Скорпион": {
            "today": "Сегодня будет спокойным и продуктивным днем. Используйте время для размышлений.",
            "tomorrow": "Завтра будет хорошее время для общения с близкими. Помните о важных взаимоотношениях.",
            "dayAfterTomorrow": "Послезавтра будет благоприятным для деловых начинаний."
        },
        "Стрелец": {
            "today": "Сегодня будет день перемен и возможностей. Будьте готовы к новым идеям.",
            "tomorrow": "Завтра подойдет для обучения и изучения чего-то нового.",
            "dayAfterTomorrow": "Послезавтра может прийти время для планирования будущих целей."
        },
        "Козерог": {
            "today": "Сегодня у вас будет активный день, полный энергии. Будьте осторожны в принятии решений.",
            "tomorrow": "Завтра подойдет для новых начинаний. Возможно, стоит обратить внимание на свои цели.",
            "dayAfterTomorrow": "Послезавтра принесет невероятные возможности. Будьте готовы к неожиданным событиям."
        },
        "Водолей": {
            "today": "Сегодня будет спокойным и продуктивным днем. Используйте время для размышлений.",
            "tomorrow": "Завтра будет хорошее время для общения с близкими. Помните о важных взаимоотношениях.",
            "dayAfterTomorrow": "Послезавтра будет благоприятным для деловых начинаний."
        },
        "Рыбы": {
            "today": "Сегодня будет день перемен и возможностей. Будьте готовы к новым идеям.",
            "tomorrow": "Завтра подойдет для обучения и изучения чего-то нового.",
            "dayAfterTomorrow": "Послезавтра может прийти время для планирования будущих целей."
        }
    };
}

// №10
let timerElement = document.getElementById('timer');
let textElement = document.getElementById('text');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let predictions = [
    {text: 'Предсказание 1', type: 'good'},
    {text: 'Предсказание 2', type: 'bad'},
];

let timer;

startButton.addEventListener('click', function() {
    startButton.classList.remove('active');
    stopButton.classList.add('active');
    timer = setInterval(function() {
        timerElement.textContent = Math.floor(Math.random() * predictions.length) + 1;
    }, 100);
});

stopButton.addEventListener('click', function() {
    clearInterval(timer);
    let prediction = predictions[timerElement.textContent - 1];
    textElement.textContent = prediction.text;
    textElement.classList.add(prediction.type);
    startButton.style.display = 'none';
    stopButton.style.display = 'none';
});

// №11

let countries = ['Belarus', 'Belgium', 'Bulgaria'];

let input = document.getElementById('elem');
let list = document.getElementById('list');

input.addEventListener('input', function(event) {
    let inputValue = event.target.value.toLowerCase();

    let filteredCountries = countries.filter(country =>
        country.toLowerCase().startsWith(inputValue)
    );
        filteredCountries.forEach(country => {
        let listItem = document.createElement('li');
        listItem.textContent = country;

        listItem.addEventListener('click', function() {
            input.value = country;
            list.style.display = 'none';
        });

        list.appendChild(listItem);
    });

    list.style.display = filteredCountries.length > 0 && inputValue.length > 0 ? 'block' : 'none';
});

// №12
let toggles = document.querySelectorAll(".toggle");

for (let toggle of toggles) {
    toggle.addEventListener("click", function(event) {
        event.preventDefault();
        let spoiler = toggle.parentElement.nextElementSibling;
        spoiler.classList.toggle("active");
    });
}

// №13
let tabsContainers = document.querySelectorAll('#parent');

tabsContainers.forEach(tabsContainer => {
    let tabs = tabsContainer.querySelectorAll('.tab');
    let menuLinks = tabsContainer.querySelectorAll('.menu a');

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            menuLinks.forEach(menuLink => {
                menuLink.classList.remove('active');
            });

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            link.classList.add('active');
            tabs[index].classList.add('active');
        });
    });
});

// №14
let links = document.querySelectorAll(".link a");

for (let link of links) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let tab = link.parentElement.parentElement;
        if (tab.classList.contains("active")) {
            tab.classList.remove("active");
        } else {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
        }
    });
}

// задания с 15-17
// 1 vs 1 
let input = document.getElementById('input');
let submitButton = document.getElementById('submit');
let messageDiv = document.getElementById('message');

let cities = [];
let lastLetter = '';

submitButton.addEventListener('click', function() {
    let city = input.value;
    input.value = '';
    if (cities.length > 0) {
        if (city[0].toLowerCase() !== lastLetter) {
            messageDiv.textContent = 'Первая буква города должна совпадать с последней буквой предыдущего города!';
            return;
        }
        if (cities.includes(city)) {
            messageDiv.textContent = 'Этот город уже был!';
            return;
        }
    }
    cities.push(city);
    lastLetter = city[city.length - 1].toLowerCase();
    messageDiv.textContent = 'Ход принят!';
});

// задания с 15-17
// 1 vs Al
let input = document.getElementById('input');
let submitButton = document.getElementById('submit');
let messageDiv = document.getElementById('message');

let cities = [];
let allCities = ['Архангельск', 'Астана', "Москва"];
let lastLetter = '';

submitButton.addEventListener('click', function() {
    let city = input.value;
    input.value = '';
    if (cities.length > 0) {
        if (city[0].toLowerCase() !== lastLetter) {
            messageDiv.textContent = 'Первая буква города должна совпадать с последней буквой предыдущего города!';
            return;
        }
        if (cities.includes(city)) {
            messageDiv.textContent = 'Этот город уже был!';
            return;
        }
        if (!allCities.includes(city)) {
            messageDiv.textContent = 'Этого города нет в списке!';
            return;
        }
    }
    cities.push(city);
    lastLetter = city[city.length - 1].toLowerCase();
    messageDiv.textContent = 'Ход принят!';

    let robotCity = allCities.find(c => c[0].toLowerCase() === lastLetter && !cities.includes(c));
    if (robotCity) {
        cities.push(robotCity);
        lastLetter = robotCity[robotCity.length - 1].toLowerCase();
        messageDiv.textContent += ' Робот выбрал город ' + robotCity + '.';
    } else {
        messageDiv.textContent += ' Робот не смог найти подходящий город.';
    }
});


// задания с 18-23
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task');
        task.textContent = this.value;
        task.addEventListener('click', function() {
            let text = this.textContent;
            this.textContent = '';

            let edit = document.createElement('input');
            edit.value = text;
            this.appendChild(edit);

            let self = this;
            edit.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    self.textContent = this.value;
                }
            });
        });
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.textContent = 'удалить';
        remove.classList.add('remove');
        remove.addEventListener('click', function() {
            this.parentElement.remove();
        });
        li.appendChild(remove);

        let mark = document.createElement('span');
        mark.textContent = 'сделано';
        mark.classList.add('mark');
        mark.addEventListener('click', function() {
            this.parentElement.classList.add('done');
        });
        li.appendChild(mark);

        list.appendChild(li);

        this.value = '';
    }
});

// задания с 24-29
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function () {
    let tr = document.createElement('tr');
    let nameCell = createCell(tr, name.value, 'name');
    let priceCell = createCell(tr, price.value, 'price');
    let amountCell = createCell(tr, amount.value, 'amount');
    let costCell = createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove');

    table.appendChild(tr);
    recountTotal();
});

function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;

    if (name === 'remove') {
        td.classList.add('remove');
        td.addEventListener('click', function () {
            tr.remove();
            recountTotal();
        });
    } else {
        td.classList.add(name);
        if (name !== 'cost') {
            allowEdit(td);
        }
    }

    tr.appendChild(td);
    return td;
}

function recountTotal() {
    let costCells = document.querySelectorAll('.cost');
    let totalSum = 0;

    costCells.forEach(cell => {
        totalSum += parseFloat(cell.textContent);
    });

    total.textContent = totalSum.toFixed(2);
}

function allowEdit(td) {
    td.addEventListener('dblclick', function () {
        let text = td.textContent;
        td.textContent = '';

        let input = document.createElement('input');
        input.value = text;
        input.focus();
        td.appendChild(input);

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                td.textContent = this.value;

                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let row = td.parentElement;
                    let price = parseFloat(row.querySelector('.price').textContent);
                    let amount = parseInt(row.querySelector('.amount').textContent);

                    if (!isNaN(price) && !isNaN(amount)) {
                        let costCell = row.querySelector('.cost');
                        let cost = price * amount;
                        costCell.textContent = cost.toFixed(2);
                        recountTotal();
                    }
                }
            }
        });
    });
}

// задания с 30-36
// №30
let inputs = document.querySelectorAll('#test input');
let checkButton = document.querySelector('#check');

checkButton.addEventListener('click', function() {
    for (let input of inputs) {
        if (input.value === input.getAttribute('data-right')) {
            input.classList.remove('wrong');
            input.classList.add('right');
        } else {
            input.classList.remove('right');
            input.classList.add('wrong');
        }
    }
});

// №31
let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
];

let button = document.getElementById('button');
let inputs = document.querySelectorAll('#test input');

button.addEventListener('click', function() {
    let correct = true;

    inputs.forEach((input, index) => {
        if (input.value.trim().toLowerCase() !== answers[index]) {
            correct = false;
            return;
        }
    });

    if (correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуйте еще раз.');
    }
});


// №32
let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
    'ответ 4',
];
let questions = [
    'вопрос 1?',
    'вопрос 2?',
    'вопрос 3?',
    'вопрос 4?',
];

let testDiv = document.querySelector('#test');
let button = document.querySelector('#button');

for (let i = 0; i < questions.length; i++) {
    let questionP = document.createElement('p');
    questionP.textContent = questions[i];
    testDiv.appendChild(questionP);

    let answerInput = document.createElement('input');
    answerInput.setAttribute('data-right', answers[i]);
    testDiv.appendChild(answerInput);
}

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.value === input.getAttribute('data-right')) {
            input.classList.remove('wrong');
            input.classList.add('right');
        } else {
            input.classList.remove('right');
            input.classList.add('wrong');
        }
    }
});

// №33
let questionsObj = {
    'Вопрос 1?': 'ответ 1',
    'Вопрос 2?': 'ответ 2',
    'Вопрос 3?': 'ответ 3',
};

let test = document.getElementById('test');
let button = document.getElementById('button');

button.addEventListener('click', function() {
    let correct = true;

    for (let question in questionsObj) {
        let input = test.querySelector(`input[data-question="${question}"]`);
        if (input.value.trim().toLowerCase() !== questionsObj[question]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуйте еще раз.');
    }
});

// №34

let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.checked) {
            if (input.hasAttribute('data-right')) {
                input.classList.remove('wrong');
                input.classList.add('right');
            } else {
                input.classList.remove('right');
                input.classList.add('wrong');
            }
        }
    }
});


// №35
let test = document.querySelectorAll('#test input[type="radio"]');
let answers = [0, 1, 2];

let button = document.getElementById('button');
button.addEventListener('click', function() {
    let questions = document.querySelectorAll('#test div');
    questions.forEach(function(question) {
        let radios = question.querySelectorAll('input[type="radio"]');
        let answered = false;
        radios.forEach(function(radio) {
            if (radio.checked) {
                answered = true;
            }
        });
        if (!answered) {
            alert('Ответьте на все вопросы, пожалуйста.');
            return;
        }

        radios.forEach(function(radio) {
            let parentLabel = radio.parentElement;
            parentLabel.classList.remove('right', 'wrong');
            if (radio.checked && radio.dataset.right !== undefined) {
                parentLabel.classList.add('right');
            } else if (radio.checked && radio.dataset.right === undefined) {
                parentLabel.classList.add('wrong');
            }
        });
    });
});






// №36

let questions = [
    {
        text: 'вопрос 1?',
        right: 0,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 2?',
        right: 1,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 3?',
        right: 2,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
];

let testDiv = document.querySelector('#test');

// Создаем вопросы и варианты ответов
for (let i = 0; i < questions.length; i++) {
    let questionDiv = document.createElement('div');

    let questionP = document.createElement('p');
    questionP.textContent = questions[i].text;
    questionDiv.appendChild(questionP);

    for (let j = 0; j < questions[i].variants.length; j++) {
        let answerLabel = document.createElement('label');

        let answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'question' + i;
        if (j === questions[i].right) {
            answerInput.setAttribute('data-right', '');
        }
        answerLabel.appendChild(answerInput);

        let answerText = document.createTextNode(questions[i].variants[j]);
        answerLabel.appendChild(answerText);

        questionDiv.appendChild(answerLabel);
    }

    testDiv.appendChild(questionDiv);
}

let button = document.querySelector('#button');

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');
    for (let input of inputs) {
        if (input.checked) {
            if (input.hasAttribute('data-right')) {
                input.classList.remove('wrong');
                input.classList.add('right');
            } else {
                input.classList.remove('right');
                input.classList.add('wrong');
            }
        }
    }
});



// задания с 41-46

function start(cells) {
    let i = 0;

    for (let cell of cells) {
        cell.addEventListener('click', function() {
            if (this.textContent === '') {
                this.textContent = i % 2 === 0 ? 'X' : 'O';
                if (isVictory(cells)) {
                    alert(this.textContent + ' - Победитель!');
                } else if (i == 8) {
                    alert('ничья');
                }

                i++;
            }
        });
    }
}

function isVictory(cells) {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let combination of combinations) {
        if (
            cells[combination[0]].textContent == cells[combination[1]].textContent &&
            cells[combination[1]].textContent == cells[combination[2]].textContent &&
            cells[combination[0]].textContent != ''
        ) {
            return true;
        }
    }

    return false;
}

let cells = document.querySelectorAll('#field td');
start(cells);

// задания с 47-51
let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let clicks = 0;

let table = document.getElementById('field');
let clickCounter = document.getElementById('clicks');

function getNextColor(array, color) {
    let index = array.indexOf(color);
    return array[(index + 1) % array.length];
}

function checkWin() {
    let firstCellColor = table.rows[0].cells[0].style.backgroundColor;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(table.rows[i].cells[j].style.backgroundColor !== firstCellColor) {
                return false;
            }
        }
    }
    return true;
}

for(let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    for(let j = 0; j < cols; j++) {
        let cell = document.createElement('td');
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        cell.style.backgroundColor = randomColor;
        cell.addEventListener('click', function() {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = getNextColor(colors, currentColor);
            clicks++;
            clickCounter.textContent = 'Количество кликов: ' + clicks;
            if(checkWin()) {
                alert('Победа!');
            }
        });
        row.appendChild(cell);
    }
    table.appendChild(row);
}


// задания с 52-62
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);

prev.addEventListener('click', function() {
    draw(body, getPrevYear(year, month), getPrevMonth(month));
    updateInfo(getPrevYear(year, month), getPrevMonth(month));
});

next.addEventListener('click', function() {
    draw(body, getNextYear(year, month), getNextMonth(month));
    updateInfo(getNextYear(year, month), getNextMonth(month));
});

function draw(body, year, month) {
    let arr = range(getLastDay(year, month));
    let firstWeekDay = getFirstWeekDay(year, month);
    let lastWeekDay = getLastWeekDay(year, month);
    let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
    createTable(body, nums);
}

function createTable(parent, arr) {
    parent.textContent = '';
    let cells = [];

    for (let sub of arr) {
        let tr = document.createElement('tr');

        for (let num of sub) {
            let td = document.createElement('td');
            td.textContent = num;
            tr.appendChild(td);

            cells.push(td);
        }

        parent.appendChild(tr);
    }

    return cells;
}

function normalize(arr, left, right) {
    for (let i = 0; i < left; i++) {
        arr.unshift('');
    }
    for (var i = 0; i < right; i++) {
        arr.push('');
    }

    return arr;
}

function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1;
    }
}

function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1;
    }
}

function getLastDay(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function range(count) {
    let arr = [];

    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }

    return arr;
}

function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);

    for (let i = 0; i < count; i++) {
        let elems = arr.splice(0, n);
        result.push(elems);
    }

    return result;
}

function getPrevYear(year, month) {
    if (month === 0) {
        return year - 1;
    } else {
        return year;
    }
}

function getNextYear(year, month) {
    if (month === 11) {
        return year + 1;
    } else {
        return year;
    }
}

function getPrevMonth(month) {
    if (month === 0) {
        return 11;
    } else {
        return month - 1;
    }
}

function getNextMonth(month) {
    if (month === 11) {
        return 0;
    } else {
        return month + 1;
    }
}

function updateInfo(year, month) {
    let info = calendar.querySelector('.info');
    let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    let currentMonth = months[month];
    let currentYear = year;
    let displayText = `${currentMonth} ${currentYear}`;

    info.textContent = displayText;
}