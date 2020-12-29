import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl} from '@material-ui/core';

import { fetchSensorID } from '../services/SensorService';



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
