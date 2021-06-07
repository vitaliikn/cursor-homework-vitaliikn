let firstNumber = Number(prompt('Enter first integer number'));
while (firstNumber == '' || firstNumber == NaN || !Number.isInteger(firstNumber)) {
    alert('Your number did pass the check,please try again');
    firstNumber = Number(prompt('Enter first integer number'));
}
let secondNumber = Number(prompt('Enter second integer number'))
while (secondNumber == '' || secondNumber == NaN || !Number.isInteger(secondNumber)) {
    alert('Your number did pass the check,please try again');
    secondNumber = Number(prompt('Enter second integer number'));
}
const minNumber = Math.min(firstNumber, secondNumber);
const maxNumber = Math.max(firstNumber, secondNumber);

let userChoose = confirm('Do you want to miss even numbers ?');
let sum = 0;

if (userChoose == false) {
    for (i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }
}
else if (userChoose == true)
    for (i = minNumber; i <= maxNumber; i++) {
        if (i % 2 == 0) {
            continue;
        }
        else {
            sum += i;
        }
    }


document.write('Total count is ',sum)