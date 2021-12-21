const menuBtn = document.querySelector(".nav-btn")
const navBar = document.querySelector(".navbar")
const navList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".nav-links")
const navHeight = navBar.getBoundingClientRect().height
const open = document.querySelector(".open")
const close = document.querySelector(".close")
const dots = document.querySelectorAll(".dot")
const review = document.querySelector(".review")
const reviewContent = [`<div class="review-block">
                        <img src="./images/avatar-anisha.png" alt="avatar" class="avatar">
                        <div class="review-text">
                            <h4>Anisha Li</h4>
                            <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                        </div>
                        </div>`,
                        
                        `<div class="review-block">
                        <img src="./images/avatar-ali.png" alt="avatar" class="avatar">
                        <div class="review-text">
                            <h4>Ali Bravo</h4>
                            <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                        </div>
                        </div>`,

                    `<div class="review-block">
                    <img src="./images/avatar-richard.png" alt="avatar" class="avatar">
                    <div class="review-text">
                        <h4>Richard Watts</h4>
                        <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                    </div>
                    </div>`,
                
                    `<div class="review-block">
                    <img src="./images/avatar-shanai.png" alt="avatar" class="avatar">
                    <div class="review-text">
                        <h4>Shanai Gough</h4>
                        <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                    </div>
                    </div>`]

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


document.addEventListener("DOMContentLoaded", () => {
    review.innerHTML = reviewContent[0]
    dots[0].style.backgroundColor = "hsl(12, 88%, 59%)"
    let i = 0
    changeContentInterval = setInterval (() => {
        i++
        // console.log(i)
        if (i > reviewContent.length - 1) {
            i = 0
        }
        review.innerHTML = reviewContent[i]
        dots.forEach((dot) => {
            dot.style.backgroundColor = "transparent"
        })
        
        dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
    }, 5000)

    dots[0].addEventListener("click", () => {
        review.innerHTML = reviewContent[0]
        dots[0].style.backgroundColor = "hsl(12, 88%, 59%)"
        clearInterval(changeContentInterval)
        clearInterval(continueInterval)
        let i = 0
        continueInterval = setInterval (() => {
            i++
            if (i > reviewContent.length - 1) {
                i = 0
            }
            review.innerHTML = reviewContent[i]
            dots[0].style.backgroundColor = "transparent"
            dots[1].style.backgroundColor = "transparent"
            dots[2].style.backgroundColor = "transparent"
            dots[3].style.backgroundColor = "transparent"
            dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
        }, 5000)
    })

    dots[1].addEventListener("click", () => {
        review.innerHTML = reviewContent[1]
        dots[1].style.backgroundColor = "hsl(12, 88%, 59%)"
        clearInterval(changeContentInterval)
        clearInterval(continueInterval)
        let i = 1
        continueInterval = setInterval (() => {
            i++
            if (i > reviewContent.length - 1) {
                i = 0
            }
            review.innerHTML = reviewContent[i]
            dots[0].style.backgroundColor = "transparent"
            dots[1].style.backgroundColor = "transparent"
            dots[2].style.backgroundColor = "transparent"
            dots[3].style.backgroundColor = "transparent"
            dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
        }, 5000)
    })

    dots[2].addEventListener("click", () => {
        review.innerHTML = reviewContent[2]
        dots[2].style.backgroundColor = "hsl(12, 88%, 59%)"
        clearInterval(changeContentInterval)
        clearInterval(continueInterval)
        let i = 2
        continueInterval = setInterval (() => {
            i++
            if (i > reviewContent.length - 1) {
                i = 0
            }
            review.innerHTML = reviewContent[i]
            dots[0].style.backgroundColor = "transparent"
            dots[1].style.backgroundColor = "transparent"
            dots[2].style.backgroundColor = "transparent"
            dots[3].style.backgroundColor = "transparent"
            dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
        }, 5000)
    })

    dots[3].addEventListener("click", () => {
        review.innerHTML = reviewContent[3]
        dots[3].style.backgroundColor = "hsl(12, 88%, 59%)"
        clearInterval(changeContentInterval)
        clearInterval(continueInterval)
        let i = 3
        continueInterval = setInterval (() => {
            i++
            if (i > reviewContent.length - 1) {
                i = 0
            }
            review.innerHTML = reviewContent[i]
            dots[0].style.backgroundColor = "transparent"
            dots[1].style.backgroundColor = "transparent"
            dots[2].style.backgroundColor = "transparent"
            dots[3].style.backgroundColor = "transparent"
            dots[i].style.backgroundColor = "hsl(12, 88%, 59%)"
        }, 5000)
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
