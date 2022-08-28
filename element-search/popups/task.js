const modal_main = document.getElementById('modal_main');
modal_main.classList.add('modal_active');

const modal__close = document.getElementsByClassName('modal__close');
const modal_success = document.getElementById('modal_success');
for (let i = 0; i < modal__close.length; i++) {
    modal__close.item(i).onclick = () => {
        modal_main.classList.remove('modal_active');
        modal_success.classList.remove('modal_active');
    };
}

const show_success = document.getElementsByClassName('show-success').item(0);
show_success.onclick = () => {
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
};
