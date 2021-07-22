import { csrfFetch } from './csrf';

const LOAD = 'locations/getLocations';

const load = (locationList) => {
    return {
        type: LOAD,
        locationList,
    }
}

export const getLocations = () => async dispatch => {
    const res = await csrfFetch('/api/locations');

    if(res.ok) {
        const locationsList = await res.json();
        dispatch(load(locationsList));
        return locationsList;
    }
};

const initialState = {};

const locationReducer = (state = initialState, action ) => {

    // let newState = { ...state };

    switch(action.type) {
        case LOAD: {
            const allLocs = {};

            action.locationList.forEach(location => {
                allLocs[location.id] = location;
            });

            return { ...state, ...allLocs }
        }
        default:
            return state;
    }
}

export default locationReducer;
