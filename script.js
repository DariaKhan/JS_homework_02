/*
Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
*/

let num1 = +prompt ('Введите первое число');
let num2 = +prompt ('Введите второе число');


if (num1 <= 1 && num2 >= 3) {
    alert ('Введенные числа соответствуют условиям');
} else {
    alert ('Введенные числа не соответствуют условиям');
}

/*
Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}
*/

let test = true;
test ? console.log('+++') : console.log('---');

/*
Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/

let day = +prompt ('Введите число месяца от 1 до 31');

if (isNaN(day) || day < 1 || day > 31) {
    alert('Некорректное значение. Введите число от 1 до 31.');
} else if (day <= 10) {
    alert('Первая декада');
} else if (day <= 20) {
    alert('Вторая декада');
} else {
    alert('Третья декада');
}

/*
Задание 4

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число.
*/

let number = +prompt ('Введите любое положительное число');
let units = number % 10; //7
let tens = (number % 100 - units) / 10; //3
let hundreds = (number%1000 - tens*10 - units) / 100;
alert (`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);

