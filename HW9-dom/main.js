const wrapper = document.querySelector('.wrapper')

const getRandomColor = () => {
    const r = +Math.random() * 255
    const g = +Math.random() * 255
    const b = +Math.random() * 255
    return (`rgb(${r},${g},${b})`)
}


const getBoxes = () => {
    for (let i = 0; i < 25; i++) {
        const box = document.createElement('div')
        wrapper.appendChild(box)
        box.style.backgroundColor = getRandomColor()
    }
    
}
getBoxes();
const getChangingColor = () => {
    setInterval(() => {
        const boxes = document.querySelectorAll('div');
        for (let box of boxes) {
            box.style.backgroundColor = getRandomColor()
        }
    }, 1000)
}
getChangingColor();

