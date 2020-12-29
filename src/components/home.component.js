import React, { Component } from 'react';

import {fetchAlertDetails} from "../services/alertService";
import SensorDropdown from './sensorDropdown';
import Chart from './chart.component';
import Table from './table.component';
import { fetchSensorMock } from '../services/sensorMock';

export default class Home extends Component {
    state = {
        data: {},
        alertData :{},
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
        const fetchedAlertDetails = await fetchAlertDetails ();
        this.setState({
            user: localStorage.getItem('token'),
            data: fetchedSensorMock,
            alertData : fetchedAlertDetails
        })
    }

    handleSensorChange = async (sensor) => {
        const fetchedSensorMock = await fetchSensorMock(sensor);
        const fetchedAlertDetails = await fetchAlertDetails(sensor);
        console.log(fetchedSensorMock)
        this.setState({ data: fetchedSensorMock, sensor: sensor, alertData: fetchedAlertDetails });

    }
    render() {
        const { data, sensor,alertData } = this.state;
        if(this.state.user){
            return (
                <div>
                    <h5>Hi {this.state.user}!</h5>
                    <p>Select the sensor ID to display the chart & table</p><SensorDropdown handleSensorChange={this.handleSensorChange} />
                    <Chart data={data} />
                    <Table data={alertData} />
                </div>
            )
        }
        return (
            <h2>You are not logged in</h2>
        )
    }
}
