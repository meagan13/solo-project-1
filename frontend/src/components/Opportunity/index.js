import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Opportunity.css';
import { getOneOpp, editOpp, removeOpp } from '../../store/opportunity';
import { createSignup, getSignups } from '../../store/oppSignup';
import { getUsers } from '../../store/user';

function Opportunity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    //grab data from the store
    const sessionUser = useSelector(state => state.session.user);
    const selectedOpportunity = useSelector(state => state.opportunity.opportunity)

    if(!sessionUser) {
        history.push('/login')
    }
    // console.log('selected opp test:', selectedOpportunity)
    // console.log("selected category test:", selectedOpportunity?.categoryId)

    //set up useEffect to get all opportunities into the store
    //useEffect listens for the first change and then loads into the store
    useEffect(() => {
        dispatch(getOneOpp(id))
        dispatch(getSignups())
        dispatch(getUsers())
    }, [dispatch])

    const [oppName, setOppName] = useState('');
    const [oppDate, setOppDate] = useState('');
    const [capacity, setCapacity] = useState('');
    const [category, setCategory] = useState('');
    const [oppId, setOppId] = useState(Number(id));
    const [userId, setUserId] = useState(sessionUser?.id);
    // const [username, setUsername] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    //need to add something to dependency array??
    useEffect (() => {
        if(sessionUser?.id === selectedOpportunity?.nonprofitId) {
            setShowEdit(true);
        }
    })

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
        <div className='single-opp-div'>
            <div className='opportunity'>
                <h2>Opportunity: { selectedOpportunity?.oppName }</h2>

                { selectedOpportunity?.categoryId === 1 && (
                    <h3>Volunteer</h3>
                    )}

                { selectedOpportunity?.categoryId === 2 && (
                    <h3>Learn</h3>
                    )}

                { selectedOpportunity?.categoryId === 3 && (
                    <h3>Advocate</h3>
                    )}

                <h3>Hosted by: { selectedOpportunity?.User.username }</h3>
                <h3>Opportunity Date: { (`${selectedOpportunity?.oppDate}`).slice(0, 10) }</h3>
            </div>
                <div className='signup-button-div button'>

                    <form onSubmit={ handleSignup }>
                        <button type="submit" className='signup-button demo-button'>Sign Up</button>
                    </form>
                </div>

            {showEdit && (
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

                        <button type="submit" className='edit-button demo-button'>Edit Opportunity</button>
                    </form>

                    <div className='delete-button-div button'>
                        <form onSubmit={ handleDelete }>
                            <button type="submit" className='delete-button demo-button'>Delete Opportunity</button>
                        </form>
                    </div>


                </div>
            )}
        </div>
    )
}

export default Opportunity;
