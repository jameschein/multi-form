document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step__option a")
  const cards = document.querySelectorAll(".steps__card")

  steps.forEach(step => {
    step.addEventListener("click", function (e) {
      // steps.forEach(step => {
      //   steps[i].classList.remove("step-selected")
      // })
      for (let i = 0; i < cards.length - 1; i++) {
        steps[i].classList.remove("step-selected")
        cards[i].style.zIndex = -1
      }

      let currentCard = step.getAttribute("data-index") - 1
      if (currentCard != undefined) {
        cards[currentCard].style.zIndex = 1
        step.classList.add("step-selected")
      } else {
        return false
      }
    })
  })

  // switch between month and year payment options
  // get hold of the selectors

  const periods = document.querySelectorAll(".period input")
  const paymentsPlans = document.querySelectorAll(".plans")
  const paymentsAddons = document.querySelectorAll(".addons")

  // const yearlyInput = document.querySelectorAll(".yearly input")
  // const monthlyInput = document.querySelector(".monthly input")

  let counter = 0

  periods.forEach(period => {
    // listen for period selection
    period.addEventListener("change", e => {
      for (let i = 0; i < periods.length; i++) {
        periods[i].parentElement.classList.remove("option-selected")
        paymentsPlans[i].style.zIndex = -1
        paymentsAddons[i].style.zIndex = -1
      }
      period.parentElement.classList.add("option-selected")
      if (counter <= 0) {
        counter = 1
      } else if (counter >= 1) {
        counter = 0
      }

      paymentsPlans[counter].style.zIndex = 1
      paymentsAddons[counter].style.zIndex = 1
    })
  })

  // Dynamically Create CARD FOUR Table
})
