import { getTechnologies, setTechnology } from "./database";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            window.alert(`User chose technology ${event.target.value}`)
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${
                technologies.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.technology}</option>`
                    }
                ).join("")
            }
        </select>
    `
}