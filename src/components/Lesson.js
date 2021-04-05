import React, { Component } from 'react';

export default class Lesson extends Component {

    render() {
        console.log(this.props.lesson.video_url)
        return <div>
            <h3>{this.props.lesson.title}</h3>
            <iframe src={this.props.lesson.video_url} title={this.props.lesson.title}></iframe>
            <p>{this.props.lesson.content}</p>
        </div>
    }
}
