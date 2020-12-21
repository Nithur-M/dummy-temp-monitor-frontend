import React from 'react';
//import SensorService from '../services/SensorService';
import { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';

export default class SensorDropdown extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectOptions : [],
            id : "",
            name: ''
        }
    }

    async getOptions(){
        const res = await Axios.get('http://localhost:8081/sensors/getsensor_ids')
        const data = res.data

        const options = data.map(d => ({
            "value" : d.id,
            "label" : d.name
        }))


        this.setState({selectOptions: options})
    }

    handleChange(e){
        this.setState({id:e.value, name:e.label})
    }

    componentDidMount(){
        this.getOptions()
    }

    render(){
        return (
            <Select id="dropdown-basic-button" 
                title="Dropdown button" 
                options={this.state.selectOptions} 
                onChange={this.handleChange.bind(this)}/>
                
        )
    }

}