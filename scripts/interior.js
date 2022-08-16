import {getInteriors, setInteriors} from "./database.js"


export const interiorHTML = () => {
    let interiors = getInteriors()
    let HTML = ""
    HTML += `<select id="resource">
    <option value="0">Select an interior material</option>`
    for (let interior of interiors) {
        HTML += `<option value="${interior.id}">${interior.seatType}</option>`
    }
    HTML += `</select>`
    return HTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            
            setInteriors(parseInt(chosenOption))
        }
    }
)