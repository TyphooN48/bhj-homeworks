const task_input = document.getElementById('task__input')
const tasks__list = document.getElementById('tasks__list')
const tasks_add = document.getElementById('tasks__add')

function saver() {
    localStorage.clear()
    let arr = []
    for (let i = 0; i < tasks__list.getElementsByClassName('task__title').length; i++) {
        arr.push(tasks__list.getElementsByClassName('task__title')[i].outerText)
    }
    if (arr.length) {
        localStorage.setItem('first', arr)
    }
}

if (localStorage.length != 0) {
    const previous_words = localStorage.first.split(',')
    for (let i = 0; i < previous_words.length; i++) {
        tasks__list.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${previous_words[i]} </div> <a href="#" class="task__remove">&times;</a> </div>`)
    }

    for (let i = 0; i < document.getElementsByClassName('task__remove').length; i++) {
        const task__remove_localStorage = document.getElementsByClassName('task__remove')[i]
        const task__localStroage = document.getElementsByClassName('task')[i]
        task__remove_localStorage.addEventListener('click', () => {
            task__localStroage.remove()
            saver()
        });
    }
}

function adder(text) {
    tasks__list.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${text} </div> <a href="#" class="task__remove">&times;</a> </div>`)
    saver()
    const task__remove = document.getElementsByClassName('task__remove')[document.getElementsByClassName('task__remove').length - 1]
    const task = document.getElementsByClassName('task')[document.getElementsByClassName('task').length - 1]
    task__remove.addEventListener('click', () => {
        task.remove()
        saver()
    })
}

task_input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && e.target.value.trim() != '') {
        adder(e.target.value)
        e.target.value = ''
    }
})

tasks_add.onclick = function () {
    return false
}

tasks_add.addEventListener('click', () => {
    if (task_input.value.trim() != '') {
        adder(task_input.value)
    }
    task_input.value = ''
})