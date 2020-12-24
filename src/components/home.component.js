import React, { Component } from 'react';

export default class Home extends Component {
    state = {};

    componentDidMount() {
        // const config = {
        //     headers: {
        //         Authorization: 'Bearer' + localStorage.getItem('currentUser')
        //     }
        // };

        this.setState({
            user: localStorage.getItem('token')
        })
    }
    render() {
        if(this.state.user){
            return (
            <h2>Hi {this.state.user}</h2>
            )
        }
        return (
            <h2>You are not logged in</h2>
        )
    }
}