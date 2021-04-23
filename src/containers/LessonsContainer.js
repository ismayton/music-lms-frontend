import React, { Component } from 'react';
import Lesson from '../components/Lesson'

export default class LessonsContainer extends Component { 
    renderLessons() {
        this.props.lessons.map((lesson) => {
            return <Lesson lesson={lesson} handleLessonProgress={this.props.handleLessonProgress}/>
       })
    }

    render() {
        return <div className="lessons">
            {this.renderLessons()}
        </div>
    }
}
