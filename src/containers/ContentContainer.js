import React, { Component } from 'react';
import TeacherViewContainer from './TeacherViewContainer';
import UserViewContainer from './UserViewContainer';
import LoggedOutViewContainer from './LoggedOutViewContainer';

export default class CoursesContaner extends Component { 
    
    renderContainer() {
        if (this.props.session === 'teacher') {
            return <TeacherViewContainer {...this.props}/>
        } else if (this.props.session === 'user') {
            return <UserViewContainer {...this.props} />
        } else {
            return <LoggedOutViewContainer {...this.props}/>
        }
    }

    render() {
        return <div>{this.renderContainer()}</div>
    }
}
