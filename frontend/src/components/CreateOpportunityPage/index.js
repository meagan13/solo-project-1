import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateOpportunity.css';
import { createOpportunity } from '../../store/session';

function CreateOpportunityPage() {
    const dispatch = useDispatch();
    //const opportunity = useSelector(state => state.session.opportunity);
    const history = useHistory();

    const [nonprofitId, setNonprofitId] = useState(0);
    const [locationId, setLocationId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [oppName, setOppName] = useState('');
    const [date, setDate] = useState('');
    const [capacity, setCapacity] = useState(0);

    const updateNonprofitId = (e) => setNonprofitId(e.target.value);
    const updateLocationId = (e) => setLocationId(e.target.value);
    const updateCategoryId = (e) => setCategoryId(e.target.value);
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
            date,
            capacity
        };

        let createdOpportunity = await dispatch(createOpportunity(payload));

        if(createdOpportunity) {
            history.push(`opportunities/${ createdOpportunity.id }`);
            //hideForm();
        }
    }

    return (
        <section className="new-opportunity">
            <form onSubmit={ handleSubmit }>
                <input>
                    type="integer"
                    placeholder="Nonprofit Id"
                    value={ nonprofitId }
                    onChange={ updateNonprofitId }
                </input>
                <input>
                    type="integer"
                    placeholder="Location Id"
                    value={ locationId }
                    onChange={ updateLocationId }
                </input>
                <input>
                    type="integer"
                    placeholder="Category Id"
                    value={ categoryId }
                    onChange={ updateCategoryId }
                </input>
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
                    value={ capacity }
                    onChange={ updateCapacity }
                </input>
            </form>
        </section>
    )
}

export default CreateOpportunityPage;
