import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';

export default class UserViewContainer extends Component { 
    render() {
        return <div>
            <h1>User Container</h1>
            <div className="blurb">
                <h4>User specific features will go here. Things like:</h4>
                <ul>
                    <li>listing of all subscribed courses</li>
                    <li>profile and information</li>
                </ul>
            </div>
            <CoursesContainer courses={this.props.courses} />
        </div>
    }
}
