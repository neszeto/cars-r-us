import {getPaintColors, setPaintColors} from "./database.js"


let paints = getPaintColors()


export const paintHTML = () => {
    let HTML = ""
    HTML += `<select id="resource">
    <option value="0">Select a paint color</option>`
   const paintArray = paints.map( (paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
   }

   )
    HTML += paintArray.join("")
    HTML += `</select>`
    return HTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            setPaintColors(parseInt(chosenOption)) 
        }
    }
)


