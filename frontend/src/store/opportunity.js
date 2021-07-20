import { csrfFetch } from './csrf';

const CREATE_OPP = 'opportunity/createOpportunity';

//action creator sends it to the reducer
const createOppAction = (opportunity) => {
    return {
      type: CREATE_OPP,
      opportunity,
    };
}


export const createOpportunity = (opportunity) => async dispatch => {
    //console.log('Opportunity in Thunk:', opportunity)
    //fetch call to our back-end opportunities route
    const response = await csrfFetch('/api/opportunities', {
        method: 'POST',
        //csrf fetch takes care of the header info
        body: JSON.stringify(opportunity)
    });

    if(response.ok) {
        const newOpportunity = await response.json();
        //console.log('New Opportunity ID', newOpportunity.id);
        dispatch(createOppAction(newOpportunity))
        //dispatch sends it to the action creator, createOppAction
        return newOpportunity;
    }

}

//const initialState = { opportunity:{}, likes:0 }
const initialState = { opportunity: {}};

const opportunityReducer = (state = initialState, action) => {
    //copy in the state with ...state
    let newState = {...state};

    switch(action.type) {
        case CREATE_OPP: {
            //set an action.opportunity.id key on the state.opportunity object
            //set the value to the payload, which is accessed at action.opportunity
            newState.opportunity[action.opportunity.id] = action.opportunity
            console.log("New State:", newState)
            //this updates newState, which would trigger useSelector if we're using it
            return newState;
        }
        default:
            return state;
    }
}

export default opportunityReducer;
