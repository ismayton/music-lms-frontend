import React, { Component } from 'react';

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
        let user = {username: this.state.username, password: this.state.password}
          
        fetch('http://127.0.0.1:3001/api/v1/login', {user}, {withCredentials: true})
        .then(response => {
            if (response.logged_in) {
                this.props.handleLogin(response)
                this.redirect()
            } else {
              this.setState({
                errors: response.errors
              })
            }
        })

        .catch(error => console.log('api errors:', error))
        
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
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
