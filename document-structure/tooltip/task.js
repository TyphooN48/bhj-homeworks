const has_tooltip = document.getElementsByClassName('has-tooltip')

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].onclick = function () {
        return false
    }
}

function chooser_location(search_tooltip_active, i) {
    switch (has_tooltip[i].dataset.position) {
        case 'bottom':
            search_tooltip_active.setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().bottom}px`)
            break
        case 'top':
            search_tooltip_active.setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height)}px`)
            break
        case 'left':
            search_tooltip_active.setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().left - (tooltip[i].getBoundingClientRect().width)}px; top: ${has_tooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height / 2 - has_tooltip[i].getBoundingClientRect().height / 2)}px`)
            break
        case 'right':
            search_tooltip_active.setAttribute('style', `left: ${has_tooltip[i].getBoundingClientRect().right}px; top: ${has_tooltip[i].getBoundingClientRect().top - (search_tooltip_active.getBoundingClientRect().height / 2 - has_tooltip[i].getBoundingClientRect().height / 2)}px`)
            break
    }
}

function shower(i) {
    const search_tooltip_active = document.getElementsByClassName('tooltip_active')[0]
    const tooltip = document.querySelectorAll('a.has-tooltip+div.tooltip')

    if (search_tooltip_active && has_tooltip[i].getAttribute('title') == search_tooltip_active.innerHTML) {
        search_tooltip_active.classList.remove('tooltip_active')
    } else {
        if (search_tooltip_active) {
            search_tooltip_active.classList.remove('tooltip_active')
        }
        for (let j = 0; j < tooltip.length; j++) {
            if (has_tooltip[i].getAttribute('title') == tooltip[j].innerHTML) {
                tooltip[j].classList.add('tooltip_active')
            }
        }
    }
}

for (let i = 0; i < has_tooltip.length; i++) {
    has_tooltip[i].addEventListener('click', () => {
        has_tooltip[i].setAttribute('data-position', 'bottom')
        has_tooltip[i].outerHTML = has_tooltip[i].outerHTML + `<div class="tooltip">${has_tooltip[i].getAttribute('title')}</div>`
        has_tooltip[i].onclick = function () {
            return false
        };

        shower(i)

        chooser_location(document.getElementsByClassName('tooltip_active')[0], i)

        has_tooltip[i].addEventListener('click', () => {
            shower(i)
            chooser_location(document.getElementsByClassName('tooltip_active')[0], i)
        })
    })
}

window.addEventListener('scroll', () => {
    const tooltip_active = document.getElementsByClassName('tooltip_active')[0]
    if (tooltip_active) {
        for (let i = 0; i < has_tooltip.length; i++) {
            if (has_tooltip[i].getAttribute('title') == tooltip_active.innerHTML) {
                chooser_location(tooltip_active, i)
            }
        }
    }
})