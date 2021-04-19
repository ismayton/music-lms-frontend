import React, { Component } from 'react';
import Course from '../components/Course';


export default class CoursesContaner extends Component { 
    renderCourses() {
        if (this.props.courses.length > 0) {
            return this.props.courses.map( course => <Course course={course} user={this.props.user} createSubscription={this.props.createSubscription} deleteSubscription={this.props.deleteSubscription} /> )
        }
    }

    render() {
        return <div className="courses">
            {this.renderCourses()}
        </div>
    }
}
