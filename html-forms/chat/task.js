const bage = document.getElementsByClassName('chat-widget__side')[0]
const chat = document.getElementsByClassName('chat-widget')[0]
const divMessage = document.getElementById('chat-widget__messages')
const messageArrea = document.getElementsByClassName('chat-widget__messages-container')[0]
const textInput = document.getElementById('chat-widget__input')
const timer = 30000

let timerId

const robotMessage = [
    'Привет!',
    'Отстань!',
    'Я занят',
    'Обратись к другому эксперту',
    'Пока'
]

function autoMessageBot () {
    const now = new Date();
    divMessage.innerHTML += `
    <div class="message">
        <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
        <div class="message__text">Ты где? Вернись!</div>
    </div>
    `
    messageArrea.scrollTop = messageArrea.scrollHeight
}

bage.addEventListener('click', (e) => {
    bage.setAttribute('style', 'display: none;')
    chat.classList.add("chat-widget_active")

    timerId = setTimeout(autoMessageBot, timer)
})

textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && textInput.value !== '') {
        clearTimeout(timerId)

        const now = new Date();
        divMessage.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
                <div class="message__text">` + textInput.value + `</div>
            </div>
        `
        textInput.value = ''
        divMessage.innerHTML += `
            <div class="message">
                <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
                <div class="message__text">` + robotMessage[Math.floor(Math.random() * robotMessage.length)] + `</div>
            </div>
        `
        messageArrea.scrollTop = messageArrea.scrollHeight

        timerId = setTimeout(autoMessageBot, timer)
    }
})