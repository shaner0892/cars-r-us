import { getVehicleTypes, setVehicleType } from "./database";

const vehicleTypes = getVehicleTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "vehicleType") {
            window.alert(`User chose vehicleType ${event.target.value}`)
            setVehicleType(parseInt(event.target.value))
        }
    }
)

export const VehicleTypes = () => {
    return `<h2>VehicleTypes</h2>
        <select id="vehicleType">
            <option value="0">Select a vehicleType</option>
            ${
                vehicleTypes.map(
                    (vehicleType) => {
                        return `<option value="${vehicleType.id}">${vehicleType.vehicleType}</option>`
                    }
                ).join("")
            }
        </select>
    `
}