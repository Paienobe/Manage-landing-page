const menuBtn = document.querySelector(".nav-btn")
const navBar = document.querySelector(".navbar")
const navList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".nav-links")
const navHeight = navBar.getBoundingClientRect().height
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const dots = document.querySelectorAll(".dot")
const review = document.querySelector(".review")
import reviewContent from "./data.js"


open.addEventListener("click", () => {
    navList.style.top = "4rem"
    open.style.display = "none"
    close.style.display = "inline"
    close.addEventListener("click", () => {
        close.style.display = "none"
        open.style.display = "inline"
        navList.style.top = "-100%"
    })
})

window.addEventListener("scroll", () => {
    close.style.display = "none"
    open.style.display = "inline"
    navList.style.top = "-100%"
    let bodyHeight = window.pageYOffset
    if (bodyHeight > navHeight) {
        navBar.classList.add("sticky-nav")
    } else {
        navBar.classList.remove("sticky-nav")
    }
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        close.style.display = "none"
        open.style.display = "inline"
        navList.style.top = "-100%"
    })
})

let changeContentInterval = null
let continueInterval = null
let stopInterval = null

const transparentDots = () => {
  dots.forEach((dot) => {
    dot.style.backgroundColor = 'transparent'
  })
}


document.addEventListener("DOMContentLoaded", () => {
    review.innerHTML = reviewContent[0]
    dots[0].style.backgroundColor = "hsl(12, 88%, 59%)"
    let i = 0
    changeContentInterval = setInterval (() => {
        i++
        if (i > reviewContent.length - 1) {
            i = 0
        }
        review.innerHTML = reviewContent[i]
        transparentDots()
        dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
    }, 5000)

    dots.forEach((dot) => {
  let dotArray = Array.from(dot.parentElement.children)
  let dotIndex = dotArray.indexOf(dot)
  dot.addEventListener("click", () => {
    review.innerHTML = reviewContent[dotIndex]
    dot.style.backgroundColor = 'hsl(12, 88%, 59%)'
    clearInterval(changeContentInterval)
    clearInterval(continueInterval)
    let i = dotIndex
    continueInterval = setInterval(() => {
      i++
      if (i > reviewContent.length - 1) {
        i = 0
      }
      review.innerHTML = reviewContent[i]
      transparentDots()
      dots[i].style.backgroundColor = 'hsl(12, 88%, 59%)'
    }, 5000)
  })
})
})

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        dot.style.backgroundColor = "hsl(12, 88%, 59%)"
        const clickedBtnID = dot.id
        const IDOfdotsNotClicked = []
        dots.forEach((eachDot) => {
            if (eachDot.id !== clickedBtnID) {
                IDOfdotsNotClicked.push(eachDot)
            }
        })
        IDOfdotsNotClicked.map((eachDot) => {
            eachDot.style.backgroundColor = "transparent"
        })
    })
})
