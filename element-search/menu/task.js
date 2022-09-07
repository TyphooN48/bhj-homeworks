const menuLink = document.getElementsByClassName('menu__link');
const menuItem = document.getElementsByClassName('menu__item');

for (let i = 0; i < menuLink.length; i++) {
    menuLink.item(i).onclick = () => {
        for (let j = 0; j < document.querySelectorAll('ul.menu_active').length; j++) {
            document.querySelectorAll('ul.menu_active').item(j).classList.remove('menu_active');
            return false;
        }
        if(menuItem.item(i).querySelector('ul'))
            menuItem.item(i).querySelector('ul').classList.toggle('menu_active');
        return false;
    };
}
