const modalOverlay = document.querySelector(".modalOverlay")
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal")

for (let card of cards) {
    card.addEventListener("click", () => {
        const courseId = card.getAttribute("id")
        window.location.href = `https://rocketseat.com.br/${courseId}`
    })
}
