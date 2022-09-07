const sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
const sliderItems = Array.from(document.getElementsByClassName('slider__item'));

sliderDot.forEach((el, ind) => el.addEventListener('click', () => slide(ind)));
sliderDot[0].classList.add('slider__dot_active');


function slide(slideInd) {
    const currentActiveInd = sliderItems.findIndex(el => el.classList.contains('slider__item_active'));

    sliderItems[currentActiveInd].classList.remove('slider__item_active');
    sliderDot[currentActiveInd].classList.remove('slider__dot_active');

    sliderItems[slideInd].classList.add('slider__item_active');
    sliderDot[slideInd].classList.add('slider__dot_active');

}

document.getElementsByClassName('slider__arrow_next').item(0).onclick = () => {
    let currentInd = sliderItems.findIndex((el) => el.classList.contains('slider__item_active')) + 1;
    slide(currentInd === sliderItems.length ? 0 : currentInd);

};

document.getElementsByClassName('slider__arrow_prev').item(0).onclick = () => {
    let currentInd = sliderItems.findIndex((el) => el.classList.contains('slider__item_active')) - 1;
    slide(currentInd < 0 ? sliderItems.length - 1 : currentInd);

};
