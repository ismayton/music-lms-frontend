import React, { Component } from 'react';
import TeacherViewContainer from './TeacherViewContainer';
import UserViewContainer from './UserViewContainer';
import LoggedOutViewContainer from './LoggedOutViewContainer';

export default class CoursesContaner extends Component { 
    
    renderContainer() {
        if (this.props.session === 'teacher') {
            return <TeacherViewContainer courses={this.props.courses}/>
        } else if (this.props.session === 'user') {
            return <UserViewContainer courses={this.props.courses} />
        } else {
            return <LoggedOutViewContainer courses={this.props.courses}/>
        }
    }

    render() {
        return <div>{this.renderContainer()}</div>
    }
}
