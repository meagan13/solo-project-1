import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './CreateOpportunity.css';

function CreateOpportunity() {
    const opportunities = useSelector(state = state.user.opportunity);
    const dispatch = useDispatch();
    const history = useHistory();

    const [nonprofitId, setNonprofitId] = useState(0);
    const [locationId, setLocationId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [oppName, setOppName] = useState('');
    const [date, setDate] = useState('');
    const [capactiy, setCapacity] = useState(0);

    const updateOppName = (e) => setOppName(e.target.value);
    const updateDate = (e) => setDate(e.target.value);
    const updateCapacity = (e) => setCapacity(e.target.value);

    // useEffect(() => {
    //     dispatch(thunkName()?)
    // }, [dispatch])

    // useEffect(() => {
    //     if(opportunities.length && !oppName) {
    //         setOppName(opportunities[0]);
    //     }
    // }, [opportunities, oppName]);

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

        let createdOpportunity = await dispatch(createOpportunity(payload));

        if(createdOpportunity) {
            history.push(`opportunity/${ createdOpportunity.id }`);
            //hideForm();
        }
    }

    return (
        <section className="new-opportunity">
            <form onSubmit={ handleSubmit }>
                <input>
                    type="text"
                    placeholder="Opportunity Name"
                    value={ oppName }
                    onChange={ updateOppName }
                </input>

                <input>
                    type="text"
                    placeholder="Date"
                    value={ date }
                    onChange={ updateDate }
                </input>

                <input>
                    type="integer"
                    placeholder="Capacity"
                    value={ capactiy }
                    onChange={ updateCapacity }
                </input>
            </form>
        </section>
    )
}
