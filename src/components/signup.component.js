import React, { Component } from "react";
import ReactPhone from './reactPhone';
import axios from 'axios';

export default class SignUp extends Component {

      handleChange = event => {
        this.setState({ username: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ mobile: event.target.value });
        this.setState({ password: event.target.value });
      }

      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          username: this.state.username,
          email: this.state.email,
          mobile: this.state.mobile,
          password: this.state.password
        };

        axios.post(`http://localhost:8081/users/signup`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }    
    
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" name="username" onChange={this.handleChange.bind(this)} placeholder="User name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange.bind(this)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Mobile number</label>
                    <ReactPhone />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange.bind(this)} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}


