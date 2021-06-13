//1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

const getMaxDigitNumber = (userNumber) => {

    userNumber = userNumber.toString();
    let maxValue = userNumber[0]
    for (let i = 0; i <= userNumber.length; i++) {
        if (userNumber[i] > maxValue) {
            maxValue = userNumber[i]
        }
    }
    return maxValue;
}
console.log('Max value from user number is ', getMaxDigitNumber(1234562))

//2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const getNumberDegree = (number, degree) => {
    let totalValue = 1;
    for (i = 1; i <= degree; i++) {
        totalValue *= number
    }
    return totalValue
}
console.log('Total value number degree is ', getNumberDegree(10, 10))

//3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const getNewName = (oldName) => {
    let newName = oldName[0].toUpperCase() + oldName.slice(1).toLowerCase()
    return newName;
}

console.log('Name with uppercase later : ', getNewName('iaTvanJs'));

//4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const getClearSalary = (salary) => {
    const tax = 19.5;
    let clearSalary = salary - (salary * tax) / 100;
    return clearSalary;
}

console.log('Your clear salary is ', getClearSalary(1000));

//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
const getRandomNumber = (start, end) => {
    const maxNumber = Math.max(start, end);
    const minNumber = Math.min(start, end)
    let rand = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.round(rand);
}
console.log('Your random number is ', getRandomNumber(-15, 200))

//6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

const getNumberOfLetter = (word, letter) => {
    let count = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === letter) {
            count++
        }
        continue;
    }
    return count;
}
console.log('Your letter repeated ', getNumberOfLetter('wsawwwwwaassadw', 'w'), 'times')

//7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
const getExchangeSum = (sum, currency) => {
    let rate = 25;

    if (currency === 'UAH') {
        exchangeSum = sum / rate;
    }
    else if (currency === '$') {
        exchangeSum = sum * rate;
    }
    return exchangeSum;
}
console.log('Sum after exchanging is ', getExchangeSum(100, 'UAH'))

//8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

const getRandomPassword = (length = 8) => {
    let password = '';
    for (let i = 1; i <= length; i++) {
        password += Math.floor(Math.random() * length)

    }
    return password;
}
console.log('Random password is ',getRandomPassword())

//9.Створіть функцію, яка видаляє всі букви з речення
const getSentenseWithoutLetter = (sentence, letter) => {
    newSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != letter) {
            newSentence += sentence[i];
        }
        continue;
    }
    return newSentence;
}
console.log('New string without selected letter',getSentenseWithoutLetter('asdqewrw fwwww', 'w'))

//10.Створіть функцію, яка перевіряє, чи є слово паліндромом.

const getResultIsPalindrom = (words) => {
    words = words.toLowerCase();
    const newWords = words.split("").reverse().join('');
    let result = '';
    words === newWords ? result = 'Palyndrom' : result = 'not Polyndrom';
    return result;
}
console.log('You phrase is ', getResultIsPalindrom('AwWa'))

//11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

const getSenteсeWithoutRepeatingWords = (sentence) => {
    let newSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        const deleteItem = new RegExp(sentence[i], 'gi');
        if (sentence.match(deleteItem).length <= 1) {
            newSentence += sentence[i]
        }
    }
    return newSentence;
}
console.log("Your new string without duplicat letters : ",getSenteсeWithoutRepeatingWords("Бісквіт був дуже ніжним"))