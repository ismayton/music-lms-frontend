import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'
import CourseTOC from './CourseTOC'

export default class Course extends Component {
    constructor(props) {
        super();
        this.state = {
            showHideLessons: false,
            shownLessons: props.course.lessons
        }
    }

    showAllLessons = event => {
        this.setState({
            showHideLessons: !this.state.showHideLessons,
            shownLessons: this.props.course.lessons
        })
    }

    showOneLesson = event => {
        this.setState({
            showHideLessons: true,
            shownLessons: [this.props.course.lessons[event.target.id]]
        })
    }
    
    render() {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <CourseTOC lessons={this.props.course.lessons} showAllLessons={this.showAllLessons} hiddenOrShown={this.state.showHideLessons} showOneLesson={this.showOneLesson}/>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.state.shownLessons} /> : null }
        </div>
    }
}
