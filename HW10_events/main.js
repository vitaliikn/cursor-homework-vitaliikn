const keys = document.querySelector('.wrapper')
const buttons = document.querySelectorAll("div")
const audio = document.querySelectorAll("audio")
function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

}
keys.addEventListener('click', e => {
    audio.forEach(s => {
        if (s.className == e.target.id) {
            buttons.forEach(b => {
                if (b.id == e.target.id) {
                    b.classList.add("sound")
                }
            })
            s.play()
        }
        s.currentTime = 0
    })
})
window.addEventListener('keydown', playSound);