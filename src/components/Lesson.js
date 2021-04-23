import React, { Component } from 'react';

export default class Lesson extends Component {

    renderProgressButton() {
        return <button 
            className="next-lesson" 
            onClick={() => this.props.handleLessonProgress(this.props.lesson.id, this.props.last)}>
                Go Next
            </button>
    }

    renderLastButton() {
        return <button 
            className="last-lesson" 
            onClick={() => this.props.handleLessonProgress(this.props.lesson.id, this.props.last)}>
                Complete Course
            </button>
    }

    render() {
        return <div className="lesson">
            <h3>{this.props.lesson.title}</h3>
            <p className="content">{this.props.lesson.content}</p>
            <p>{this.props.last}</p>
            <iframe className="video" src={this.props.lesson.video_url} title={this.props.lesson.title}></iframe><br></br>
            {this.renderProgressButton()}
        </div>
    }
}
