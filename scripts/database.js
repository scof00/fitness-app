const database={
    workouts:[
        {id: 1, name: "Full Body Day 1"},
        {id: 2, name: "Full Body Day 2"},
        {id: 3, name: "Full Body Day 3"}
    ],
    exercises:[
        {id: 1, class: "chest", name: "Bench Press", sets: 4, reps: 12, value: "135 lbs", workoutId: 1},
        {id: 2, class: "legs", name: "Squats", sets: 4, reps: 12, value: "135 Lbs", workoutId: 1},
        {id: 3, class: "back", name: "Deadlift", sets: 4, reps: 12, value: "135 Lbs", workoutId: 1},
        {id: 4, class: "triceps", name: "Tricep Extension", sets: 4, reps: 12, value: "80 Lbs", workoutId: 1},
        {id: 5, class: "biceps", name: "Bicep Curl", sets: 4, reps: 12, value: "30 Lbs"},
        {id: 6, class: "shoulders", name: "Shoulder Press", sets: 4, reps: 12, value: "30 Lbs"},
        {id: 6, class: "abd", name:"Crunches", sets: 4, reps: 50, value: "", workoutId: 1}
    ],
    biometrics: [
        {id: 1, type: "Height", value: "5'10"},
        {id: 2, type: "Weight", value: "155 lbs"},
        {id: 3, type: "Age", value: "23 y/o"}
    ],
    users:[
        {id: 1, name: "Seth", password: "asdfasdf", username:"SethFields1"}
    ]
}