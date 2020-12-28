import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Nav extends Component {
    
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.setUser(null);
    };
    
    render() {
        let buttons;

        if(this.props.user){
            buttons =(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"} onClick={this.handleLogout}>Logout</Link>
                    </li>
                </ul>
            )
        } else {
            buttons =(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                </ul>
            )

        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}><h5>Temp Monitor</h5></Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        {buttons}
                    </div>
                </div>
            </nav>
        )
    }
}