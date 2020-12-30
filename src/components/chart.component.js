import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

import styles from '../styles/chart.style.css';



const Chart = ({ data }) => {
  
    const lineChart = (
        data.length
        ? (
        <Line
            data={{
                labels: data.map(({ date }) => date),
               datasets: [{
                    data: data.map(({ data_value }) => {
                        var numb = data_value.match(/\d/g);
                        numb = numb.join("");
                        return  numb
                    }),
                    label: 'Outdoor Temperature',
                    borderColor: '#48426D',
                    fill: 'none'
                }],
            }}
        />) : null
    );

    return (
        <div className="chart-container">
            { lineChart }
        </div>
    )

}

export default Chart;
