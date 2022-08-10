import { getColors, setColor } from "./database";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    const listItems = colors.map(color => {
        return `<li>
        <input type="radio" name="color" value="${color.id}"/> ${color.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}