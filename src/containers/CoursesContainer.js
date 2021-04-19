import React, { Component } from 'react';
import Course from '../components/Course';


export default class CoursesContaner extends Component { 
    renderCourses() {
        if (this.props.courses.length > 0) {
            return this.props.courses.map( course => <Course course={course} user={this.props.user} subscribed={this.subscribed(course.id)} /> )
        }
    }

    subscribed(courseId) {
        if (this.props.user) {
            let userSubscriptions = this.props.user.subscriptions
            return userSubscriptions.some(userCourse => userCourse.id === courseId)
        } else {
            return false
        }
    }

    render() {
        return <div className="courses">
            {this.renderCourses()}
        </div>
    }
}
