import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axiosInstance from '../services/axios';

export default class Login extends Component {
    state = {}


    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axiosInstance.post('users/signin', data)
        .then(res => {
            if (Object.keys(res.data).length === 0) {
                this.setState({
                    loggedIn: false,
                    message: "Wrong Credentials!"
                })
            }
            else{
            const token = res.data.name;
            localStorage.setItem('token', token);
            this.setState({
                loggedIn: true
            });
            this.props.setUser(res.data.user);
            console.log(res.data)
            }
            }
        )
        .catch(
            err => {
                console.log("Console error catch")
                console.log(err)
            }
        )
    };

    render(){
        if(this.state.loggedIn){
            return <Redirect to= {'/'} />
        }

        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return (
            <form onSubmit={this.handleSubmit}>
                {error}
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={e => this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
        </form>
        );
    }
}
