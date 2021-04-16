import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
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
        let user = {user: {username: this.state.username, password: this.state.password}}
        
        let configObj = {
            method: 'POST',
            headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch('http://127.0.0.1:3001/api/v1/login', configObj)
        .then(response => response.json())
        .then(json => console.log(json))
        
        this.props.handleLogin(user)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Log in to your Account</h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Your Username"
                        value={this.state.username} 
                        onChange={event => this.handleChange(event)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Your Password"
                        value={this.state.password} 
                        onChange={event => this.handleChange(event)} 
                    />
                    <button type="submit">Submit</button><br/>
                    <div>
                        or <br/><Link to="/signup"><button>Sign Up</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}
