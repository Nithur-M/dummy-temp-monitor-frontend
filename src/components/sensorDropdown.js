import React, { useState, useEffect } from 'react';

//import Dropdown from 'react-dropdown';
import { NativeSelect, FormControl} from '@material-ui/core';

import { fetchSensorID } from '../services/SensorService';

//import 'react-dropdown/style.css';

const SensorDropdown = ({ handleSensorChange }) => {
    const [fetchedSensorID, setFetchedSensorID] = useState([]);

    useEffect(() => {
        const fetchID = async () => {
            setFetchedSensorID(await fetchSensorID());
        }

        fetchID();
    }, [setFetchedSensorID]);

    
    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleSensorChange(e.target.value)}>
                <option value="global">Select Sensor ID</option>
                {fetchedSensorID.map((sensor, i) => <option key={i} value={sensor}>{sensor}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default SensorDropdown;