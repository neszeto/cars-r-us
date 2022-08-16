
import {paintHTML} from "./paints.js"
import {technologyHTML} from "./technologies.js"
import {interiorHTML} from "./interior.js"
import {wheelHTML} from "./wheels.js"
import {carsHTML} from "./carOrders.js"
import {addCustomCar} from "./database.js"

export const displayCars = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__options">
                <h2>Paints</h2>
                ${paintHTML()}
            </section>
            <section class="choices__options">
                <h2>Interior</h2>
                ${interiorHTML()}
            </section>
            <section class="choices__options">
                <h2>Technologies</h2>
                ${technologyHTML()}
            </section>
            <section class="choices__options">
                <h2>Wheels</h2>
                ${wheelHTML()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${carsHTML()}
        </article>
    `
}


document.addEventListener(
    "click",
    (event) => {
        const buttonClicked = event.target
        if (buttonClicked.id.startsWith("orderButton")) {
            addCustomCar()
        }
    }
)