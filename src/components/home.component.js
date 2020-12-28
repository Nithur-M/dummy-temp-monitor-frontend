import React, { Component } from 'react';

import SensorDropdown from './sensorDropdown';
import Chart from './chart.component';
import { fetchSensorMock } from '../services/sensorMock';

export default class Home extends Component {
    state = {
        data: {},
        sensor: '',
    };

    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
    }

    async componentDidMount() {
        // const config = {
        //     headers: {
        //         Authorization: 'Bearer' + localStorage.getItem('currentUser')
        //     }
        // };

        const fetchedSensorMock = await fetchSensorMock();

        this.setState({
            user: localStorage.getItem('token'),
            data: fetchedSensorMock,
        })
    }

    handleSensorChange = async (sensor) => {
        const fetchedSensorMock = await fetchSensorMock(sensor);
        
        this.setState({ data: fetchedSensorMock, sensor: sensor });
    }
    render() {
        const { data, sensor } = this.state;
        if(this.state.user){
            return (
                <div>
                    <h5>Hi {this.state.user}!</h5>
                    <p>Select the sensor ID to display the chart & table</p><SensorDropdown handleSensorChange={this.handleSensorChange} />
                    <Chart data={data} />
    
                </div>
            )
        }
        return (
            <h2>You are not logged in</h2>
        )
    }
}