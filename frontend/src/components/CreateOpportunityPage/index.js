import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateOpportunity.css';
import { createOpportunity } from '../../store/opportunity';

function CreateOpportunityPage() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const [nonprofitId, setNonprofitId] = useState(0);
    const [locationId, setLocationId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [oppName, setOppName] = useState('');
    const [oppDate, setOppDate] = useState('');
    const [capacity, setCapacity] = useState(0);

    const updateNonprofitId = (e) => setNonprofitId(e.target.value);
    const updateLocationId = (e) => setLocationId(e.target.value);
    const updateCategoryId = (e) => setCategoryId(e.target.value);
    const updateOppName = (e) => setOppName(e.target.value);
    const updateOppDate = (e) => setOppDate(e.target.value);
    const updateCapacity = (e) => setCapacity(e.target.value);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            nonprofitId,
            locationId,
            categoryId,
            oppName,
            oppDate,
            capacity
        };

        //console.log('Payload:', payload)

        //the return value of the thunk, newOpportunity
        let createdOpportunity = await dispatch(createOpportunity(payload));

        if(createdOpportunity) {
            history.push('/');
            //hideForm();
        }
    }

    return (
        <section className="new-opportunity">
            <h2>Create an Opportunity:</h2>
            <div className='opportunity-form-div'>
                <form onSubmit={ handleSubmit }>
                    {/* <input
                        type="integer"
                        placeholder="User Id"
                        value={ nonprofitId }
                        onChange={ updateNonprofitId }
                    /> */}
                    <div className='select-location create-opp-input'>
                        <select
                            type="select"
                            placeholder="Location Id"
                            value={ locationId }
                            onChange={ updateLocationId }
                        >
                            <option value="0">{ `${ locationId }` }</option>
                            <option value="1">Add locations from store</option>
                        </select>
                    </div>

                    <div className='select-category create-opp-input'>
                        <select
                            type="select"
                            placeholder="Category Id"
                            value={ categoryId }
                            onChange={ updateCategoryId }
                        >
                            <option value="1">Volunteer</option>
                            <option value="2">Learn</option>
                            <option value="3">Advocate</option>
                        </select>
                    </div>

                    <div className='enter-opp-name create-opp-input'>
                        <input
                            type="text"
                            placeholder="Opportunity Name"
                            value={ oppName }
                            onChange={ updateOppName }
                        />
                    </div>

                    <div className='select-date create-opp-input'>
                        <input
                            type="date"
                            placeholder="Date"
                            value={ oppDate }
                            onChange={ updateOppDate }
                        />
                    </div>

                    <div className='enter-capactiy create-opp-input'>
                        <input
                            type="integer"
                            placeholder="Capacity"
                            value={ capacity }
                            onChange={ updateCapacity }
                        />
                    </div>

                    <div className='submit-opp-button'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateOpportunityPage;
