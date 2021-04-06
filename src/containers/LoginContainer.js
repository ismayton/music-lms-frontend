import React, { Component } from 'react';
import SignUp from '../components/SignUp';

export default class LoginContainer extends Component { 
    renderMessage() {
        if (this.props.session.user) {
            return <h1>Logged in!</h1>
        } else {
            return <h1>Please Sign Up or Log In</h1>
        }
    }
    render() {
        return <div>
            {this.renderMessage()}
            <SignUp createUser={this.props.createUser}/>
        </div>
    }
}
