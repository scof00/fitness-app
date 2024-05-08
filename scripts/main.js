import { muscleOptions } from "./exercisesList.js";

const container = document.querySelector("#container")

const render = async () =>{
    const muscleOptionsHTML = await muscleOptions()

    const compositedHTML=`${muscleOptionsHTML}`

    container.innerHTML = compositedHTML
}

document.addEventListener("newOrderCreated", render)
render()