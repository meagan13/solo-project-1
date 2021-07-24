import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getOpportunities } from '../../store/opportunity';
import './Home.css';

const HomePage = () => {
    // //useSelector gives us access to the store
    const { id } = useParams();
    const dispatch = useDispatch();

    const opportunitiesList = useSelector(state => {
        //console.log("State.opportunity:", state.opportunity)

        //grab all values from the object and make it an array
        const oppsList = Object.values(state.opportunity)

        //return state.opportunity.oppsList.map(opportunityId => state.opportunity[opportunityId])
        return oppsList;
    })

    useEffect(() => {
        dispatch(getOpportunities())
    }, [dispatch])

    if(!opportunitiesList) {
        return null;
    }

    //return null;
    return (
        <>
            {/* <h3>Create an Opportunity!</h3> */}
            <div className="opp-holder">
                { opportunitiesList.map((opportunity, i) => (
                    <NavLink key={i} to={ `/opportunities/${ opportunity?.id }`}>
                        <div className={`opp-div-${ i } opp-div`}>
                            <h2>{ opportunity?.oppName }</h2>
                            <p>Add Category Icon</p>
                            {/* <p>{ category.id } </p> */}
                        </div>
                        {/* <div
                            className={
                                Number.parseInt(opportunityId) === opportunity.id
                                    ? "nav-entry is-selected"
                                    : "is-selected"
                            }
                        >
                            <div>
                                <div className="primary-text">{ opportunity.oppName }</div>
                                <div className="secondary-text">{ opportunity.oppDate }</div>
                            </div>
                        </div> */}
                    </NavLink>
                    )
                )}
            </div>
        </>

    )
}

export default HomePage;
