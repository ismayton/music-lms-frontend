import React, { Component } from 'react';

export default class TeacherDashboard extends Component {
    renderCourses() {
        return this.props.teacher.courses.map(course => <div className="course">
            <h2>{course.title}</h2>
            <h4>Subscriptions: {course.subscriptions.length}</h4>
        </div>)
    }
    
    renderUsers() {
        return this.props.teacher.users.map(user => <div className="user">
            <h4>{user.username}</h4>
            <ul>
                <li>Subscriptions:</li>
                {user.courses.map(course => <li>{course.title}</li>)}
            </ul>
        </div>)
    }
    render() {
        if (this.props.teacher) {
            return <div class="dashboard">
                <h1>{this.props.teacher.username}</h1>
                <h1>Courses: {this.props.teacher.courses.length}</h1>
                {this.renderCourses()}
                <h1>Users Subscribed: {this.props.teacher.users.length}</h1>
                {this.renderUsers()}                
            </div>
        }
    }
}
