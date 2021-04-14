import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';


export default class LoggedOutViewContainer extends Component { 
    render() {
        return <div>
            <h1>Logged Out Container</h1>
            <div className="blurb">
                <h4>Logged out specific features will go here. Things like:</h4>
                <ul>
                    <li>listing of all courses</li>
                    <li>listing of all teachers</li>
                    <li>portal to sign up or log in as teacher or user</li>
                </ul>
            </div>
            <CoursesContainer courses={this.props.courses} />
        </div>
    }
}
