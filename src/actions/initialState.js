export const normalizedState = {
    sessions: [
        {
            id: 1,
            exercises: [
                1,2,3
            ]
        }
    ]
}


export const denormalizedState = {
    session: {
        id: 1, 
        date: '2018-02-18',
        name: 'Push',
        exercises: [
            {
                id: 1,
                name: 'Bench Press',
                sets: 3,
                reps: [8,12], //we can have multiple if we want a range, e.g. "Between 8 and 12 reps"
                repType: 'count', //time, burnout other options
                weight: 165,
                log: [
                    {
                        weight: 165,
                        reps: 10
                    },
                    {
                        weight: 170,
                        reps: 8
                    }
                ]
            }
        ],
        notes:  {
            comments: "",
            caloriesBurned: 0,
            totalTime
        }
    }
}