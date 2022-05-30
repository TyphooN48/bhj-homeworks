const divTimer = document.getElementById('timer')

function timerMinus() {
    if (divTimer.textContent <= 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(idInterval)
    } else {
        divTimer.textContent--
    }
}

const idInterval = setInterval(timerMinus, 1000);
