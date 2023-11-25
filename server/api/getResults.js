export default defineEventHandler(async () => {
    const tasks = [
        'Push-Ups',
        'Crunches',
        'Squats',
        'Pull-Ups',
        'Chin-Ups',
        'Dips',
        'Bicep Curls',
        'Skull Crushers',
        'Leg Raises',
        'Mountain Climbers',
        'Shoulder Taps',
        'Front Arm Raise',
        'Fly Raises',
        'Russian Twists',
        'Knee Raises',
        'Calf Raises',
        'Scissors',
        'Bulgarian Split Squats',
        'Diamond Pushups'
    ]

    const times = [
        '10',
        '20',
        '30',
        '40',
        '50',
        '60',
    ]

    const getTask = () => {
        const randomIndex = Math.floor(Math.random() * tasks.length)
        return tasks[randomIndex]
    }

    const getTime = () => {
        const randomIndex = Math.floor(Math.random() * times.length)
        return times[randomIndex]
    }

    const getReps = (min, max) => {
        min = Math.ceil(min)
        max = Math.ceil(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    const task = getTask()
    const time = getTime()
    const reps = getReps(10, 100)


    return {
        reps: reps,
        task: task,
        time: time
    }
    
})