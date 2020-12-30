import React, { Component } from 'react';

import mainLogo from '../images/mainLogo.png';

import '../styles/intro.style.css';

export default class Intro extends Component {

    render (){
        return(
            <div className="banner">
                <h1 className="title">Monitor temperature<br/>remotely.</h1>
                <img className="logo" src={mainLogo} />
                <div className="desc">
                    <p>This is a dummy temperature monitor to understand the concept of IOT.<br/>
                    It monitors and alerts the user based on the sensor readings.</p>
                </div>
            </div>
        )
    }
}