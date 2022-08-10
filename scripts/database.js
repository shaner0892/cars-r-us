const database = {
    colors: [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 200},
        {id: 3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 400}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 50},
        {id: 2, interior: "Charcoal Fabric", price: 75},
        {id: 3, interior: "White Leather", price: 150},
        {id: 4, interior: "Black Leather", price: 200}
    ],
    technologies: [
        {id: 1, technology: "Basic Package", price: 200},
        {id: 2, technology: "Navigation Package", price: 300},
        {id: 3, technology: "Visibility Package", price: 450},
        {id: 4, technology: "Ultra Package", price: 750},
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 200},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 250},
        {id: 3, wheel: "17-inch Spoke Silver", price: 500},
        {id: 4, wheel: "17-inch Spoke Black", price: 750},
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    carBuilder: {},
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.carBuilder.colorId = id
}

export const setInterior = (id) => {
    database.carBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.carBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.carBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.carBuilder}

    // Add a new primary key to the object
    //get the number of orders and subtracts one because indexes start at 0
    const lastIndex = database.customOrders.length - 1
    //each time a new order is placed it assigns an index one higher than the last
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.carBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}