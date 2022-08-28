const menu__link = document.getElementsByClassName('menu__link');
const menu__item = document.getElementsByClassName('menu__item');

for (let i = 0; i < menu__link.length; i++) {
    menu__link.item(i).onclick = () => {
        for (let j = 0; j < document.querySelectorAll('ul.menu_active').length; j++) {
            document.querySelectorAll('ul.menu_active').item(j).classList.remove('menu_active');
        }
        menu__item.item(i).querySelector('ul').classList.toggle('menu_active');
        return false;
    };
}
