import { getWheels, setWheel } from "./database";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            window.alert(`User chose wheel ${event.target.value}`)
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a wheel package</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.wheel}</option>`
                    }
                ).join("")
            }
        </select>
    `
}