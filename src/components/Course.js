import React, { Component } from 'react';
import LessonsContainer from '../containers/LessonsContainer'
import CourseTOC from './CourseTOC'
import { Link } from 'react-router-dom';

export default class Course extends Component {
    constructor(props) {
        super();
        this.state = {
            showHideLessons: false,
            shownLessons: props.course.lessons
        }
    }

    // SHOW AND HIDE LESSONS //
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

    // HANDLE SUBSCRIPTION CHANGES //
    subscribed() {
        if (this.props.user && this.props.user.subscriptions.length > 0) {
            return this.props.user.courses.some(course => course.id === this.props.course.id)
        } else {
            return false
        }
    }
    
    renderSubscribeButton = () => {
        if (this.subscribed()) {
            let sub = this.props.user.subscriptions.find(userSub => userSub.course_id === this.props.course.id)
            return <button class="unsubscribe" onClick={() => this.props.deleteSubscription(sub.id, this.props.user.id)}>Unsubscribe</button>
        }
         else {
            return <button class="subscribe" onClick={() => this.props.createSubscription(this.props.user.id, this.props.course.id)}>Subscribe</button> 
        }
    }
    
    // CONDITIONAL RENDERING OF COURSE //
    renderSubscribedCourse = () => {
        return <div className="course">
            <div className="course sidebar">
                {this.renderSubscribeButton()}
                <CourseTOC lessons={this.props.course.lessons} showAllLessons={this.showAllLessons} hiddenOrShown={this.state.showHideLessons} showOneLesson={this.showOneLesson}/>
            </div>
            <h1>{this.props.course.title}</h1>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.state.shownLessons} /> : null }
        </div>
    }

    renderUnsubscribedCourse = () => {
        return <div className="course">
            
            <div className="course sidebar">{this.renderSubscribeButton()}</div>
            <h1>{this.props.course.title}</h1>
            {/* <CourseTOC lessons={this.props.course.lessons} showAllLessons={this.showAllLessons} hiddenOrShown={this.state.showHideLessons} showOneLesson={this.showOneLesson}/>
            { this.state.showHideLessons ? <LessonsContainer lessons={this.state.shownLessons} /> : null } */}
        </div>
    }

    renderLoggedOut = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <span>To view this course,
                <Link to="/login"><button>Log In</button></Link>
                or
                <Link to="/signup"><button>Sign Up</button></Link>
            </span>
        </div>
    }

    render() {
        if (this.subscribed()) {
            return <>{this.renderSubscribedCourse()}</>
        } else if (this.props.user) {
                return <>{this.renderUnsubscribedCourse()}</>
        } else {
            return <>{this.renderLoggedOut()}</>
        }
    }
}
