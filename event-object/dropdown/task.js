const dropdown = document.getElementsByClassName('dropdown')
const dropdown__value = document.getElementsByClassName('dropdown__value')
const dropdown__list = document.getElementsByClassName('dropdown__list')

for(let i = 0; i < dropdown__value.length; i++) {
    dropdown__value[i].addEventListener('click', function(){dropdown__list[i].classList.toggle('dropdown__list_active')})
    let dropdown__item = dropdown[i].querySelectorAll('li.dropdown__item')
    let dropdown__link = dropdown[i].querySelectorAll('a.dropdown__link')

    for(let j = 0; j < dropdown__item.length; j++) {
        dropdown__item[j].addEventListener('click', function(){dropdown__value[i].textContent = dropdown__link[j].textContent})
        dropdown__item[j].addEventListener('click', function(){dropdown__list[i].classList.toggle('dropdown__list_active')})
        dropdown__link[j].onclick = function(){return false}
    }
}
