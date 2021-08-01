
//HW2
function getSumm(firstNumber,secondNumber,userChoice) {
    const minNumber = Math.min(firstNumber, secondNumber);
    const maxNumber = Math.max(firstNumber, secondNumber);
    let sum = 0;

    for (let i = minNumber; i <= maxNumber; i++) {
        if (i % 2 === 0 && userChoice) {
            continue;
        }
        sum+=i;
    }
    return sum
}

//Hw3
const getNewName = (oldName) => {
    let newName = oldName[0].toUpperCase() + oldName.slice(1).toLowerCase()
    return newName;
}

//Hw4
const getStudentsWithMarks = () => {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
    const marks = [4, 5, 5, 3, 4, 5];
    let newArray = [];
    for (let i = 0; i < students.length; i++) {
        newArray.push([students[i], marks[i]])
    }
    return newArray
}

//HW5

const getRandomArray = (length, min, max) => {
    min = Math.min(min, max);
    max = Math.max(min, max);
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(min + Math.random() * (max - min)))
    }
    return array;
}

//HW9
const getRandomColor = () => {
    const r = +Math.random() * 255
    const g = +Math.random() * 255
    const b = +Math.random() * 255
    return (`rgb(${r},${g},${b})`)
}

export {getSumm,getNewName,getStudentsWithMarks,getRandomArray,getRandomColor,} 