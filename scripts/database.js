const database = {
    paintColors: [
        {id: 1, color: "Silver", price: 200 },
        {id: 2, color: "Midnight Blue", price: 300},
        {id: 3, color: "Firebrick Red" ,price: 400},
        {id: 4, color: "Spring Green", price: 350 }
    ],
    interiors: [
        {id: 1, seatType: "Beige Fabric", price: 1500},
        {id: 2, seatType: "Charcoal Fabric", price: 2000},
        {id: 3, seatType: "White Leather", price: 4000},
        {id: 4, seatType: "Black Leather", price: 4500 }

    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 500},
        {id: 2, package: "Navigation Package", price: 700},
        {id: 3, package: "Visibility Package", price: 800},
        {id: 4, package: "Ultra Package", price: 1400}
    ],
    wheels: [
        {id: 1, wheelType: "17-inch Pair Radial", price: 400},
        {id: 2, wheelType: "17-inch Pair Black", price: 500},
        {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 600},
        {id: 4, wheelType: "18-inch Pair Spoke Black", price: 700}
    ],
    customCars: [
        //{id: 1, paintId: 2, interiorId: 3, technologyId: 4, wheelId: 4, timestamp: 1614659931693 }
    ],
    carBuilder: [
        {}
    ]
    
}


//GETTER FUNCTIONS

export const getPaintColors= () => {
    return database.paintColors.map(paint => ({...paint}))
}

export const getInteriors= () => {
    return database.interiors.map(seat => ({...seat}))
}

export const getTechnologies= () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels= () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCustomCars = () => {
    return database.customCars.map(car => ({...car}))
}
// SETTER FUNCTIONS 

export const setPaintColors= (id) => { //links the id of the key that a user selects and pushes that key into the temporary state 
    database.carBuilder.paintId = id
}

export const setInteriors= (id) => {
    database.carBuilder.interiorId = id
}

export const setTechnologies= (id) => {
    database.carBuilder.technologyId = id
}

export const setWheels= (id) => {
    database.carBuilder.wheelId = id
}

export const addCustomCar = () => { //takes a carObject from temp state and pushes it to permenent state
    // Copy the current state of user choices
    const newCarOrder = {...database.carBuilder} //this object already contains entreeId, veggieId and sidesId from the setter functions

    // Add a new primary key to the object
    const lastIndex = database.customCars.length - 1
        if (lastIndex === -1) { //we are checking to see if the customCars Array is empty
            newCarOrder.id = 1
        }
        else {
            newCarOrder.id = database.customCars[lastIndex].id + 1 //find the last object in customCars Array and add 1 to the id
        }
    // Add a timestamp to the order
    newCarOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customCars.push(newCarOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}