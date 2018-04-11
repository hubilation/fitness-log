import { INITIAL_STATE as SET_INITIAL_STATE } from "./setResult";
import setResultReducer from "./setResult";

const INITIAL_STATE = {
  startWeight: 15,
  results: [SET_INITIAL_STATE, SET_INITIAL_STATE, SET_INITIAL_STATE]
};

const ADD_SET = "exerciseResults/ADD_SET";

export const addSetAction = startWeight => ({
  type: ADD_SET,
  startWeight
});

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith("setResult/")) {
    return Object.assign({}, state, {
      results: [
        ...state.results.slice(0, action.index),
        setResultReducer(state.results[action.index], action),
        ...state.results.slice(action.index + 1)
      ]
    });
  }

  switch (action.type) {
    case ADD_SET:
      return Object.assign({}, state, {
        results: [...state.results, { reps: 0, weight: action.startWeight }]
      });
  }

  return state;
};

export default reducer;
