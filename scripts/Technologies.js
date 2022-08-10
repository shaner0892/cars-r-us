import { getTechnologies, setTechnology } from "./database";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
        <input type="radio" name="technology" value="${technology.id}"/> ${technology.technology}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}