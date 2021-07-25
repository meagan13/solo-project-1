import { csrfFetch } from './csrf';

const LOAD = 'user/getUser';

const load = (userList) => {
    return {
        type: LOAD,
        userList
    }
}

export const getUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users');

    if(res.ok) {
        const usersList = await res.json();
        dispatch(load(usersList));
        return usersList;
    }
}

const initialState = {};

const userReducer = (state = initialState, action) => {
    // let newState = { ...state };

    switch(action.type) {
        case LOAD: {
            const allUsers = {};

            action.userList.forEach(user => {
                allUsers[user.id] = user;
            });

            return { ...state, ...allUsers}
        }
        default:
            return state;
    }
}

export default userReducer;
