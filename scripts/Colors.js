import { getColors, setColor } from "./database";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            window.alert(`User chose color ${event.target.value}`)
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    return `<h2>Colors</h2>
        <select id="color">
            <option value="0">Select a color</option>
            ${
                colors.map(
                    (color) => {
                        return `<option value="${color.id}">${color.color}</option>`
                    }
                ).join("")
            }
        </select>
    `
}