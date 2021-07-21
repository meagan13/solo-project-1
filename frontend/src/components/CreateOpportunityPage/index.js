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
            <form onSubmit={ handleSubmit }>
                <input
                    type="integer"
                    placeholder="Nonprofit Id"
                    value={ nonprofitId }
                    onChange={ updateNonprofitId }
                />
                <input
                    type="integer"
                    placeholder="Location Id"
                    value={ locationId }
                    onChange={ updateLocationId }
                />
                <input
                    type="integer"
                    placeholder="Category Id"
                    value={ categoryId }
                    onChange={ updateCategoryId }
                />
                <input
                    type="text"
                    placeholder="Opportunity Name"
                    value={ oppName }
                    onChange={ updateOppName }
                />

                <input
                    type="date"
                    placeholder="Date"
                    value={ oppDate }
                    onChange={ updateOppDate }
                />

                <input
                    type="integer"
                    placeholder="Capacity"
                    value={ capacity }
                    onChange={ updateCapacity }
                />

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default CreateOpportunityPage;
