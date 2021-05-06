import React, { Component } from 'react';
import marked from 'marked';

export default class Lesson extends Component {
  
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
    let div = document.getElementById(`${this.props.lesson.id}-markdown`)
    div.innerHTML = rawMarkup
  }

  render() {
    this.fetchMarkdown()
    return <div className="markdown" id={this.props.lesson.id + '-markdown'}></div>
  }
}