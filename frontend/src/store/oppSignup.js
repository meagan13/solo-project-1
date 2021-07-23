import { csrfFetch } from './csrf';

const CREATE_SIGNUP = 'signups/createSignup';
const REMOVE_SIGNUP = 'signups/removeSignup';
const LOAD = 'signups/loadSignups';

const create = (signup) => {
    return {
        type: CREATE_SIGNUP,
        signup,
    }
}

const remove = (signup) => {
    return {
        type: REMOVE_SIGNUP,
        signup,
    }
}

const load = (signupList) => {
    return {
        type: LOAD,
        signupList,
    }
}

export const createSignup = (payload) => async dispatch => {
    const res = await csrfFetch('/api/signups', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const newSignup = await res.json();

    if(res.ok) {
        dispatch(create(newSignup))
    }

    return newSignup;
}

export const removeSignup = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/signups/$ payload.id }`, {
        method: 'DELETE',
        body: JSON.stringify(payload)
    });

    const signupToRemove = await res.json();

    if(res.ok) {
        dispatch(remove(signupToRemove))
    }

    return signupToRemove;
}

export const getSignups = () => async dispatch => {
    const res = await csrfFetch('/api/signups');

    if(res.ok) {
        const signupsList = await res.json();
        dispatch(load(signupsList));
        return signupsList;
    }
};


const initialState  = {};

//Reducer adds it to the store
const signupReducer = (state = initialState, action) => {
    let newState = {...state};

    switch(action.type) {
        case CREATE_SIGNUP: {
            // console.log("reducer test:", newState.signup)
            newState[action.signup.id] = action.signup;
            return newState;
        }
        case REMOVE_SIGNUP: {
            delete newState[action.signup.id];
            return newState;
        }
        case LOAD: {
            const allSignups = {};
            action.signupList.forEach(signup => {
                allSignups[signup.id] = signup;
            });
            //adds it to the store here
            return { ...state, ...allSignups }
        }
        default:
            return state;
    }
}

export default signupReducer;
