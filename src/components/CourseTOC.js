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
                }>
                    {lesson.title}
                </button>
            </li>
        )
    }

    render() {
        return <><h4>Lessons</h4>
            <div className="course-nav">
                <ul>
                    {this.renderMenu()}
                </ul>
            </div>
        </>
    }
}
