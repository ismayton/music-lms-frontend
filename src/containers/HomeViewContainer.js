import React, { Component } from 'react';
import CoursesContainer from './CoursesContainer';
import { Link } from 'react-router-dom';

export default class HomeViewContainer extends Component { 
    render() {
        return <div>
            <h1 className="blurb-title">Welcome to Horn Hippie Media Academy!</h1>
            <div className="blurb">
                <h3>In the fast-paced world of music technology, learning new programs and recording techniques can be a little overwhelming… We are here to help!</h3>
                <h4>Horn Hippie Academy is a great spot to find software tutorials, practice tips, performances, and more!</h4>
                <h4>If your organization needs assistance setting musicians/producers up for successful programming, we are available for private tech lessons, music tech workshops, and individual consulting.</h4>
            </div>
            <CoursesContainer {...this.props} />
        </div>
    }
}
