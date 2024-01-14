// Поле, в якому виводиться вираз
let input = document.querySelector('.input');
// Збереження частини виразу для підняття до ступеня
let power = "";

// Вставити символ
function insert(num) {
    if (input.textContent == 0) {
        // Якщо в полі вже є 0, очистити його перед вставкою нового символу
        input.textContent = "";
        input.textContent += num;
    } else
        // Додати символ до поточного виразу
        input.textContent += num;
}

// Очистити всі поле
function clean() {
    // Повернути поле до початкового значення (0)
    input.textContent = "0";
    power = "";
}

// Видалити символ
function back() {
    let exp = input.textContent;
    // Видалити останній символ з виразу
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        // Якщо весь вираз видалено, встановити значення 0
        input.textContent = "0";
    }
}

// Порахувати вираз
function equal() {
    let exp = input.textContent;
    // Підняття до ступеня
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        // Обчислити підняття до ступеня
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        // Обчислення виразу за допомогою функції eval
        input.textContent = eval(exp);
    }
}

// Вирахувати відсотки
function percent() {
    // Обчислити відсотки від поточного виразу
    input.textContent = eval(input.textContent) / 100;
}

// Для додавання констант
function constant(name) {
    if (input.textContent == 0) {
        // Якщо в полі вже є 0, очистити його перед вставкою нової константи
        input.textContent = "";
    }
    // Додавання констант (π або e)
    if (name == "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name == "e")
        input.textContent += Math.E.toFixed(8);
}

// Квадратний корінь, в квадрат в -1 ступені
function operation(name) {
    // Обчислення квадратного кореня, квадрату чи зворотного ступеня
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^-1")
        input.textContent = Math.pow(eval(input.textContent), -1);
    if (name == "^") {
        // Збереження частини виразу для підняття до ступеня
        power = input.textContent;
        input.textContent += "^";
    }
}

// Факторіал числа
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    // Обчислення факторіалу
    input.textContent = factorial(+eval(input.textContent));
}

// Логарифми
function log(name) {
    // Обчислення логарифмів за основою 10 або натурального логарифму
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
    }
    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);
    }
}

// Перемикання з градусів на радіани
document.querySelector('.type').addEventListener('click', function() {
    // Перемикання між градусами та радіанами
    if (document.querySelector('.type').textContent == "град") {
        this.textContent = "рад";
        console.log('Градуси')
    } else if (document.querySelector('.type').textContent == "рад") {
        this.textContent = "град";
        console.log('Радіани')
    }
})

// Синуси та косинуси
function f(name) {
    // Обчислення синусу, косинусу, тангенсу та котангенсу
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "град") {
            // В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // В радіанах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }        
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "град") {
            // В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // В радіанах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        } 
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "град") {
            // В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // В радіанах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }  
    }
    if (name == 'ctg') {
        if(document.querySelector('.type').textContent == "град") {
            // В градусах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // В радіанах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        } 
    }
}
