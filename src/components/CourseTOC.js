import React, { Component } from 'react';

export default class CourseTOC extends Component {
  
    renderMenu = () => {
        return this.props.lessons.map( lesson => 
            <li>
                <button type="radio" id={lesson.title} name={lesson.title}>
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
                <button type="button" onClick={event => this.props.showHideLessons(event)}>{this.props.hiddenOrShown ? "Hide All Lessons" : "Show All Lessons"}</button>
            </ul>
        </div>
    }
}
