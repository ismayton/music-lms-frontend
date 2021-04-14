import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';
import TeacherDashboard from '../components/TeacherDashboard';

export default class TeacherViewContainer extends Component { 
    render() {
        return <div>
            <h1>Teacher Container</h1>
            <TeacherDashboard {...this.props} />
            <CoursesContainer courses={this.props.courses} />
        </div>
    }
}
