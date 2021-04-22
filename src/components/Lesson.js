import React, { Component } from 'react';

export default class Lesson extends Component {

    render() {
        return <div className="lesson">
            <h3>{this.props.lesson.title}</h3>
            <p className="content">{this.props.lesson.content}</p>
            <iframe className="video" src={this.props.lesson.video_url} title={this.props.lesson.title}></iframe><br></br>
            <button className="next-lesson" onClick={() => this.props.handleLessonProgress(this.props.lesson.id)}>Go Next</button>
        </div>
    }
}
