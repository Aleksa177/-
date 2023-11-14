"use strict"
//474//
const li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
    const a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function (e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    li[i].appendChild(a);
}

const tr = document.getElementsByTagName("tr");

const th = document.createElement('th');
th.textContent = "Удалить";
tr[0].appendChild(th);

for (let i = 1; i < tr.length; i++) {
    const td = document.createElement('td');
    let a = document.createElement('a');
    a.textContent = "Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        const row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    td.appendChild(a);
    tr[i].appendChild(td);
}

//475//

let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; // записываем в инпут текст абзаца

input.addEventListener('input', function() {
    elem.textContent = this.value;
});

let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem1.textContent;

    input.addEventListener('blur', function() {
        elem1.textContent = this.value;
        this.remove();
    });

    elem1.parentElement.appendChild(input);
});

//476//
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = elem2.textContent;

    elem2.textContent = '';
    elem2.appendChild(input);

    input.addEventListener('blur', function() {
        elem2.textContent = this.value;
        elem2.addEventListener('click', func); // повесим событие обратно
    });

    elem2.removeEventListener('click', func);
});

//477//
let li2 = document.querySelectorAll("li");

for (let i = 0; i < li2.length; i++) {
    li2[i].addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}

let td = document.querySelectorAll("td");

for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}

//478//
let p = document.querySelectorAll("#parent3 p");

for (let i = 0; i < p.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    p[i].appendChild(a);

    let span = p[i].querySelector("span");
    span.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}

let p2 = document.querySelectorAll("#parent44 p");

for (let i = 0; i < p.length; i++) {
    let span = document.createElement('span');
    span.textContent = p2[i].textContent;
    p2[i].textContent = '';
    p2[i].appendChild(span);

    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    p2[i].appendChild(a);

    span.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}

//479//
let p3 = document.querySelectorAll("p");

for (let i = 0; i < p3.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Перечеркнуть";
    a.onclick = function(e) {
        e.preventDefault();
        this.previousSibling.style.textDecoration = "line-through";
    }
    p3[i].appendChild(a);
}

let p11 = document.querySelectorAll("p");

for (let i = 0; i < p11.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Перечеркнуть";
    a.onclick = function(e) {
        e.preventDefault();
        this.previousSibling.style.textDecoration = "line-through";
        this.remove();
    }
    p11[i].appendChild(a);
}

let tr1 = document.querySelectorAll("#myTable202 tr");

let th1 = document.createElement('th');
th1.textContent = "Сделать зеленым";
tr1[0].appendChild(th);

for (let i = 1; i < tr1.length; i++) {
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.textContent = "Сделать зеленым";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.parentNode.style.backgroundColor = "green";
    }
    td.appendChild(a);
    tr1[i].appendChild(td);
}

let tr222 = document.querySelectorAll("#myTable222 tr");

let th222 = document.createElement('th');
th222.textContent = "Сделать зеленым";
tr222[0].appendChild(th);

for (let i = 1; i < tr222.length; i++) {
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.textContent = "Сделать зеленым";
    a.onclick = function(e) {
        e.preventDefault();
        if (this.parentNode.parentNode.style.backgroundColor == "green") {
            this.parentNode.parentNode.style.backgroundColor = "";
        } else {
            this.parentNode.parentNode.style.backgroundColor = "green";
        }
    }
    td.appendChild(a);
    tr222[i].appendChild(td);
}

//480//
let eleme = document.querySelector('#eleme');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', function() {
    if (eleme.classList.contains('hidden')) {
        eleme.classList.remove('hidden');
    } else {
        eleme.classList.add('hidden');
    }
});

//481//

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    });
}

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         elems[i].classList.toggle('hidden');
//     });
// }

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         this.previousElementSibling.classList.toggle('hidden');
//     });
// }

//482//
let lil = document.querySelectorAll("#myList56 li");

for (let i = 0; i < lil.length; i++) {
    lil[i].addEventListener('click', function() {
        this.style.backgroundColor = "red";
    });
}

let lil2 = document.querySelectorAll("#myList57 li");

for (let i = 0; i < lil2.length; i++) {
    lil2[i].addEventListener('click', function() {
        if (this.style.backgroundColor == "red") {
            this.style.backgroundColor = "";
        } else {
            this.style.backgroundColor = "red";
        }
    });
}

//483//
let tds = document.querySelectorAll('#table td');

let color = 'color1';
for (let td of tds) {
    td.addEventListener('click', function() {
        if (color == 'color1') {
            color = 'color2'
        } else {
            color = 'color1'
        }

        this.classList.add(color);
    });
}

//484//
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let myList = document.querySelector("#myList484");
let newItem = document.querySelector("#newItem");
let addItem = document.querySelector("#addItem");

let myTable = document.querySelector("#myTable484");
let newName = document.querySelector("#newName");
let newAge = document.querySelector("#newAge");
let newSalary = document.querySelector("#newSalary");
let addEmployee = document.querySelector("#addEmployee");

employees.forEach(function(employee) {
    addListItem(employee.name);
    addTableRow(employee);
});

addItem.addEventListener('click', function() {
    addListItem(newItem.value);
    newItem.value = '';
});

addEmployee.addEventListener('click', function() {
    let employee = {name: newName.value, age: newAge.value, salary: newSalary.value};
    addTableRow(employee);
    newName.value = '';
    newAge.value = '';
    newSalary.value = '';
});

function addListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    myList.appendChild(li);

    li.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });

    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    li.appendChild(a);
}

function addTableRow(employee) {
    let tr = document.createElement('tr');
    myTable.appendChild(tr);

    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    tr.appendChild(tdAge);

    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    tr.appendChild(tdSalary);

    let tdDelete = document.createElement('td');
    let aDelete = document.createElement('a');
    aDelete.textContent = "Удалить";
    aDelete.onclick = function(e) {
        e.preventDefault();
        this.parentNode.parentNode.remove();
    }
    tdDelete.appendChild(aDelete);
    tr.appendChild(tdDelete);

    [tdName, tdAge, tdSalary].forEach(function(td) {
        td.addEventListener('click', function() {
            let input = document.createElement('input');
            input.value = this.textContent;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                this.parentNode.textContent = this.value;
            });
        });
    });
}