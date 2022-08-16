import {displayCars} from "./carBody.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = displayCars() //add function from carBody for all HTML
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    renderAllHTML()
})