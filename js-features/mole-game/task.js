const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

function getHole(i) {
    let currentHole = document.getElementById(`hole${i}`)
    currentHole.onclick = function() {
        if (currentHole.className.includes('hole_has-mole')) {
            dead.textContent++
            if (dead.textContent >= 10) {
                alert("Победа!")
                location.reload()
            }
        } else {
            lost.textContent++
            if (lost.textContent >= 5) {
                alert("Вы проиграли")
                location.reload()
            }
        }
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i)
}
