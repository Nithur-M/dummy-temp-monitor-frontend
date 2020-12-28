import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

import { fetchSensorMock } from  '../services/sensorMock';

import styles from './chart.style.css';



const Chart = ({ data }) => {
    const [sensorMock, setSensorMock] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setSensorMock(await fetchSensorMock());
        }

        fetchData();
    }, []);


    const lineChart = (
        sensorMock.length
        ? (
        <Line 
            data={{
                labels: data.map(({ date }) => date),
                datasets: [{
                    data: data.map(({ data_value }) => data_value),
                    label: 'Outdoor Temperature',
                    borderColor: '#3333ff',
                    fill: 'none'
                }],
            }}
        />) : null
    );

    return (
        <div className={styles.container}>
            { lineChart }
        </div>
    )

}

export default Chart;