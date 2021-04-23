import React, { Component } from 'react';

export default class CourseTOC extends Component {
  
    lessonStatus(lessonId) {
        if (this.props.progress){
            let progress = this.props.progress.find(progress => progress.lesson_id === lessonId)
            return progress.status
        }
    }

    renderMenu = () => {
        return this.props.lessons.map( (lesson, index) => 
            <li>
                <button 
                    type="radio" 
                    className={this.lessonStatus(lesson.id)} 
                    id={index} 
                    name={lesson.title} 
                    onClick={() => this.props.showOneLesson(lesson.id)
                }> {lesson.title}
                </button>
            </li>
        )
    }

    render() {
        return <div className="course-nav">
            <h4>Lessons</h4>
            <ul>
                {this.renderMenu()}
                {/* <button type="button" onClick={event => this.props.showAllLessons(event)}>
                    {this.props.hiddenOrShown ? "Hide All Lessons" : "Show All Lessons"}
                </button> */}
            </ul>
        </div>
    }
}
