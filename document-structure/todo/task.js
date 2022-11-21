const taskInput = document.getElementById('task__input')
const tasksList = document.getElementById('tasks__list')
const tasksAdd = document.getElementById('tasks__add')

function saver() {
    localStorage.removeItem('todo')
    let arr = []
    for (let i = 0; i < tasksList.getElementsByClassName('task__title').length; i++) {
        arr.push(tasksList.getElementsByClassName('task__title')[i].outerText)
    }
    if (arr.length) {
        localStorage.setItem('todo', JSON.stringify(arr))
    }
}

if (localStorage.getItem('todo')) {

    const previousWords = JSON.parse(localStorage.getItem('todo'))

    //const previousWords = localStorage.todo.split(',')
    for (let i = 0; i < previousWords.length; i++) {
        tasksList.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${previousWords[i]} </div> <a href="#" class="task__remove">&times;</a> </div>`)
    }

    for (let i = 0; i < document.getElementsByClassName('task__remove').length; i++) {
        const taskRemoveLocalStorage = document.getElementsByClassName('task__remove')[i]
        const taskLocalStroage = document.getElementsByClassName('task')[i]
        taskRemoveLocalStorage.addEventListener('click', () => {
            taskLocalStroage.remove()
            saver()
        });
    }
}

function adder(text) {
    tasksList.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${text} </div> <a href="#" class="task__remove">&times;</a> </div>`)
    saver()
    const taskRemove = document.getElementsByClassName('task__remove')[document.getElementsByClassName('task__remove').length - 1]
    const task = document.getElementsByClassName('task')[document.getElementsByClassName('task').length - 1]
    taskRemove.addEventListener('click', () => {
        task.remove()
        saver()
    })
}
/*
taskInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && e.target.value.trim() != '') {
        adder(e.target.value)
        e.target.value = ''
    }
})
*/
tasksAdd.onclick = function () {
    return false
}

tasksAdd.addEventListener('click', () => {
    if (taskInput.value.trim() != '') {
        adder(taskInput.value)
    }
    taskInput.value = ''
})