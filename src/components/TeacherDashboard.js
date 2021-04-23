import React, { Component } from 'react';

export default class TeacherDashboard extends Component {
    render() {
        if (this.props.teacher) {
            return <div class="dashboard">
                <h1>{this.props.teacher.username}</h1>
                <ul>
                    <li>Courses: {this.props.teacher.courses.length}</li>
                    <li>Subscriptions: {this.props.teacher.subscriptions.length}</li>
                    <li>Users Subscribed: {this.props.teacher.users.length}</li>
                </ul>
            </div>
        }
    }
}
