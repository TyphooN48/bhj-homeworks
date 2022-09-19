const elements = Array.from(document.getElementsByClassName("rotator__case"))
const classActivator = "rotator__case_active"
let speed = elements[0].dataset["speed"]

let id = setTimeout(rotator, speed)

function rotator() {
  elements.forEach((el) => {
    if (el.classList.contains(classActivator)) {
      activeElement = el
    }
    el.style.color = el.dataset["color"]
  })

  if (!isLastChild(activeElement)) {
    activeElement.nextElementSibling.classList.add(classActivator)
    activeElement.classList.remove(classActivator)
    speed = activeElement.nextElementSibling.dataset["speed"]
    setTimeout(rotator, speed)
  } else {
    elements[0].classList.add(classActivator)
    activeElement.classList.remove(classActivator)
    speed = elements[0].dataset["speed"]
    setTimeout(rotator, speed)
  }
}

function isLastChild(el) {
  return el === el.parentNode.children[el.parentNode.children.length - 1]
}
