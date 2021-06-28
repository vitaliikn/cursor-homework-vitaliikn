const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 

function getMyTaxes(salary) {
    const taxInCountry = Number((this.tax * salary).toFixed(2));
    return taxInCountry
}
console.log("Task 1 : ", getMyTaxes.call(ukraine, 1500))

//2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary)

function getMiddleTaxes() {
    const middleTaxes = +(this.tax * this.middleSalary).toFixed(2)
    return middleTaxes
}
console.log("Task 2 : ", getMiddleTaxes.call(ukraine))

//3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies)

function getTotalTaxes() {
    const totalTaxes = +(this.tax * this.middleSalary * this.vacancies).toFixed(2)
    return totalTaxes
}
console.log("Task 3 : ", getTotalTaxes.call(ukraine))

//4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд

function getMySalary() {
    const randomSalary = +(Math.random() * (2000 - 1500) + 1500).toFixed(2)
    const taxes = +(randomSalary * this.tax).toFixed(2)
    const profit = randomSalary - taxes
    const mySalary = {
        salary: randomSalary,
        taxes: taxes,
        profit: profit
    }
    return mySalary
}
let myResult = setInterval(() => console.log("Task 4 :", getMySalary.call(ukraine)), 10000)