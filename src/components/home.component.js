import React, { Component } from 'react';

import {fetchAlertDetails} from "../services/alertService";
import SensorDropdown from './sensorDropdown';
import Chart from './chart.component';
import Table from './table.component';
import Intro from './intro.component';
import { fetchSensorMock } from '../services/sensorMock';

import '../styles/home.style.css';

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
                    <Table data={alertData} />
                </div>
            )
        } else {
            chartandtable =(
                <div></div>
            )

        }
        //Main
        if(this.state.user){
            return (
                <div className="home-container">
                    <Intro />
                    <div className="options-container">
                        <h3>Hi {this.state.user}!</h3>
                        <p>Select the sensor ID to display the chart & table</p>
                        <div className="dropdown-container">
                            <SensorDropdown handleSensorChange={this.handleSensorChange} />
                        </div>
                    </div>
                        <div className="charttable-container">
                            {chartandtable}
                        </div>
                    
                </div>
            )
        }
        return (
            <div>
                <h2>You are not logged in</h2>
            </div>
        )
    }
}
