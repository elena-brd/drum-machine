window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    const keyCode = document.querySelector('.key-code')

    audio.addCurrentTime = 0;
    if (!audio) {
        return;
    }

    audio.play();
}