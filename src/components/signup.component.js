import React, { Component } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../services/axios';


export default class SignUp extends Component {
    state ={};

      handleSubmit = e => {
          if((this.username && this.email && this.mobile && this.password)!=null) {
        const data = {
            name: this.username,
            email: this.email,
            phone_number: this.mobile,
            password: this.password
        };

        axiosInstance.post('/users/signup', data).then(
            res => {
                if (Object.keys(res.data).length === 0) {
                    this.setState({
                        message: "Email already exists!",
                        cls: 'danger'
                    })
                    console.log("ello")
                }
                else{
                this.setState({
                    message: "Registration successful",
                    cls: 'success'
                });
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
          }else{
              alert("Fill the fields")
              e.preventDefault();
          }

    }

    render() {

        let message = '';

        if(this.state.message) {
            const cls = 'alert alert-' + this.state.cls;
            message = (
                <div className={cls}  role="alert">
                    {this.state.message}
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                {message}
                <h3 style={{color: '#312C51'}}>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text"
                    className="form-control"
                    name="username"
                    onChange={e => this.username = e.target.value}
                    placeholder="User name"
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                    className="form-control"
                    name="email"
                    onChange={e => this.email = e.target.value}
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="tel"
                        className="form-control"
                        placeholder="077 7654321"
                        onChange={e => this.mobile = e.target.value}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                    className="form-control"
                    name="password"
                    onChange={e => this.password = e.target.value}
                    placeholder="Enter password"
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}>sign in?</Link>
                </p>
            </form>
        );
    }
}
