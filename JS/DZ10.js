let a, b, i;
let result;

function showResult(result) {
    document.getElementById('result').innerHTML = result;
}

function hashNumber() {
    result = '';
    a = +prompt("Укажите количество повторений:");
    if (isNaN(a) || (a < 0) || (a % 1 !== 0))
        alert("Ошибка в исходных данных!");
    else {
        while (a > 0) {
            result += '#';
            a--;
        }
    }
    showResult(`${result}`);
}

function numbersToZero() {
    i = 0;
    result = '';
    a = +prompt("Введите число:");
    if (isNaN(a))
        alert("Ошибка в исходных данных!");
    else if (a < 0) {
        a = a - a % 1;
        while (a < 0) {
            result += (`${a}, `);
            a++;
        }
    } else {
        a = a - a % 1;
        while (a > 0) {
            result += (`${a}, `);
            a--;
        }
    }
    result += (`0`);
    showResult(`${result}`);
}

function exponentiation() {
    a = +prompt("Введите число:");
    i = +prompt("Введите степень:");
    result = (`${a}^${i} = `);
    if (isNaN(a) || isNaN(i)) {
        alert("Ошибка в исходных данных!");
        result = '';
        b = '';
    } else if (i === 0) {
        b = 1;
    } else if ((i >= 1) && (i % 1 === 0)) {
        b = 1;
        while (i > 0) {
            i--;
            b *= a;
        }
    } else if ((i <= -1) && (i % 1 === 0)) {
        b = 1;
        while (i < 0) {
            i++;
            b /= a;
        }
    } else b = Math.pow(a, i);

    result = (`${result} ${b}`);
    showResult(`${result}`);
}

function commonDivisors() {
    a = +prompt("Введите целое число:");
    b = +prompt("Введите целое число:");
    result = (`Общие делители для ${a} и ${b}: `);
    if (isNaN(a) || isNaN(b) || (a % 1 !== 0) || (b % 1 !== 0)) {
        alert("Ошибка в исходных данных!");
        result = '';
    } else {
        i = 0;
        if (a < 0) a = a * (-1);
        if (b < 0) b = b * (-1);
        while ((i < a) || (i < b)) {
            i++;
            if ((a % i === 0) && (b % i === 0)) result += (`-${i}, ${i}, `);
        }
    }
    showResult(`${result.slice(0, -2)}`);
}

function factorial() {
    a = +prompt("Введите целое неотрицательное число:");
    result = '';
    if (isNaN(a) || (a < 0) || (a % 1 !== 0)) {
        alert("Ошибка в исходных данных!");
    } else if (a === 0) result = (`0! = 1`);
    else {
        i = 0;
        b = 1;
        while (i < a) {
            i++;
            b *= i;
        }
        result = (`${a}! = ${b}`);
    }
    showResult(`${result}`);
}

function mathProblem() {
    do a = +prompt("Решите пример (2 + 2 * 2) и введите ответ:");
    while (a !== 6);
    showResult("Правильный ответ!");
}

function divisionByTwo() {
    a = 1000;
    i = 0;
    do {
        a /= 2;
        i++;
    }
    while (a >= 50);
    showResult(`Число ${a} получено после ${i} делений 1000 на 2`);
}

function multiplesOfNumbers() {
    a = +prompt("Введите число:");
    if (isNaN(a)) {
        alert("Ошибка в исходных данных!");
    } else if ((a < -100) || (a === 0) || (a > 100)) alert(`На интервале от 1 до 100 нет чисел кратных ${a}`);
    else {
        result = (`Числа от 1 до 100 кратные ${a}: `);
        for (i = 1; i <= 100; i++) {
            if (i % a === 0) result += (`${i}, `);
        }
        showResult(`${result.slice(0, -2)}`);
    }
}

function everyFourth() {
    a = +prompt("Введите целое число - минимальное значение диапазона:");
    b = +prompt("Введите целое число - максимальное значение диапазона:");
    if (isNaN(a) || isNaN(b) || (a % 1 !== 0) || (b % 1 !== 0) || (a > b)) {
        alert("Ошибка в исходных данных!");
        result = '';
    } else if ((b - a) < 4) result = "Слишком маленький диапазон  ";
    else {
        result = (`Каждый четвёртый элемент из диапазона [${a};${b}]: `);
        for (i = a; i <= b; i++) {
            if ((i - a) % 4 === 0) result += (`${i}, `);
        }
    }
    showResult(`${result.slice(0, -2)}`);
}

function primeNumber() {
    a = +prompt("Введите целое число:");
    b = 0;
    if (isNaN(a) || (a % 1 !== 0)) {
        alert("Ошибка в исходных данных!");
        result = '';
    } else {
        if (a === 0) {
            result = "0 не является простым числом";
        } else {
            for (i = 1; i <= a; i++) {
                if (a % i === 0) b++;
            }
        }
        if (b === 2) result = (`${a} - простое число`);
        else result = (`${a} - не простое число`);
    }
    showResult(`${result}`);
}