import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useParams } from 'react-router-dom';
import { getOpportunities } from '../../store/opportunity';
//import { getUser } from '../../store/user';
import { getSignups } from '../../store/oppSignup';
import './Profile.css';

const ProfilePage = () => {
    //useSelector pulls data from the store, but we have to add it to the store with the Reducer first
    const sessionUser = useSelector(state => state.session);

    const signups = useSelector(state => {
        const userSignups = Object.values(state.signup).filter(signup => signup?.userId === sessionUser?.user.id)
        //can add .reverse
        return userSignups;
    });

    const signupObj = {}

    signups.forEach(signup => {
        signupObj[signup?.oppId] = signup;
    })

    const userOpportunitiesList = useSelector(state => {

        const userOppsList = Object.values(state.opportunity).filter(opp => signupObj[opp.id])

        return userOppsList;
    })

    console.log("userOppList:", userOpportunitiesList)

    // ?.filter(signup => signup.userId === sessionUser.id)
//     const sessionUser = useSelector(state => state.session.user);

//   const todos = useSelector(state => {
//     return Object.values(state.todo).filter(td => td.userId === sessionUser?.id)
//     .reverse();
//   });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOpportunities())
        dispatch(getSignups())
    }, [dispatch])

    if(!userOpportunitiesList) {
        return null;
    }

    console.log(sessionUser.user);

    //map over the opportunities
    //if the userID matches the current user, list the opportunity
    return (
        <>
            <div>
                {/* <h2 style={ {backgroundImage: `url(${sessionUser.user.imgUrl}`}}>Test Image</h2> */}
                <h2>Welcome, { sessionUser.user.username }!</h2>
            </div>
            <img src={ sessionUser.user.imgUrl } alt='user photo' />
            <p>{ sessionUser.user.email }</p>
            <h3>My Signups:</h3>
            <div className='user-opps'>
                { userOpportunitiesList?.map((signup) => {

                return <li key={ signup.oppName }>{ signup.oppName }</li>
                })}
            </div>
        </>
    )
}

export default ProfilePage;
