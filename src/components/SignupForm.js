import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUpForm extends Component {
    state = {
        username: "",
        password: "",
        password_confirmation: ""
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let user = {user: {username: this.state.username, password: this.state.password, password_confirmation: this.state.password_confirmation}}
        this.props.createUser(user)
        this.setState({
            username: "",
            password: "",
            password_confirmation: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Sign up for an Account</h1>
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
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        placeholder="Confirm Password"
                        value={this.state.password_confirmation} 
                        onChange={event => this.handleChange(event)} 
                    />
                    <button type="submit">Submit</button>
                    <div>
                        or <br/><Link to="/login"><button>Log In</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}
