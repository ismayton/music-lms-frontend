import React, { Component } from 'react';
import marked from 'marked';

export default class Lesson extends Component {

  componentDidMount() {
    this.fetchMarkdown()
  }

  fetchMarkdown = () => {
    let configObj = {
      Headers: {'accept':'application/vnd.github.v3.raw'}
    }
    fetch(this.props.lesson.markdown_url, configObj)
    .then(response => response.text())
    .then(text => this.renderMarkdown(text))
  }

  renderMarkdown = (text) => {
    let rawMarkup = marked(text)
    // return { __html: rawMarkup }
    let div = document.getElementById(`${this.props.lesson.id}-markdown`)
    div.innerHTML = rawMarkup
  }

    renderProgressButton() {
        return <button 
            className="next-lesson" 
            onClick={() => this.props.handleLessonProgress(this.props.lesson.id)}>
                Go Next
            </button>
    }

    renderLastButton() {
        return <h3>You have Completed the Course!</h3>
    }

    render() {
        return <div className="lesson">
            {/* <h3>{this.props.lesson.title}</h3>
            <p className="content">{this.props.lesson.content}</p> */}
            {/* <iframe className="video" src={this.props.lesson.video_url} title={this.props.lesson.title}></iframe><br></br> */}
            <div className="markdown" id={this.props.lesson.id + '-markdown'}></div>
            {!this.props.last ? this.renderProgressButton() : this.renderLastButton()}
        </div>
    }
}
