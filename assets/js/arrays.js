// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
let numbers = [1, 2, 14, 5, 7]

// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
numbers.pop()
numbers.shift()
numbers.unshift(7)
numbers.push(4)

// 2 Вивести розмір масиву.
console.log(numbers.length)

// 3 Зробити копію масиву.
numbers2 = [...numbers]
// console.log(numbers===numbers2)
console.log(numbers)
// 4 Вивести елементи з парними індексами.
for(let i = 2; i<numbers.length; i+=2){
    console.log(numbers[i])
}

// 5 Знайти добуток елементів масиву.
let summary=1;
for(key in numbers){
    summary*=numbers[key]
}
console.log(summary)

// 6 Задано масив з описом телефонів з полями id, brand, model, color, price, RAM, ... (можна обрати будь-яку іншу сутність). Можна згенерувати дані за допомогою ШІ.
// - Сформувати розмітку для карток. (*Застилізувати картки.) 
// - Знайти середню ціну телефонів.


const Product = function(id, brand, model, makeYear, color, RAM, price){
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.makeYear = makeYear;
    this.color = color;
    this.RAM = RAM;
    this.price = price;
}

const phones = [];

const PHONES_COUNT = 20;

for (let i=0; i<PHONES_COUNT; i++){
    phones[i] = new Product(i, Math.random() > 0.5 ? 'Samsung' : 'IPhone', 
    `Series ${Math.trunc(Math.random() * 20)}`, 2015 + Math.trunc(Math.random() * 10), 
    Math.random() > 0.5 ? 'white' : 'black', 
    2 + Math.floor(Math.random() * 6 )*2, 
    5000 + Math.trunc(Math.random() * 7000) );
}
console.table(phones);

const totalSum = phones.reduce((sum, item) => sum + item.price, 0);
let avgPrice = totalSum / phones.length;

// або
// phones.forEach(item => avgPrice += item.price / phones.length)

console.log(avgPrice)

// *Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ (можна спробувати
// накопичити дані в об'єкт вигляду: ключ - обсяг RAM, значення - кількість
// телефонів з цим обсягом RAM).
phonesByRAM = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
}
phones.forEach(item =>{
    if(phonesByRAM.hasOwnProperty(item.RAM)){
        phonesByRAM[item.RAM]++
    }}     
)
// або
// for(item of phones){
//     if(phonesByRAM.hasOwnProperty(item.RAM)){
//         phonesByRAM[item.RAM]++
//     }
// }

console.table(phonesByRAM);
// 8 Отримати новий масив із заданого, який міститиме лише ненульові 
// числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
let numbers3 = [-1, 5, 0, 9, -10]
newNumbers = numbers3.filter(item => item < 0 )
console.log(newNumbers)

// 9 Отримати новий масив їх заданого, який міститиме всі елементи
// вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09,
// 0.3).
let numbers4 = [99, 5, 0, 9, 30]
newNumbers2 = numbers4.map(item => item * 0.01)
console.log(newNumbers2)

// 10 Вивести елементи масиву, зведені у куб. 
numbers3.forEach(item => console.log(item**3))

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
// або видати діагностичне повідомлення, якщо такого елементу не існує. 
let numbers5 = [47, 3, 97, 5, 59, 71]
let index = numbers5.findIndex(item => item ** 2 === 100);

if (index !== -1) {
  numbers5.splice(index, 1);
  console.log(numbers5);
} else {
  console.log("Елемента в масиві не знайдемо.");
}

// 12 *Перевірити, чи всі елементи масиву є парними числами 
console.log(numbers5.every(item => item % 2 === 0 ))
// (* або простими числами).

function isSimple(a){   
    for (i=2; i<a; i++){
        if (a % i === 0){
            return false
        }
    }
    return true
}

console.log(numbers5.every(isSimple))


// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some
console.log(numbers5.some(item => item < 0 ))