function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();


}

window.addEventListener('keydown', playSound);