import { setWorkoutChoice } from "./transientState.js"

const handleWorkoutChoice = (event) =>{
    if(event.target.id === "workout")
        setWorkoutChoice(parseInt(event.target.value))
}

export const workoutList = async () =>{
    const response = await fetch("http://localhost:8088/workouts")
    const workouts = await response.json()
    document.addEventListener("change", handleWorkoutChoice)
    let workoutChoicesHTML =`<h3 class="workouts">Your Workouts</h3>`
    workoutChoicesHTML += `<select id="workout">
    <option value="0">Select your workout</option>`
    const divStringArray = await workouts.map(
        (workout) => {
            return `
            <option value="${workout.id}">${workout.name}</option>`
        }
    )
    workoutChoicesHTML += divStringArray.join("")
    workoutChoicesHTML += `</select>`
    return workoutChoicesHTML
}

const container = document.querySelector("#container")

const render = async () =>{
    const workoutOptionsHTML = await workoutList()

    const compositedHTML=`${workoutOptionsHTML}
    <a class="workouts" href="./createWorkouts.html">Create New Workout</a>
    <button>Begin Workout</button>
    `

    container.innerHTML = compositedHTML
}

document.addEventListener("newOrderCreated", render)
render()