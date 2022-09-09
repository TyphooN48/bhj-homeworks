const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(el => {
    const menuSub = el.parentNode.querySelector('.menu_sub');

    el.onclick = () => {

        if (menuSub === null) {
            return
        }

        const arrActivEl = Array.from(menuSub.classList);

        let arr = Array.from(document.querySelectorAll('.menu_sub'));
        arr.forEach(el => { el.classList.remove('menu_active') });

        event.preventDefault();

        if (arrActivEl.includes('menu_active')) {
            let arrActivEll = Array.from(document.querySelectorAll('.menu_sub'));
            arrActivEll.forEach(el => { el.classList.remove('menu_active') });
        } else {
            menuSub.classList.add('menu_active');
        }
    }
})
