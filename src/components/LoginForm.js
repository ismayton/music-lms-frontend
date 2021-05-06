import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
        this.props.loginUser(user)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        if (this.props.user) {
            return <Redirect from="/login" to="/" exact />
        }
        return (
            <div>
                <h1>Log in to your Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Your Username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Your Password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
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
