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
        showComponent: false
    };


    async componentDidMount() {
        this.setState({
            user: localStorage.getItem('token'),
        })
    }



    handleSensorChange = async (sensor) => {
        const fetchedSensorMock = await fetchSensorMock(sensor);
        const fetchedAlertDetails = await fetchAlertDetails(sensor);
        console.log(fetchedSensorMock)
        this.setState({ data: fetchedSensorMock, sensor: sensor, alertData: fetchedAlertDetails,showComponent: true  });

    }
    render() {
        const { data, sensor,alertData,showComponent } = this.state;
        let chartandtable;

        if(showComponent){
            chartandtable =(
                <div>
                    <Chart data={data} /><br/><br/>
                    <h6 >Notification Messages</h6>
                    <Table data={alertData} />
                </div>
            )
        } else {
            chartandtable =(
                <div>No Data</div>
            )

        }
        //Main
        if(this.state.user){
            return (
                <div>
                    <h5>Hi {this.state.user}!</h5>
                    <p>Select the sensor ID to display the chart & table</p><SensorDropdown handleSensorChange={this.handleSensorChange} />
                    {chartandtable}
                </div>
            )
        }
        return (
            <h2>You are not logged in</h2>
        )
    }
}
