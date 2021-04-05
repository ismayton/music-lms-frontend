import React, { Component } from 'react';
import Lesson from '../components/Lesson'

export default class LessonsContainer extends Component { 
    renderLessons() {
       return this.props.lessons.map( lesson => <Lesson lesson={lesson} />)
    }

    render() {
        return <div>
            {this.renderLessons()}
        </div>
    }
}
