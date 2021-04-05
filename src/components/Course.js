import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'
export default class Course extends Component {
    render() {
        return <div>
            <h1>{this.props.course.title}</h1>
            <LessonsContainer lessons={this.props.course.lessons} />
        </div>
    }
}
