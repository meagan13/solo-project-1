import { csrfFetch } from './csrf';

const CREATE_OPP = 'opportunity/createOpportunity';
const LOAD = 'opportunities/load';
const EDIT = 'opportunities/edit';
const REMOVE_OPP = 'opportunities/remove';

//action creators: sends data to the reducer
const createOppAction = (opportunity) => {
    return {
      type: CREATE_OPP,
      opportunity,
    };
}

const load = (oppList) => {
    return {
        type: LOAD,
        oppList,
    };
};

const edit = (opportunity) => {
    return {
        type: EDIT,
        opportunity
    }
}

const remove = (opportunity) => {
    return {
        type: REMOVE_OPP,
        opportunity
    }
}

//thunk creators
export const createOpportunity = (opportunity) => async dispatch => {
    //console.log('Opportunity in Thunk:', opportunity)
    //fetch call to our back-end opportunities route
    const response = await csrfFetch('/api/opportunities', {
        method: 'POST',
        //csrf fetch takes care of the header info
        body: JSON.stringify(opportunity)
    });

    const newOpportunity = await response.json();

    if(response.ok) {
        //console.log('New Opportunity ID', newOpportunity.id);
        dispatch(createOppAction(newOpportunity))
        //dispatch sends it to the action creator, createOppAction
    }

    return newOpportunity;
}

export const getOpportunities = () => async dispatch => {
    const res = await csrfFetch('/api/opportunities');

    if(res.ok) {
        const oppsList = await res.json();
        dispatch(load(oppsList));
        return oppsList;
    }
};

export const editOpp = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/opportunities/${ payload.id }`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })

    const oppToEdit = await res.json();

    if(res.ok) {
        dispatch(edit(oppToEdit));
    }

    return oppToEdit;
};

export const removeOpp = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/opportunities/${ payload.id }`, {
        method: 'DELETE',
        body: JSON.stringify(payload)
    })

    const oppToDelete = await res.json();

    if(res.ok) {
        dispatch(remove(oppToDelete));
    }

    return oppToDelete;
}

//const initialState = { opportunity:{}, likes:0 }
const initialState = {};

const opportunityReducer = (state = initialState, action) => {
    //copy in the state with ...state
    let newState = {...state};

    switch(action.type) {
        case CREATE_OPP: {
            //set an action.opportunity.id key on the state.opportunity object
            //set the value to the payload, which is accessed at action.opportunity
            newState[action.opportunity.id] = action.opportunity
            //console.log("New State:", newState)
            //this updates newState, which would trigger useSelector if we're using it
            return newState;
        }
        case LOAD: {
            const allOpps = {};
            //build out the allOpps object
            action.oppList.forEach(opportunity => {
                //'normalize' the data, send it back to the Component
                allOpps[opportunity.id] = opportunity;
            });
            //return the updated state the store; includes all old state (...state) and the new state (...allOpps)
            return {...state, ...allOpps}
        }
        case EDIT: {
            return {
                ...state,
                [action.opportunity.id]: {
                    ...state[action.opportunity.id],
                    ...action.opportunity
                }
            }
        }
        case REMOVE_OPP: {
            delete newState[action.opportunity.id];
            return newState;
        }
        default:
            return state;
    }
}

export default opportunityReducer;
