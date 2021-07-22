import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getOpportunities } from '../../store/opportunity';
import './Profile.css';

const ProfilePage = () => {
    const sessionUser = useSelector(state => state.session);

    const userOpportunitiesList = useSelector(state => {

        const userOppsList = Object.values(state.opportunity)

        return userOppsList;
    })

    console.log("New opps list:", userOpportunitiesList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOpportunities())
    }, [dispatch])

    if(!userOpportunitiesList) {
        return null;
    }

    //map over the opportunities
    //if the userID matches the current user, list the opportunity
    return (
        <>
            <h2>Test</h2>
            { userOpportunitiesList?.map((opportunity) => {

               return <p key={ opportunity.oppName }>{ opportunity.oppName }</p>
            })}
        </>
    )
}

export default ProfilePage;
