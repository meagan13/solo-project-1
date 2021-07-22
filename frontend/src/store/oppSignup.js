import { csrfFetch } from './csrf';

const CREATE_SIGNUP = 'signups/createSignup';

const create = (signup) => {
    return {
        type: CREATE_SIGNUP,
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

const initialState  = {};

const signupReducer = (state = initialState, action) => {
    let newState = {...state};

    switch(action.type) {
        case CREATE_SIGNUP: {
            // console.log("reducer test:", newState.signup)
            newState.signup[action.signup.id] = action.signup;
            return newState;
        }
        default:
            return state;
    }
}

export default signupReducer;
