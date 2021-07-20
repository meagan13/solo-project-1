//contains all actions specific to the session user's information and the session user's Redux reducer
//add a session reducer

import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const CREATE_OPP = 'session/createOpportunity'
;
//action creators
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const createOppAction = (opportunity) => {
  return {
    type: CREATE_OPP,
    payload: opportunity,
  };
}

//thunks
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export const createOpportunity = (opportunity) => async dispatch => {
  const response = await csrfFetch('/api/opportunities/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(opportunity)
  });

  const newOpportunity = await response.json();

  if(response.ok) {
    dispatch(createOppAction(newOpportunity))
  }

  return newOpportunity;
}

//state variable for Reducer
const initialState = { user: null };

//Reducers
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case CREATE_OPP: {
      return {
        ...state,
        [action.opportunity.id]: {
          ...state[action.opportunity.id],
          ...action.opportunity,
        }
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
