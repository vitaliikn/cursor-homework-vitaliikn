let firstNumber = Number(prompt('Enter first integer number'));
while ( firstNumber == '' || !Number.isInteger(firstNumber)) {
    alert('Your number did pass the check,please try again');
    firstNumber = Number(prompt('Enter first integer number'));
}
let secondNumber = Number(prompt('Enter second integer number'))
while (secondNumber == '' ||  !Number.isInteger(secondNumber)) {
    alert('Your number did pass the check,please try again');
    secondNumber = Number(prompt('Enter second integer number'));
}
const minNumber = Math.min(firstNumber, secondNumber);
const maxNumber = Math.max(firstNumber, secondNumber);

let userChoice = confirm('Do you want to miss even numbers ?');
let sum = 0;

    for (i = minNumber; i <= maxNumber; i++) {
        if (i % 2 === 0 && userChoice) {
            continue;
        }
        sum+=i;
    }


document.write('Total count is ',sum)