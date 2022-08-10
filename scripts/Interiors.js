import { getInteriors, setInterior } from "./database";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            window.alert(`User chose interior ${event.target.value}`)
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select a interior package</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.interior}</option>`
                    }
                ).join("")
            }
        </select>
    `
}