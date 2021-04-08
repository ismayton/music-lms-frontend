import React, { Component } from 'react';

export default class CourseTOC extends Component {
  
    renderMenu = () => {
        return this.props.lessons.map( (lesson, index) => 
            <li>
                <button type="radio" id={index} name={lesson.title} onClick={event => this.props.showOneLesson(event)}>
                    {lesson.title}
                </button>
            </li>
        )
    }

    render() {
        return <div className="course-nav">
            <h4>Choose a Lesson</h4>
            <ul>
                {this.renderMenu()}
                <button type="button" onClick={event => this.props.showAllLessons(event)}>{this.props.hiddenOrShown ? "Hide All Lessons" : "Show All Lessons"}</button>
            </ul>
        </div>
    }
}
