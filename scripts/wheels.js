import {getWheels, setWheels} from "./database.js"





export const wheelHTML = () => {
    let wheels = getWheels()
    let HTML = ""
    HTML += `<select id="resource">
    <option value="0">Select a wheel style</option>`
    for (let wheel of wheels) {
        HTML += `<option value="${wheel.id}">${wheel.wheelType}</option>`
    }
    HTML += `</select>`
    return HTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            
            setWheels(parseInt(chosenOption))
        }
    }
)