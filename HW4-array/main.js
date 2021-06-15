const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// 1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
const getPairsStudent = (students) => {

    let newArray = []
    newArray.push([students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]]
    )
    return newArray
}
console.log('Ex 1 : ',getPairsStudent(students))

//2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

const getStudentsWithThemse = (themes) => {
    let studentsPairs = getPairsStudent(students);
    let newArray = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        newArray.push([studentsPairs[i].join(" i "), themes[i]])
    }
    return newArray;
}
console.log('Ex 2 : ',getStudentsWithThemse(themes))

//3.Зіставте оцінки(marks) зі студентом(students): 

const getStudentsWithMarks = (students, marks) => {
    let newArray = [];
    for (let i = 0; i < students.length; i++) {
        newArray.push([students[i], marks[i]])
    }
    return newArray
}
console.log('Ex 3 : ',getStudentsWithMarks(students, marks))

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)

const getPairsWithRandomMarks = () => {
    let pairsStudent = getStudentsWithThemse(themes);
    let newArray = [];
    for (let i = 0; i < pairsStudent.length; i++) {
        newArray.push(pairsStudent[i].concat(Math.round(1 + Math.random() * (5 - 1))))
    }
    return newArray
}
console.log('Ex 4 : ',getPairsWithRandomMarks())