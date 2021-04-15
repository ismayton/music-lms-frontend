import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';
import TeacherDashboard from '../components/TeacherDashboard';

export default class TeacherViewContainer extends Component { 
    componentDidMount() {
        console.log('component mounted, fetching teacher')
        this.props.fetchTeacher(2)
    }

    render() {  
        if ( this.props.user == null) {return <div></div>} else {
            return <div>
                <h1>Teacher Container</h1>
                <TeacherDashboard user={this.props.user} />
                <CoursesContainer courses={this.props.user.courses} />
            </div>
        }   
    }
}
