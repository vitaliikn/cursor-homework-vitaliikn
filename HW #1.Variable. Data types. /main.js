//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)
const firstProduct = 15.678;
const secondProduct = 123.965;
const thirdProduct = 90.2345;
//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(firstProduct, secondProduct, thirdProduct);
console.log('Max price is ' + maxPrice);
//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(firstProduct, secondProduct, thirdProduct);
console.log('Min price is ' + minPrice);
//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sum = firstProduct + secondProduct + thirdProduct;
console.log('sum = ' + sum);
//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const sumAfterRounding = Math.floor(firstProduct) + Math.floor(secondProduct) + Math.floor(thirdProduct);
//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log('sum after rounding = ' + Math.round(sum / 100) * 100);
//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
console.log(sum % 2 === 0)
//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const userMoney = 500;
const change = userMoney - sum;
console.log('Change from money = ' + change);
//Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = Number((sum / 3).toFixed(2));
console.log(averagePrice);
/*(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?*/
const discount = Number((Math.random()).toFixed(2));
const sumWithDiscount = Number((sum * discount).toFixed(2))
console.log('sum with discount = ' + sumWithDiscount);
const profit=(sum / 2 - sumWithDiscount)
console.log('profit = ' + profit);
/*Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:
Максимальна ціна: 9999.99
Мінімальна ціна: 1111.11
Вартість всіх товарів: 1345.66
...і так далі*/
console.log(`Max price: ${maxPrice} 
Min price: ${minPrice}
Sum of all products: ${sum}
Sum after rounding: ${Math.round(sum / 100) * 100}
True or false ? : ${sum % 2 === 0}
Change from 500 UAH: ${change}
Average value : ${averagePrice} `)


