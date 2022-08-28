const slider__dot = document.getElementsByClassName('slider__dot');
function slider(slide) {
    const slider__item = document.getElementsByClassName('slider__item');
    for (let i = 0; i < slider__item.length; i++) {
        if (slider__item.item(i).classList.contains('slider__item_active')) {
            slider__item.item(i).classList.remove('slider__item_active');
        }
        if (slider__dot.item(i).classList.contains('slider__dot_active')) {
            slider__dot.item(i).classList.remove('slider__dot_active');
        }
    }
    slider__item.item(slide).classList.add('slider__item_active');
    slider__dot.item(slide).classList.add('slider__dot_active');
}

for (let i = 0; i < slider__dot.length; i++) {
    slider__dot.item(i).onclick = () => {
        slider(i);
    };
}

document.getElementsByClassName('slider__arrow_next').item(0).onclick = () => {
    const slider__item = document.getElementsByClassName('slider__item');
    for (let i = 0; i < slider__item.length; i++)
    {
        if (slider__item.item(i).classList.contains('slider__item_active')) {
            if (i + 1 == slider__item.length) {
                slider(0);
                break;
            }
            slider(i + 1);
            break;
        }
    }
};

document.getElementsByClassName('slider__arrow_prev').item(0).onclick = () => {
    const slider__item = document.getElementsByClassName('slider__item');
    for (let i = 0; i < slider__item.length; i++) {
        if (slider__item.item(i).classList.contains('slider__item_active')) {
            if (i - 1 == -1) {
                slider(slider__item.length - 1);
                break;
            }
            slider(i - 1);
            break;
        }
    }
}
