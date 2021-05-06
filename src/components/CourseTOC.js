import React, { Component } from 'react';

export default class CourseTOC extends Component {
    state = {
        toggle: false
    }

    lessonStatus(lessonId) {        
        if (this.props.progress){
            if (this.props.active && lessonId === this.props.active.id) {
                return "active"
            }
            let progress = this.props.progress.find(progress => progress.lesson_id === lessonId)
            return progress.status
        }
    }

    renderMenu = () => {
        // let lessons
        // if (this.state.toggle) {
        //     lessons = this.props.lessons.filter(lesson => this.lessonStatus(lesson.id) !== "complete")
        // } else {
        //     lessons = this.props.lessons
        // }

        return this.props.lessons.map( (lesson, index) => {
            return <li>
                <button 
                    type="radio" 
                    className={this.lessonStatus(lesson.id)} 
                    id={index} 
                    name={lesson.title} 
                    onClick={() => this.props.showOneLesson(lesson.id)}
                >
                    {lesson.title}
                </button>
            </li>
        })
    }

    hideFinishedLessons = (event) => {
        this.setState({
            toggle: event.target.checked
        })
    }

    render() {
        return <><h4>Lessons</h4>
            <div className="course-nav">
                {/* <form>
                    <input type="checkbox" onChange={event => this.hideFinishedLessons(event)}></input>
                </form> */}
                <ul>
                    {this.renderMenu()}
                </ul>
            </div>
        </>
    }
}
