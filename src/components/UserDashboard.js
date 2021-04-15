import React, { Component } from 'react';

export default class UserDashboard extends Component {
    render() {
        return <div class="dashboard">
            <h4>Username: {this.props.user.username}</h4>
            <ul>
                {/* <li>Subscriptions: {this.props.user.subscriptions.length}</li> */}
                <li>Progress: Insert Progress Here</li>
            </ul>
        </div>
    }
}
