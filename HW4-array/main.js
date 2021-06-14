const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairsStudent = (students) =>{
    const newArray=[];
    for (let i=0; i<students.length; i++){
newArray.push (students[i]+students[i+2])
    }
    return newArray
}
console.log (getPairsStudent(students))