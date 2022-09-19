const div = Array.from(document.getElementsByClassName("reveal"))
const viewportHeight = window.innerHeight

window.addEventListener("scroll", () => {
  div.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top
    const elementBottom = el.getBoundingClientRect().bottom
    const classActiv = el.classList.contains("reveal_active")

    if (elementBottom < 0) {
      if (classActiv) el.classList.remove("reveal_active")
      return
    }
    if (elementTop > window.innerHeight) {
      if (classActiv) el.classList.remove("reveal_active")
      return
    }
    if (!classActiv) el.classList.add("reveal_active")
  })
})
