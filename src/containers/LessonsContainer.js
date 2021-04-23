import React, { Component } from 'react';
import Lesson from '../components/Lesson'

export default class LessonsContainer extends Component { 
    renderLessons() {
        return this.props.lessons.map( lesson => <Lesson lesson={lesson} handleLessonProgress={this.props.handleLessonProgress}/>)
    }

    render() {
        return <div className="lessons">
            {this.renderLessons()}
        </div>
    }
}
