import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TeacherDashboard from '../components/TeacherDashboard';

export default class TeacherViewContainer extends Component { 
    render() { 
        if (this.props.teacher) {
            return <div>
                    <TeacherDashboard teacher={this.props.teacher} />
                </div>
        } else {
            return <Redirect from="/my-courses" to="/" exact />
        }
    }
}
