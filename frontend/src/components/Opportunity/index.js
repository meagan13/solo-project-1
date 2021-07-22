import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Opportunity.css';
import { getOpportunities, editOpp, removeOpp } from '../../store/opportunity';


function Opportunity() {
    const dispatch = useDispatch();
    //const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const { id } = useParams();
    //grab the opportunities out of the store
    const opportunities = useSelector(state => {
        return state.opportunity
    });

    //set up useEffect to get all opportunities into the store
    //useEffect listens for the first change and then loads into the store
    useEffect(() => {
        //dispatch: if function, connects with backend;
        dispatch(getOpportunities())
    }, [dispatch])

    let opportunity = opportunities[id]

    // const [oppName, setOppName] = useState('');
    // const [oppDate, setOppDate] = useState('');
    // const [capacity, setCapacity] = useState(0);
    const [oppName, setOppName] = useState(opportunity?.oppName);
    const [oppDate, setOppDate] = useState(opportunity?.oppDate);
    const [capacity, setCapacity] = useState(opportunity?.capacity);
    const [category, setCategory] = useState(opportunity?.category);

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

    return (
        <>
            <div className='opportunity'>
                <h2>Opportunity: { opportunity?.oppName }</h2>
                <h3>Submitted by: { opportunity?.userId }</h3>
                <h3>Opportunity Date: { (`${opportunity?.oppDate}`).slice(0, 10) }</h3>
                <h3>Capacity: { opportunity?.capacity }</h3>
                {/* <p>Testing the date: { `Data Type: ${ typeof opportunity?.oppDate}` }</p>
                <p>Testing the date: { (`${opportunity?.oppDate}`).slice(0, 10) }</p> */}
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
                    <form>
                        <button type="submit" className='signup-button button'>Sign Up</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Opportunity;
