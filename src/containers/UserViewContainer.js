import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';
import UserDashboard from '../components/UserDashboard';

export default class UserViewContainer extends Component { 
    // need method to fetch post new subscription or update subscription
    
    render() {
        return <div>
            <h1>{this.props.session.toUpperCase()} Container</h1>
            <UserDashboard user={this.props.user}/>
            <CoursesContainer courses={this.props.courses} session={this.props.session}/>
        </div>
    }
}
