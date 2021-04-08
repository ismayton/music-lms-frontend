import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'

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
        return <div>
            <h1>{this.props.course.title}</h1>
            <button type="button" onClick={event => this.handleClick(event)}>{this.state.showHideLessons ? "Hide Lessons" : "Show Lessons"}</button>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.props.course.lessons} /> : null }
        </div>
    }
}
