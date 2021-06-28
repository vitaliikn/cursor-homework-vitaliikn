const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getScience = (student) => {
    const science = Object.keys(student.subjects).map(item => item[0].toUpperCase() + item.slice(1).replace('_', ' '))
    return science
}
console.log('Ex.1 ', getScience(students[0]))

//2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку

const getAverageMark = (student) => {
    const allStudentMarks = Object.values(student.subjects).flat()
    const sumMarks = allStudentMarks.reduce((previousValue, item) => previousValue + item, 0)
    const result = Number((sumMarks / allStudentMarks.length).toFixed(2))
    return result
}
console.log('Ex.2 ', getAverageMark(students[0]))

//3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).

const getStudentInfo = (student) => {
    const info = { ...student }
    delete info.subjects
    info.averagemark = getAverageMark(student)
    return info
}
console.log('Ex.3 ', getStudentInfo(students[0]))

//4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку

const getStudentsNames = (students) => {
    const studentsNames = students.map(item => item.name).map(item => item[0].toUpperCase() + item.slice(1)).sort()
    return studentsNames
}
console.log('Ex.4 ', getStudentsNames(students))

//5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (students) => {

    let marksArray = students.map(item => Object.values(item.subjects).flat()).map(item => {
        let sum = 0
        for (let i = 0; i < item.length; i++) {
            sum += item[i]
        }
        return sum / item.length
    })
    const maxMarks = Math.max.apply(null, marksArray)

    return students[marksArray.indexOf(maxMarks)].name
}
console.log('Ex.5 ', getBestStudent(students))

//6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const getCalculateWordLetters = (string) => {
    const newArray = string.split('').reduce((previousValue, item) => {
        previousValue[item] = (previousValue[item] || 0) + 1;
        return previousValue;
    }, {})
    return newArray
}
console.log('Ex.6 ', getCalculateWordLetters('testtsee'))