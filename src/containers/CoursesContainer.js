import React, { Component } from 'react';
import Course from '../components/Course';


export default class CoursesContaner extends Component { 
    
    subscription = (courseId) => {
        if (this.props.user) {
            return this.props.user.subscriptions.find(userSub => userSub.course_id === courseId)
        } else {
            return null
        }
    }

    renderCourses() {
        return this.props.courses.map( course => {
            return <Course 
                course={course} 
                user={this.props.user} 
                subscription={this.subscription(course.id)}
                createSubscription={this.props.createSubscription} 
                deleteSubscription={this.props.deleteSubscription} 
                />
        })
    }

    render() {
        return <div className="courses">
            {this.renderCourses()}
        </div>
    }
}
