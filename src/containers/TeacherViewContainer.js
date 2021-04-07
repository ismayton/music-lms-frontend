import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';

export default class TeacherViewContainer extends Component { 
    render() {
        return <div>
            <h1>Teacher Container</h1>
            <div className="blurb">
                <h4>Teacher specific features will go here. Things like:</h4>
                <ul>
                    <li>listing of all owned courses</li>
                    <li>listing of all subscribed users</li>
                </ul>
            </div>
            <CoursesContainer courses={this.props.courses} />
        </div>
    }
}
