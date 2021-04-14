import React, { Component } from 'react';

export default class TeacherDashboard extends Component {
    logProps() {
        console.log(this.props.user)
    }
    
    render() {
        return <div class="dashboard">
            {this.logProps()}
            <h4>Username: {this.props.user.username}</h4>
            <ul>
                <li>Courses: {this.props.user.courses.length}</li>
                <li>Subscriptions: {this.props.user.subscriptions.length}</li>
                <li>Users Subscribed: {this.props.user.users.length}</li>
            </ul>
        </div>
    }
}
