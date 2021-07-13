//1.У стдентів повинні бути наступні властивост

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 5, 5]
        this.dismiss = false;
    }
    //2.Створіть метод this.getInfo()

    get getInfo() {
        return `Student ${this.course} cours, from ${this.university}, ${this.fullName}`;
    }
    //3.Створіть геттер оцінок this.marks
    get getMarks() {
        if (this.dismiss) return null
        return this.marks
    }
    //4.Створіть сеттер оцінок this.marks = 5
    set setMarks(newMark) {
        if (this.dismiss) return null
        return this.marks.push(newMark);
    }
    //5.Створіть метод отримання середнього балу this.getAverageMark()
    get getAverageMark() {
        let averageMarks = this.marks.reduce((a, b) => a + b)
        return averageMarks / this.marks.length
    }
    //6.Створіть метод this.dismiss, який "виключить" студента
    setDismiss() {
        return this.dismiss =true;
        //? this.dismiss = false : this.dismiss = true;
    }
    setRecover(){
        return this.dismiss = false;
    }
}

//Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName,scholarship) {
        super(university, course, fullName)
        this.scholarship = scholarship;
        this.interval = setInterval(this.getScolarShip.bind(this), 5000)
    }

    getScolarShip() {
        
        if (!this.dismiss && this.getAverageMark >= 4) return console.log(`You have got scholarship ${this.scholarship} UAH `)
        return
    }

}

const ostap = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Бендер')
console.log('Task 2 : ',ostap.getInfo)
ostap.setMarks=5
console.log('Task 4 : ',ostap.getMarks)
console.log('Task 5 : ',ostap.getAverageMark)
ostap.setDismiss()

console.log('Task 6 : ',ostap.getMarks)
ostap.setRecover()
console.log('Task 6 : ',ostap.getMarks)


const budgetHarry = new BudgetStudent('Hogwarts', 5, 'Harry Potter',1400)
console.log('New budget student : ',budgetHarry)

