const exerciseTransientState = {
    "muscleId": 0,
    "set": 0,
    "reps": 0,
    "value": 0,
    "name": "",
}

const workoutTransientState = {
    "workoutId":0 
}

export const setMuscleChoice = (chosenMuscleId) => {
    exerciseTransientState.muscleId = chosenMuscleId
}

export const setSetChoice = (chosenSet) => {
    exerciseTransientState.set = chosenSet
}

export const setRepsChoice = (chosenReps) => {
    exerciseTransientState.reps = chosenReps
}

export const setValueChoice = (chosenValue) => {
    exerciseTransientState.value = chosenValue
}

export const setNameChoice = (chosenName) => {
    exerciseTransientState.name = chosenName
}

export const setWorkoutChoice = (chosenWorkout) => {
    workoutTransientState.workoutId = chosenWorkout
}