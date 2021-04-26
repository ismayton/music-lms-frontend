import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';
import UserDashboard from '../components/UserDashboard';
import { Redirect } from 'react-router-dom'

export default class UserViewContainer extends Component { 
    render() {
        if (this.props.user) {
            return <div>
            <h1>Howdy, {this.props.user.username}</h1>
            {/* <UserDashboard user={this.props.user}/> */}
            <CoursesContainer courses={this.props.user.courses} user={this.props.user} createSubscription={this.props.createSubscription} deleteSubscription={this.props.deleteSubscription}/>
        </div>
        } else {
            return <Redirect from="/my-courses" to="/" exact />
        }
    }
}
