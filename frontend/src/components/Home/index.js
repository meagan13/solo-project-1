import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getOpportunities } from '../../store/opportunity';

const HomePage = () => {
    // const params = useParams();
    // const { opportunities } = params
    // console.log("params", params)
    // console.log('Opportunities?:', opportunities)

    //useSelector gives us access to the store
    //
    const opportunitiesList = useSelector(state => {
        console.log("State.opportunity:", state.opportunity)

        //grab all values from the object and make it an array
        const oppsList = Object.values(state.opportunity)

        //return state.opportunity.oppsList.map(opportunityId => state.opportunity[opportunityId])
        return oppsList;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOpportunities())
    }, [dispatch])

    if(!opportunitiesList) {
        return null;
    }

    //return null;
    return (
        <ul>
            { opportunitiesList.map((opportunity, i) => {
                return <li key={i}>
                    { opportunity.oppName }
                </li>
                })
            }
        </ul>
        // <nav>
        //     { opportunitiesList.map((opportunity) => {
        //         return (
        //             <NavLink key={opportunity} to={ `/opportunities/${ opportunity.id }`}>
        //                 <div
        //                     className={
        //                         Number.parseInt(opportunityId) === opportunity.id
        //                             ? "nav-entry is-selected"
        //                             : "is-selected"
        //                     }
        //                 >
        //                     <div>
        //                         <div className="primart-text">{ opportunity.oppName }</div>
        //                         <div className="secondary-text">{ opportunity.oppDate }</div>
        //                     </div>
        //                 </div>
        //             </NavLink>
        //         );
        //     })}

        // </nav>
    )
}

export default HomePage;
