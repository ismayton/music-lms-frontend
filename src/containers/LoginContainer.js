import React, { Component } from 'react';
// import SignUp from '../components/SignUp';
import DemoSessionSwitch from '../components/DemoSessionSwitch'

export default class LoginContainer extends Component { 
    render() {
        return <div>
            {/* <SignUp createUser={this.props.createUser}/> */}
            <DemoSessionSwitch changeSession={this.props.changeSession} session={this.props.session}/>
        </div>
    }
}
