const product = document.getElementsByClassName('product')
const cart = document.getElementsByClassName('cart')[0]

function saver() {
    let arr = []
    const cart__product = document.getElementsByClassName('cart__product')
    for (let i = 0; i < cart__product.length; i++) {
        arr.push({
            id: cart__product[i].dataset.id,
            src: cart__product[i].getElementsByClassName('cart__product-image')[0].getAttribute('src'),
            count: cart__product[i].getElementsByClassName('cart__product-count')[0].innerHTML
        })
    }
    localStorage.clear()
    localStorage.setItem('first', JSON.stringify(arr))
}

if (localStorage.length != 0 && JSON.parse(localStorage.getItem('first')).length) {
    const arr = JSON.parse(localStorage.getItem('first'))
    for (let i = 0; i < arr.length; i++) {
        cart.getElementsByClassName('cart__products')[0].insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${arr[i].id}"> <img class="cart__product-image" src="${arr[i].src}"> <div class="cart__product-count">${arr[i].count}</div></div>`)
    }

    for (let i = 1; i <= document.getElementsByClassName('cart__product').length; i++) {
        const cart__product_delete = document.getElementsByClassName('cart__product')[document.getElementsByClassName('cart__product').length - i]
        cart__product_delete.addEventListener('click', () => {
            cart__product_delete.remove()
            saver()
            if (document.getElementsByClassName('cart__product').length == 0) {
                cart.setAttribute('style', 'visibility: hidden')
            }
        })
    }
} else {
    cart.setAttribute('style', 'visibility: hidden')
}

for (let i = 0; i < product.length; i++) {
    const product__quantity_value = product[i].getElementsByClassName('product__quantity-value')[0]

    product[i].getElementsByClassName('product__quantity-control_dec')[0].addEventListener('click', () => {
        if (product__quantity_value.innerHTML.trim() != 1) {
            product__quantity_value.innerHTML = product__quantity_value.innerHTML.trim() - 1
        }
    })

    product[i].getElementsByClassName('product__quantity-control_inc')[0].addEventListener('click', () => {
        product__quantity_value.innerHTML = product__quantity_value.innerHTML.trim() + 1
    })

    const cart__products = document.getElementsByClassName('cart__products')[0]
    product[i].getElementsByClassName('product__add')[0].addEventListener('click', () => {
        const cart__product = cart__products.getElementsByClassName('cart__product')
        for (let j = 0; j < cart__product.length; j++) {
            if (product[i].dataset.id == cart__product[j].dataset.id) {
                cart__product[j].getElementsByClassName('cart__product-count')[0].innerHTML = (cart__product[j].getElementsByClassName('cart__product-count')[0].innerHTML - 0) + (product__quantity_value.innerHTML.trim() - 0)
                const location_product = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
                const location_cart__product = cart__products.getElementsByClassName('cart__product-image')[j].getBoundingClientRect()
                const clone = cart__product[j].getElementsByClassName('cart__product-image')[0].cloneNode(true)
                clone.setAttribute('style', `position: absolute; left:${location_product.left}px; top:${location_product.top}px`)

                document.getElementsByClassName('products')[0].appendChild(clone)

                const height = (location_product.top - location_cart__product.top) / 20
                const width = (location_product.left - location_cart__product.left) / 20

                let counter = 0
                let timeId = setInterval(() => {
                    counter++
                    clone.setAttribute('style', `position: absolute; left:${clone.getBoundingClientRect().left - width}px; top:${clone.getBoundingClientRect().top - height}px`)

                    if (counter == 20) {
                        clone.remove()
                        clearInterval(timeId)
                    }
                }, 50)
                break
            }

            if (j == cart__product.length - 1) {
                cart__products.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product[i].dataset.id}"> <img class="cart__product-image" src="${product[i].getElementsByClassName('product__image')[0].getAttribute('src')}"> <div class="cart__product-count">${product__quantity_value.innerHTML.trim()}</div> </div>`)
                const location_product = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
                const location_cart__product = cart__products.getElementsByClassName('cart__product-image')[j + 1].getBoundingClientRect()
                const clone = cart__product[cart__product.length - 1].getElementsByClassName('cart__product-image')[0].cloneNode(true)
                clone.setAttribute('style', `position: absolute; left:${location_product.left}px; top:${location_product.top}px`)

                document.getElementsByClassName('products')[0].appendChild(clone)

                const height = (location_product.top - location_cart__product.top) / 20
                const width = (location_product.left - location_cart__product.left) / 20

                let counter = 0
                let timeId = setInterval(() => {
                    counter++
                    clone.setAttribute('style', `position: absolute; left:${clone.getBoundingClientRect().left - width}px; top:${clone.getBoundingClientRect().top - height}px`)

                    if (counter == 20) {
                        clone.remove()
                        clearInterval(timeId)
                    }
                }, 50)
                break;
            }
        }

        if (cart__product.length == 0) {
            cart.setAttribute('style', 'visibility: visible')
            cart__products.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product[i].dataset.id}"> <img class="cart__product-image" src="${product[i].getElementsByClassName('product__image')[0].getAttribute('src')}"> <div class="cart__product-count">${product__quantity_value.innerHTML.trim()}</div> </div>`)

            const location_product = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
            const location_cart__product = cart__products.getElementsByClassName('cart__product-image')[0].getBoundingClientRect()

            const clone = cart__product[0].getElementsByClassName('cart__product-image')[0].cloneNode(true)
            clone.setAttribute('style', `position: absolute; left:${location_product.left}px; top:${location_product.top}px`)

            document.getElementsByClassName('products')[0].appendChild(clone)

            const height = (location_product.top - location_cart__product.top) / 20
            const width = (location_product.left - location_cart__product.left) / 20

            let counter = 0
            let timeId = setInterval(() => {
                counter++
                clone.setAttribute('style', `position: absolute; left:${clone.getBoundingClientRect().left - width}px; top:${clone.getBoundingClientRect().top - height}px`)

                if (counter == 20) {
                    clone.remove()
                    clearInterval(timeId)
                }
            }, 50)
        }

        const cart__product_delete = document.getElementsByClassName('cart__product')[document.getElementsByClassName('cart__product').length - 1]
        cart__product_delete.addEventListener('click', () => {
            cart__product_delete.remove()
            saver()

            if (cart__product.length == 0) {
                cart.setAttribute('style', 'visibility: hidden')
            }
        })

        saver()
    })
}
