//1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

const getRandomArray = (length, min, max) => {
    min = Math.min(min, max);
    max = Math.max(min, max);
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push([Math.round(min + Math.random() * (max - min))])
    }
    return array;
}
console.log('Ex.1, random array : ', getRandomArray(5, 1, 10))


//3. Cтворіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getAverage = (...numbers) => {
    let sum = 0
    let arrayWithouNoIntegerNumber = numbers.filter(item => Number.isInteger(item))
    sum = arrayWithouNoIntegerNumber.reduce((previousValue, item) => item + previousValue, 0)
    return sum / arrayWithouNoIntegerNumber.length
}
console.log('Ex.3 Average is : ', getAverage(6, 2, 55, 11, 78, 2, 55, 16.5, 77, 57, 87, 23, 2, 56, 3, 2))

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getMedian = (...numbers) => {
    let arrayWithouNoIntegerNumber = numbers.filter(number => Number.isInteger(number)).sort((a, b) => (a - b))
    let halfOfLength = Math.floor(arrayWithouNoIntegerNumber.length / 2)
    return arrayWithouNoIntegerNumber.length % 2 === 0 ?
        (arrayWithouNoIntegerNumber[(halfOfLength - 1)] + arrayWithouNoIntegerNumber[halfOfLength]) / 2
        : arrayWithouNoIntegerNumber[Math.floor(halfOfLength)]
}
console.log('Ex.4 Mediana is ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))


//5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const getFilterEvenNumbers = (...numbers) => {
    const filteredNumbers = numbers.filter(number => number % 2 != 0)
    return filteredNumbers
}
console.log('Ex.5 Filtered numbers : ', getFilterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 3, 2))

//6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

const getCountPositiveNumbers = (...numbers) => {
    const countPositiveNumbers = numbers.filter(number => number > 0)
    return countPositiveNumbers.length
}
console.log('Ex.6 Тumbers greater than 0 :', getCountPositiveNumbers(1, -2, 3, -4, -5, 6))
//7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = (...numbers) => {
    const numbersDividedByFive = numbers.filter(number => number % 5 === 0)
    return numbersDividedByFive;
}
console.log('Ex.7 Numbers divided by 5 : ', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

//9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру

const getDivideByThree = (word) => {
    word = word.toLowerCase()
    const newArray = [];
    for (let i = 0; i < word.length; i += 3) {
        let slog = word.slice(i, i + 3)
        newArray.push(slog)
    }
    return newArray
}
console.log('Ex.9 Word divided to 3 slogs : ', getDivideByThree('abrbabFAFrbab'))

