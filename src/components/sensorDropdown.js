import React from 'react';
import { Component } from 'react';
//import Select from 'react-select';
import Dropdown from 'react-dropdown';
import axiosInstance from '../services/axios';


import 'react-dropdown/style.css';
import  './style.css'

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
        const res = await axiosInstance.get('/sensors/getsensor_ids')
        const data = res.data


        const options = data.map((item, index) => ({
            "value" : index,
            "label" : item
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
            <div className="Dropdown-container">
            <Dropdown id="dropdown-basic-button"
                className="Dropdown-root"
                title="Dropdown button" 
                placeholder="Select a sensor"
                options={this.state.selectOptions} 
                onChange={this.handleChange.bind(this)}/>
            </div>
                
        )
    }

}