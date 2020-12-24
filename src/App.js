import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import SensorDropdown from '../src/components/sensorDropdown';
import Nav from './components/nav.component';

import Home from "./components/home.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

export default class App extends Component {

    state ={}

    setUser = user => {
      this.setState({
        user: localStorage.getItem("token")
      });
    }
    

    render() {
        return (
        //  <SensorDropdown/>
        <Router>
          <div className="App">
            <Nav user={this.state.user} setUser={this.setUser}/>

            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path="/" component={() => <Home user={this.state.user} />} />
                  <Route path="/sign-in" component={() => <Login setUser={this.setUser}/>} />
                  <Route path="/sign-up" component={SignUp} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
        );
    }
}
