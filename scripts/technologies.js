import {getTechnologies, setTechnologies} from "./database.js"


export const technologyHTML = () => {
    let technologies = getTechnologies()
    let HTML = ""
    HTML += `<select id="resource">
    <option value="0">Select a technology package</option>`
    for (let technology of technologies) {
        HTML += `<option value="${technology.id}">${technology.package}</option>`
    }
    HTML += `</select>`
    return HTML
}

document.addEventListener( //this listens for when someone clicks technology package and gets it's technology.id and sets it as the transient objects id
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            setTechnologies(parseInt(chosenOption))
        }
    }
)