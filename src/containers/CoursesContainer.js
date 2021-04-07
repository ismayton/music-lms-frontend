import React, { Component } from 'react';
import Course from '../components/Course';

export default class CoursesContaner extends Component { 
    renderCourses() {
        return this.props.courses.map( course => <Course course={course}/> )
    }

    render() {
        return <div>
            {this.renderCourses()}
        </div>
    }
}