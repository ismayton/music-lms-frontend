import React, { Component } from 'react';

export default class SignUp extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // fetch request to find user and check password
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Choose a Username"
                    value={this.state.username} 
                    onChange={event => this.handleChange(event)} 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Choose a Password"
                    value={this.state.password} 
                    onChange={event => this.handleChange(event)} 
                />
                <input type="submit" />
            </form>
        )
    }
}