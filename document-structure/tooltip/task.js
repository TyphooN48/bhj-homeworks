const hasTooltip = document.getElementsByClassName('has-tooltip')

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].onclick = function () {
        return false
    }
}

function chooserLocation(search_tooltip_active, i) {
    switch (hasTooltip[i].dataset.position) {
        case 'bottom':
            search_tooltip_active.setAttribute('style', `left: ${hasTooltip[i].getBoundingClientRect().left}px; top: ${hasTooltip[i].getBoundingClientRect().bottom}px`)
            break
        case 'top':
            search_tooltip_active.setAttribute('style', `left: ${hasTooltip[i].getBoundingClientRect().left}px; top: ${hasTooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height)}px`)
            break
        case 'left':
            search_tooltip_active.setAttribute('style', `left: ${hasTooltip[i].getBoundingClientRect().left - (tooltip[i].getBoundingClientRect().width)}px; top: ${hasTooltip[i].getBoundingClientRect().top - (tooltip[i].getBoundingClientRect().height / 2 - hasTooltip[i].getBoundingClientRect().height / 2)}px`)
            break
        case 'right':
            search_tooltip_active.setAttribute('style', `left: ${hasTooltip[i].getBoundingClientRect().right}px; top: ${hasTooltip[i].getBoundingClientRect().top - (search_tooltip_active.getBoundingClientRect().height / 2 - hasTooltip[i].getBoundingClientRect().height / 2)}px`)
            break
    }
}

function shower(i) {
    const search_tooltip_active = document.getElementsByClassName('tooltip_active')[0]
    const tooltip = document.querySelectorAll('a.has-tooltip+div.tooltip')

    if (search_tooltip_active && hasTooltip[i].getAttribute('title') == search_tooltip_active.innerHTML) {
        search_tooltip_active.classList.remove('tooltip_active')
    } else {
        if (search_tooltip_active) {
            search_tooltip_active.classList.remove('tooltip_active')
        }
        for (let j = 0; j < tooltip.length; j++) {
            if (hasTooltip[i].getAttribute('title') == tooltip[j].innerHTML) {
                tooltip[j].classList.add('tooltip_active')
            }
        }
    }
}

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', () => {
        hasTooltip[i].setAttribute('data-position', 'bottom')
        hasTooltip[i].outerHTML = hasTooltip[i].outerHTML + `<div class="tooltip">${hasTooltip[i].getAttribute('title')}</div>`
        hasTooltip[i].onclick = function () {
            return false
        };

        shower(i)

        chooserLocation(document.getElementsByClassName('tooltip_active')[0], i)

        hasTooltip[i].addEventListener('click', () => {
            shower(i)
            chooserLocation(document.getElementsByClassName('tooltip_active')[0], i)
        })
    })
}

window.addEventListener('scroll', () => {
    const tooltip_active = document.getElementsByClassName('tooltip_active')[0]
    if (tooltip_active) {
        for (let i = 0; i < hasTooltip.length; i++) {
            if (hasTooltip[i].getAttribute('title') == tooltip_active.innerHTML) {
                chooserLocation(tooltip_active, i)
            }
        }
    }
})