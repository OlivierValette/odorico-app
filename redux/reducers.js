import {combineReducers} from "redux";

// import actions
import {RECEIVE_SPOTS} from "./actions";
import {CREATE_SPOT} from "./actions";

// default state
const defaultState = {
    spots: [],
    user: {},
};

// reducers
const spotReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.payload;
        case CREATE_SPOT:
            return [...state, action.payload];
        default:
            return state;
    }
};
const userReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Reducers combination
const reducers = combineReducers({
    spots: spotReducer,
    user: userReducer,
});

export default reducers;