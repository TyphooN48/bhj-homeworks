const checkboxes = document.querySelectorAll("input.interest__check")
const checkboxesArray = Array.from(checkboxes)

let checkManager = function () {
  checkChilds(this)
  checkSiblings(this)
}

let checkSiblings = function (element) {
  let father = findParentalBox(element)
  let siblings = findSiblings(element)

  if (siblings) {
    if (
      siblings.findIndex((index) => index.checked == false) != -1 &&
      siblings.findIndex((index) => index.checked == true) != -1
    ) {
      father.indeterminate = true
      father.checked = false
    } else if (
      siblings.findIndex((index) => index.checked == false) != -1 &&
      siblings.findIndex((index) => index.checked == true) == -1
    ) {
      father.indeterminate = false
      father.checked = false
    } else if (
      siblings.findIndex((index) => index.checked == false) == -1 &&
      siblings.findIndex((index) => index.checked == true) != -1
    ) {
      father.indeterminate = false
      father.checked = true
    }
  }
  if (father) {
    checkSiblings(father)
  }
}

let checkChilds = function (element) {
  let elementHouse = element.closest("li.interest")
  let childs = Array.from(
    elementHouse.querySelectorAll("ul.interests .interest__check")
  )
  if (element.checked) {
    childs.forEach((e) => {
      e.checked = true
    })
  } else {
    childs.forEach((e) => {
      e.checked = false
      e.indeterminate = false
    })
  }
}

let findParentalBox = function (element) {
  if (element.closest("ul.interests")) {
    let grandFather = element.closest("ul.interests").closest("li.interest")
    return grandFather.querySelector(".interest__check")
  } else {
    return false
  }
}

let findSiblings = function (element) {
  if (element.closest("ul.interests")) {
    let Street = element.closest("ul.interests")
    let siblingHouses = []
    let siblingHouse = Street.querySelector("li.interest")
    let siblings = []
    siblingHouses.push(siblingHouse)
    while (siblingHouse.nextElementSibling) {
      siblingHouses.push(siblingHouse.nextElementSibling)
      siblingHouse = siblingHouse.nextElementSibling
    }

    siblingHouses.forEach((e) => {
      siblings.push(e.querySelector(".interest__check"))
    })

    return siblings
  }
}

checkboxesArray.forEach((e) => {
  e.addEventListener("click", checkManager)
})
