import { setMuscleChoice, setNameChoice, setRepsChoice, setSetChoice, setValueChoice } from "./transientState.js";

const handleSetMuscleChoice = (event) =>{
    if (event.target.id === "muscle")
        setMuscleChoice(parseInt(event.target.value))
}

export const muscleOptions = async () => {
    const response = await fetch("http://localhost:8088/muscles")
    const muscles = await response.json()
    document.addEventListener("change", handleSetMuscleChoice)
    let muscleChoicesHTML = `<h4>Muscle Group</h4>`
    muscleChoicesHTML += `<select id="muscle">
    <option value= "0">Choose muscle</option>`
    const divStringArray = await muscles.map(
        (muscle) => {
            return `<option value="${muscle.id}">${muscle.muscleGroup}</option>`
        }
    )
    muscleChoicesHTML+= divStringArray.join("")
    muscleChoicesHTML+= `</select>`
    return muscleChoicesHTML
}