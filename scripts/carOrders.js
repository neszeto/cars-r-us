import {getCustomCars, getPaintColors, getInteriors, getWheels, getTechnologies} from "./database.js"


export const carsHTML = () => {
    const cars = getCustomCars()
    const colors = getPaintColors()
    const interiors = getInteriors()
    const wheels = getWheels()
    const technologies = getTechnologies()

    let HTMLStr = ""
    for (let car of cars) {
       
        const foundColor = colors.find(
            (color) => {
                return color.id === car.paintId //this links the customCars color with its correct colorObject to then pull price
            }
        
        )
        const colorChoice = foundColor.color //take the found colorObject and get the color of it
        const colorCost = foundColor.price //take the found colorObject and get the price of it

        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === car.interiorId
            }
        )
        const interiorChoice = foundInterior.seatType
        const interiorCost = foundInterior.price

        const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === car.wheelId
            }
        )
        const wheelChoice = foundWheel.wheelType
        const wheelCost = foundWheel.price

        const foundTechnology = technologies.find(
            (tech) => {
                return tech.id === car.technologyId
            }
        )
        const techChoice = foundTechnology.package
        const techCost = foundTechnology.price 
        
        const totalCost = colorCost + interiorCost + wheelCost + techCost
        
        const costString = totalCost.toLocaleString("en-US", { //this puts it into USD currency format
            style: "currency",
            currency: "USD"
        })
        HTMLStr += `<div class="displayOrder">${colorChoice} car with ${wheelChoice} wheels, ${interiorChoice} interior, and the ${techChoice} for a total cost of $${costString}</div>`
    }
    return HTMLStr
}







