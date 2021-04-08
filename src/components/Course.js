import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'
import CourseTOC from './CourseTOC'

export default class Course extends Component {
    state = {
        showHideLessons: false
    }

    handleClick = event => {
        this.setState({
            showHideLessons: !this.state.showHideLessons
        })
    }
    
    render() {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <CourseTOC lessons={this.props.course.lessons} showHideLessons={this.handleClick} hiddenOrShown={this.state.showHideLessons}/>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.props.course.lessons} /> : null }
        </div>
    }
}
