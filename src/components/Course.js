import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'
import CourseTOC from './CourseTOC'
import { Link } from 'react-router-dom';

export default class Course extends Component {
    constructor(props) {
        super();
        this.state = {
            showHideLessons: false,
            shownLessons: props.course.lessons,
        }
    }

    renderSubscribeButton = () => {
        console.log(this.props.subscribed)
        if (this.props.subscribed) {
            return <button>Unsubscribe</button>
        } else {
            return <button>Subscribe</button> 
        }
    }

    showAllLessons = event => {
        this.setState({
            showHideLessons: !this.state.showHideLessons,
            shownLessons: this.props.course.lessons
        })
    }

    showOneLesson = event => {
        this.setState({
            showHideLessons: true,
            shownLessons: [this.props.course.lessons[event.target.id]]
        })
    }
    
    renderSubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            {this.renderSubscribeButton()}
            <CourseTOC lessons={this.props.course.lessons} showAllLessons={this.showAllLessons} hiddenOrShown={this.state.showHideLessons} showOneLesson={this.showOneLesson}/>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.state.shownLessons} /> : null }
        </div>
    }

    renderUnsubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            {this.renderSubscribeButton()}
            {/* <CourseTOC lessons={this.props.course.lessons} showAllLessons={this.showAllLessons} hiddenOrShown={this.state.showHideLessons} showOneLesson={this.showOneLesson}/>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.state.shownLessons} /> : null } */}
        </div>
    }

    renderLoggedOut = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <span>To view this course,
                <Link to="/signup"><button>Sign Up</button></Link>
                or
                <Link to="/login"><button>Log In</button></Link>
            </span>
        </div>
    }

    render() {
        if (this.props.subscribed) {
            return <>{this.renderSubscribedCourse()}</>
        } else if (this.props.user) {
                return <>{this.renderUnsubscribedCourse()}</>
        } else {
            return <div>{this.renderLoggedOut()}</div>
        }
    }
}
