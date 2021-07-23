import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Opportunity.css';
import { getOpportunities, editOpp, removeOpp } from '../../store/opportunity';
import { createSignup, getSignups } from '../../store/oppSignup';
import { getUsers } from '../../store/user';

function Opportunity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    //grab data from the store
    const sessionUser = useSelector(state => state.session.user);

    const opportunities = useSelector(state => {
        const oppsArr = Object.values(state.opportunity)
        return oppsArr;
    });

    const signups = useSelector(state => {
        const userSignups = Object.values(state.signup)
        //can add .reverse
        return userSignups;
    });

    const users = useSelector(state => {
        const usersArr = Object.values(state.user);
        return usersArr;
    })
    // console.log("ooopppppps:", opportunities)
    // console.log("signups test in Opp:", signups)
    console.log("users in opppppp:", users)
    //grab the users out of the store

    const userObj = {};

    console.log("users test in Opp:", users)

    //set up useEffect to get all opportunities into the store
    //useEffect listens for the first change and then loads into the store
    useEffect(() => {
        dispatch(getOpportunities())
        dispatch(getSignups())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    let opportunity = opportunities[id]
    // let signup = signups[id]
    // let user = users[opportunity?.nonprofitId]

    // console.log("user test in opp:", user)
    // // console.log('user:', user)

    // const [oppName, setOppName] = useState('');
    // const [oppDate, setOppDate] = useState('');
    // const [capacity, setCapacity] = useState(0);
    const [oppName, setOppName] = useState(opportunity?.oppName);
    const [oppDate, setOppDate] = useState(opportunity?.oppDate);
    const [capacity, setCapacity] = useState(opportunity?.capacity);
    const [category, setCategory] = useState(opportunity?.category);
    const [oppId, setOppId] = useState(Number(id));
    const [userId, setUserId] = useState(sessionUser.id);
    const [username, setUsername] = useState(opportunity?.nonprofitId);

    const updateOppName = (e) => setOppName(e.target.value);
    const updateOppDate = (e) => setOppDate(e.target.value);
    const updateCapacity = (e) => setCapacity(e.target.value);
    const updateCategory = (e) => setCategory(e.target.value);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            id,
            oppName,
            oppDate,
            capacity,
            category
        };

        //the return value of the thunk, newOpportunity
        let editedOpportunity = await dispatch(editOpp(payload));

        if(editedOpportunity) {
            history.push('/');
            //hideForm();
        }
    }

    const handleDelete = async(e) => {
        e.preventDefault();

        const payload = {
            id,
            oppName,
            oppDate,
            capacity
        };

        let deletedOpp = await dispatch(removeOpp(payload));

        if(deletedOpp) {
            history.push('/');
        }
    }

    const handleSignup = async(e) => {
        e.preventDefault();

        const payload = {
            oppId,
            userId
        }

        let signup = await dispatch(createSignup(payload));

        if(signup) {
            history.push('/')
        }
    }

    return (
        <>
            <div className='opportunity'>
                <h2>Opportunity: { opportunity?.oppName }</h2>
                <h3>Submitted by: { opportunity?.nonprofitId }</h3>
                {/* <h3>Test submitted by: { user?.username }</h3> */}
                <h3>Opportunity Date: { (`${opportunity?.oppDate}`).slice(0, 10) }</h3>
            </div>
            <div className='edited-opportunity'>
                <form onSubmit={ handleSubmit }>
                    <div className='edit-input'>
                        <input className='edit-name '
                            type="text"
                            placeholder="Opportunity Name"
                            value={ oppName }
                            onChange={ updateOppName }
                        />
                    </div>

                    <br />

                    <div className='edit-input'>
                        <input className='edit-date edit-input'
                            type="date"
                            placeholder="Date"
                            value={ oppDate }
                            onChange={ updateOppDate }
                        />
                    </div>

                    <br />
                    <div className='edit-input'>
                        <input className='edit-capacity edit-input'
                            type="integer"
                            placeholder="Capacity"
                            value={ capacity }
                            onChange={ updateCapacity }
                        />
                    </div>

                    <br />

                    <button type="submit" className='edit-button button'>Edit Opportunity</button>
                </form>

                <div className='delete-button-div button'>
                    <form onSubmit={ handleDelete }>
                        <button type="submit" className='delete-button button'>Delete Opportunity</button>
                    </form>
                </div>

                <div className='signup-button-div button'>

                    <form onSubmit={ handleSignup }>
                        <button type="submit" className='signup-button button'>Sign Up</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Opportunity;
