const UPDATE_FIELD = "setResult/UPDATE_FIELD";

const update = (state, mutations) => Object.assign({}, state, mutations);

export const updateAction = (field, value) => ({
    type: UPDATE_FIELD,
    field,
    value
});

export const INITIAL_STATE = {
    reps: 10,
    weight: 0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_FIELD:
            state = update(state, {[action.field]: action.value});
            break;
    }
    return state;
}

export default reducer;