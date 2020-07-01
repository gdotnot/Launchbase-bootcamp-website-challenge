const modalOverlay = document.querySelector(".modalOverlay")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

for (let card of cards) {
    card.addEventListener("click", () => {
        const courseId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector(".material-icons").addEventListener(
    "click", () => {
        modalOverlay.classList.remove("active")
        modalOverlay.querySelector("iframe").src = ""
        modal.classList.remove("maximize")
    }
)

document.querySelector(".full-screen-modal").addEventListener(
    "click", () => {
        modal.classList.toggle("maximize")
    }
)

