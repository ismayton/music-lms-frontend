import React, { Component } from 'react';
// import SignUp from '../components/SignUp';
import DemoSessionSwitch from '../components/DemoSessionSwitch'

export default class LoginContainer extends Component { 
    
    renderMessage() {
        switch (this.props.session) {
            case "user":
                return <h1>Welcome, User!</h1>
            case "teacher":
                return <h1>Welcome, Professor!</h1>
            case "logged_out":
                return <h1>You are logged out.</h1>
            default: return <h1>Hello!</h1>
        }
    }
    render() {
        return <div>
            {this.renderMessage()}
            {/* <SignUp createUser={this.props.createUser}/> */}
            <DemoSessionSwitch changeSession={this.props.changeSession} session={this.props.session}/>
        </div>
    }
}
