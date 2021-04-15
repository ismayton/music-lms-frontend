import React, { Component } from 'react';
import Course from '../components/Course';


export default class CoursesContaner extends Component { 
    renderCourses() {
        if (this.props.courses.length > 0) {
            return this.props.courses.map( course => <Course course={course}/> )
        }
    }

    render() {
        return <div className="courses">
            {this.renderCourses()}
        </div>
    }
}
