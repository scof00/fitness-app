import { setMuscleChoice, setNameChoice, setRepsChoice, setSetChoice, setValueChoice } from "./transientState.js";

const handleSetMuscleChoice = (event) =>{
    if (event.target.id === "muscle")
        setMuscleChoice(parseInt(event.target.value))
}

export const muscleOptions = async () => {
    const response = await fetch("http://localhost:8088/muscles")
    const muscles = await response.json()
    document.addEventListener("change", handleSetMuscleChoice)
    let muscleChoicesHTML = `<label>Muscle Group</label>`
    muscleChoicesHTML += `<select id="muscle">
    <option value= "0">Choose muscle</option>`
    const divStringArray = await muscles.map(
        (muscle) => {
            return `<option value="${muscle.id}">${muscle.muscleGroup}</option>`
        }
    )
    muscleChoicesHTML+= divStringArray.join("")
    muscleChoicesHTML+= `</select>`
    muscleChoicesHTML+= `<form>
    <label>Exercise</label>
    <input type="text" placeholder="Name of Exercise">
    <label>Sets</label>
    <input type="number" placeholder="# of Sets" min="0">
    <label>Repetitions</label>
    <input type="number" placeholder="# of Reps" min="0">
    <label>Weight</label>
    <input type="number" placeholder="Weight in kg or lbs" min="0">
    </form>
    <select>
    <option value=1>Lbs</option>
    <option value=2>Kgs</option>
    </select>
    <button>Save Exercise</button>
    `
    return muscleChoicesHTML
}