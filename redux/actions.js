// actions types
export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const CREATE_SPOT = 'CREATE_SPOT';

// actions creators
export const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    payload: spots,
});
export const createSpot = spot => ({
    type: CREATE_SPOT,
    payload: spot,
});
export const fetchSpots = () => {
    return dispatch => {
        return fetch('http://10.26.162.12:3000/api/spots')
            .then(response => response.json())
            .then(spots => dispatch(receiveSpots(spots)))
    }
};
export const addSpot = (spot) => {
    return dispatch => {
        return fetch('http://10.26.162.12:3000/api/spots', {
            method: 'POST',
            data: spot,
        })
            .then(response => response.json())
            .then(spots => dispatch(createSpot(spots)))
    }
};