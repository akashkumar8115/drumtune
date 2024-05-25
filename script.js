window.addEventListener('keydown', playSound);
document.querySelectorAll('.drum').forEach(drum => drum.addEventListener('click', () => playSound({ keyCode: drum.dataset.key })));

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => key.classList.remove('playing'), 100);
}
