import React, { Component } from "react";
import ReactPhone from './reactPhone';
import axios from 'axios';

export default class SignUp extends Component {
    state = {
        username: '',
        email: '',
        mobile: '',
        password: '',
      }
      

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


axios({
         method:'post',
         url:'/users/signup',
         params:{
                email: this.state.email,
                password: this.state.password,
                phone_number: this.state.mobile,
                username: this.state.username
            },
         config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        })
        .then(
            //authentication success...
        )
        .catch(error=>{
            var errResp = error.response;
            if(errResp.status === 401){
               //Ex: show login page again...
            }

        })