import { getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

export const carBuilder = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    const foundColor = colors.find(color => {
        return color.id === order.colorId
    })
    
    const foundInterior = interiors.find(interior => {
        return interior.id === order.interiorId
    })
    
    const foundTechnology = technologies.find(technology => {
        return technology.id === order.technologyId
    })
    
    const foundWheel = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })
    
    let totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price

    //interpolates the price into an HTML string
    const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
    })

    return `<li> Order #${order.id} cost ${costString} </li>`
}