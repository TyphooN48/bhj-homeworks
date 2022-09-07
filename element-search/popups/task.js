const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.getElementsByClassName('modal__close');
const modalSuccess = document.getElementById('modal_success');
for (let i = 0; i < modalClose.length; i++) {
    modalClose.item(i).onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    };
}

const showSuccess = document.getElementsByClassName('show-success').item(0);
showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
