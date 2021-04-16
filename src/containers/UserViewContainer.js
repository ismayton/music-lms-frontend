import React, { Component } from 'react';
// import CoursesContainer from './CoursesContainer';
// import UserDashboard from '../components/UserDashboard';

export default class UserViewContainer extends Component { 
    componentDidMount() {
        this.props.fetchUser(2)
    }

    render() {
        return <div>
            <h1>User Container</h1>
            {/* <UserDashboard user={this.props.user}/>
            <CoursesContainer courses={this.props.user.courses} /> */}
        </div>
    }
}
