import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Locations.css';
import { getLocations } from '../../store/locations';

function GetLocations() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch])

    // const [locationName, setLocationName] = useState(location?.locationName);
    // const [address, setAddress] = useState(location?.address);
    // const [city, setCity] = useState(location?.city);
    // const [state, setState] = useState(location?.state);
    // const [zip, setZip] = useState(location?.zip);
    // const [lat, setLat] = useState(location?.lat);
    // const [long, setLong] = useState(location?.long);

    // const updateLocationName = (e) => setLocationName(e.target.value);
    // const updateAddress = (e) => setAddress(e.target.value);
    // const updateCity = (e) => setCity(e.target.value);
    // const updateState = (e) => setState(e.target.value);
    // const updateZip = (e) => setZip(e.target.value);
    // const updateLat = (e) => setLat(e.target.value);
    // const updateLong = (e) => setLong(e.target.value);

    return (
        <h2>This is a test</h2>
    )
}

export default GetLocations;
