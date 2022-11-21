const product = document.getElementsByClassName('product')
const cart = document.getElementsByClassName('cart')[0]

function saver() {
    let arr = []
    const cartProduct = document.getElementsByClassName('cart__product')
    for (let i = 0; i < cartProduct.length; i++) {
        arr.push({
            id: cartProduct[i].dataset.id,
            src: cartProduct[i].getElementsByClassName('cart__product-image')[0].getAttribute('src'),
            count: cartProduct[i].getElementsByClassName('cart__product-count')[0].innerHTML
        })
    }
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(arr))
}

if (localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length) {
    const arr = JSON.parse(localStorage.getItem('cart'))
    for (let i = 0; i < arr.length; i++) {
        cart.getElementsByClassName('cart__products')[0].insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${arr[i].id}"> <img class="cart__product-image" src="${arr[i].src}"> <div class="cart__product-count">${arr[i].count}</div></div>`)
    }

    for (let i = 1; i <= document.getElementsByClassName('cart__product').length; i++) {
        const cartProductDelete = document.getElementsByClassName('cart__product')[document.getElementsByClassName('cart__product').length - i]
        cartProductDelete.addEventListener('click', () => {
            cartProductDelete.remove()
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
    const productQuantityValue = product[i].getElementsByClassName('product__quantity-value')[0]

    product[i].getElementsByClassName('product__quantity-control_dec')[0].addEventListener('click', () => {
        if (productQuantityValue.innerHTML.trim() != 1) {
            productQuantityValue.innerHTML = Number(productQuantityValue.innerHTML.trim()) - 1
        }
    })

    product[i].getElementsByClassName('product__quantity-control_inc')[0].addEventListener('click', () => {
        productQuantityValue.innerHTML = Number(productQuantityValue.innerHTML.trim()) + 1
    })

    const cartProducts = document.getElementsByClassName('cart__products')[0]
    product[i].getElementsByClassName('product__add')[0].addEventListener('click', () => {
        const cartProduct = cartProducts.getElementsByClassName('cart__product')
        for (let j = 0; j < cartProduct.length; j++) {
            if (product[i].dataset.id == cartProduct[j].dataset.id) {
                cartProduct[j].getElementsByClassName('cart__product-count')[0].innerHTML = (cartProduct[j].getElementsByClassName('cart__product-count')[0].innerHTML - 0) + (productQuantityValue.innerHTML.trim() - 0)
                const locationProduct = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
                const locationCartProduct = cartProducts.getElementsByClassName('cart__product-image')[j].getBoundingClientRect()
                const clone = cartProduct[j].getElementsByClassName('cart__product-image')[0].cloneNode(true)
                clone.setAttribute('style', `position: absolute; left:${locationProduct.left}px; top:${locationProduct.top}px`)

                document.getElementsByClassName('products')[0].appendChild(clone)

                const height = (locationProduct.top - locationCartProduct.top) / 20
                const width = (locationProduct.left - locationCartProduct.left) / 20

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

            if (j == cartProduct.length - 1) {
                cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product[i].dataset.id}"> <img class="cart__product-image" src="${product[i].getElementsByClassName('product__image')[0].getAttribute('src')}"> <div class="cart__product-count">${productQuantityValue.innerHTML.trim()}</div> </div>`)
                const locationProduct = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
                const locationCartProduct = cartProducts.getElementsByClassName('cart__product-image')[j + 1].getBoundingClientRect()
                const clone = cartProduct[cartProduct.length - 1].getElementsByClassName('cart__product-image')[0].cloneNode(true)
                clone.setAttribute('style', `position: absolute; left:${locationProduct.left}px; top:${locationProduct.top}px`)

                document.getElementsByClassName('products')[0].appendChild(clone)

                const height = (locationProduct.top - locationCartProduct.top) / 20
                const width = (locationProduct.left - locationCartProduct.left) / 20

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

        if (cartProduct.length == 0) {
            cart.setAttribute('style', 'visibility: visible')
            cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${product[i].dataset.id}"> <img class="cart__product-image" src="${product[i].getElementsByClassName('product__image')[0].getAttribute('src')}"> <div class="cart__product-count">${productQuantityValue.innerHTML.trim()}</div> </div>`)

            const locationProduct = product[i].getElementsByClassName('product__image')[0].getBoundingClientRect()
            const locationCartProduct = cartProducts.getElementsByClassName('cart__product-image')[0].getBoundingClientRect()

            const clone = cartProduct[0].getElementsByClassName('cart__product-image')[0].cloneNode(true)
            clone.setAttribute('style', `position: absolute; left:${locationProduct.left}px; top:${locationProduct.top}px`)

            document.getElementsByClassName('products')[0].appendChild(clone)

            const height = (locationProduct.top - locationCartProduct.top) / 20
            const width = (locationProduct.left - locationCartProduct.left) / 20

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

        const cartProductDelete = document.getElementsByClassName('cart__product')[document.getElementsByClassName('cart__product').length - 1]
        cartProductDelete.addEventListener('click', () => {
            cartProductDelete.remove()
            saver()

            if (cartProduct.length == 0) {
                cart.setAttribute('style', 'visibility: hidden')
            }
        })

        saver()
    })
}
