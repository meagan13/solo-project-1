import { csrfFetch } from './csrf';

const CREATE_SIGNUP = 'signups/createSignup';
const REMOVE_SIGNUP = 'signups/removeSignup';

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

const initialState  = {};

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
        default:
            return state;
    }
}

export default signupReducer;
