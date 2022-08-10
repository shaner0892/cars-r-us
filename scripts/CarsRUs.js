import { Colors } from "./Colors";
import { Interiors } from "./Interiors";
import { Technologies } from "./Technologies";
import { Wheels } from "./Wheels";

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("orderButton")) {
//             `${addCustomOrder()}`
//         }
//     }
// )

export const CarsRUs = () => {
    return `
    <h1>Cars R Us</h1>
    
    <article class="choices">
        <section class="choices__colors">
            <h2>Colors</h2>
            ${Colors()}
        </section>
        <section class="choices__interiors">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class="choices__technologies">
            <h2>Technologies</h2>
            ${Technologies()}
        </section>
        <section class="choices__wheels">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    </article>`
}