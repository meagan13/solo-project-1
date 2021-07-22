import { csrfFetch } from './csrf';

const CREATE_SIGNUP = 'signups/createSignup';

const create = (opportunity) => {
    return {
        type: CREATE_SIGNUP,
        opportunity,
    }
}

export const createSignup = (opportunity) => async dispatch => {
    const res = await csrfFetch('/api/signups', {
        method: 'POST',
        body: JSON.stringify(opportunity)
    });

    const newSignup = await res.json();

    if(res.ok) {
        dispatch(create(newSignup))
    }

    return newSignup;
}

const initialState  = { signup: {} };

const signupReducer = (state = initialState, action) => {
    let newState = {...state};

    switch(action.type) {
        case CREATE_SIGNUP: {
            newState.signup[action.signup.id] = action.signup;
            return newState;
        }
        default:
            return state;
    }
}

export default signupReducer;
