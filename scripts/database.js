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
    ]
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