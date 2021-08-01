const keys = document.querySelector('.wrapper')
const buttons = document.querySelectorAll("div")
const audio = document.querySelectorAll("audio")
function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

}
keys.addEventListener('click', event => {
    audio.forEach(sound => {
        if (sound.className == event.target.id) {
            buttons.forEach(button => {
                if (button.id == event.target.id) {
                    button.classList.add("sound")
                }
            })
            sound.play()
            sound.currentTime = 0
        }
        
    })
})
window.addEventListener('keydown', playSound);