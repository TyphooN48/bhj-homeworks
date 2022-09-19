const book = document.getElementById("book")
const fontSize = Array.from(document.querySelectorAll(".font-size"))
const color = Array.from(document.querySelectorAll(".color"))

function resize(element) {
  if (element.className.includes("font-size_small")) {
    book.classList.remove("book_fs-big")
    book.classList.add("book_fs-small")

    element.classList.add("font-size_active")
  } else if (element.className.includes("font-size_big")) {
    book.classList.remove("book_fs-small")
    book.classList.add("book_fs-big")

    element.classList.add("font-size_active")
  } else {
    book.className = "book"

    element.classList.add("font-size_active")
  }
}

function changeFontColor(element) {
  if (element.className.includes("text_color_gray")) {
    book.classList.remove("book_color-whitesmoke")
    book.classList.remove("book_color-black")
    book.classList.add("book_color-gray")

    element.classList.add("color_active")
  }

  if (element.className.includes("text_color_whitesmoke")) {
    book.classList.remove("book_color-black")
    book.classList.remove("book_color-gray")
    book.classList.add("book_color-whitesmoke")

    element.classList.add("color_active")
  }

  if (element.className.includes("text_color_black")) {
    book.classList.remove("book_color-whitesmoke")
    book.classList.remove("book_color-gray")
    book.classList.add("book_color-black")

    element.classList.add("color_active")
  }
}

function changeBgColor(element) {
  if (element.className.includes("bg_color_black")) {
    book.classList.remove("book_bg-white")
    book.classList.remove("book_bg-gray")
    book.classList.add("book_bg-black")

    element.classList.add("color_active")
  }

  if (element.className.includes("bg_color_gray")) {
    book.classList.remove("book_bg-white")
    book.classList.remove("book_bg-black")
    book.classList.add("book_bg-gray")

    element.classList.add("color_active")
  }

  if (element.className.includes("bg_color_white")) {
    book.classList.remove("book_bg-black")
    book.classList.remove("book_bg-gray")
    book.classList.add("book_bg-white")

    element.classList.add("color_active")
  }
}

fontSize.forEach((item) => {
  item.onclick = () => {
    fontSize.forEach((e) => e.classList.remove("font-size_active"))
    resize(item)
    return false
  }
})

color.forEach((item) => {
  item.onclick = () => {
    color.forEach((e) => e.classList.remove("color_active"))

    let parent = item.parentElement

    if (parent.className.includes("book__control_color")) {
      changeFontColor(item)
    }

    if (parent.className.includes("book__control_background")) {
      changeBgColor(item)
    }

    return false
  }
})
