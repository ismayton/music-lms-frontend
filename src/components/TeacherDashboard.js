import React, { Component } from 'react';

export default class TeacherDashboard extends Component {
    render() {
        if (this.props.user.username) {
            return <div class="dashboard">
                <h4>Username: {this.props.user.username}</h4>
                <ul>
                    <li>Courses: {this.props.user.courses.length}</li>
                    <li>Subscriptions: {this.props.user.subscriptions.length}</li>
                    <li>Users Subscribed: {this.props.user.users.length}</li>
                </ul>
            </div>
        }
    }
}
