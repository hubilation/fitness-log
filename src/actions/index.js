export function addExercise(name, sets, reps, repType, count, weight){
    type: 'ADD_EXERCISE',
    name,
    sets,
    reps,
    repType,
    count,
    weight,
    tags
}

export function addSession(userId, date, name){
    return {
        type: 'ADD_SESSION',
        userId,
        date,
        name
    }
}

export function updateSession(sessionId, date, name){
    return {
        type: 'UPDATE_SESSION',
        userId,
        date,
        name
    }
}

export function completeSession(sessionId, comments, caloriesBurned, totalTime){
    return {
        type: 'COMPLETE_SESSION',
        sessionId,
        comments,
        caloriesBurned,
        totalTime
    }
}

export function addExerciseToSession(userId, sessionId, exerciseId, sets, reps, weight){
    return {
        type: 'ADD_EXERCISE_TO_SESSION',
        userId,
        sessionId,
        exerciseId,
        sets,
        reps,
        weight
    }
}

export function logSet(exerciseId, sessionId, setIndex, weight, reps){
    return {
        type: 'LOG_SET',
        exerciseId,
        sessionId,
        setIndex,
        weight,
        reps
    }
}

