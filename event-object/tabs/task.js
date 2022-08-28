let tab = document.getElementsByClassName('tab')
let tab__content = document.getElementsByClassName('tab__content')
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', ()=>{
        if (!tab[i].classList.contains('tab_active')) {
            for (let j = 0; j < tab.length; j++) {
                if (tab[j].classList.contains('tab_active')) {
                    tab[j].classList.remove('tab_active')
                }

                if (tab__content[j].classList.contains('tab__content_active')) {
                    tab__content[j].classList.remove('tab__content_active')
                }
            }
            tab[i].classList.add('tab_active')
            tab__content[i].classList.add('tab__content_active')
        }

    })
}
