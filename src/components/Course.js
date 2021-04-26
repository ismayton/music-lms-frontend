import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS //
// import LessonsContainer from '../containers/LessonsContainer';
import Lesson from '../components/Lesson'
import CourseTOC from './CourseTOC';
import { NavLink } from 'react-router-dom';

// ACTIONS //
import createSubscription from '../actions/createSubscription';
import deleteSubscription from '../actions/deleteSubscription';
import updateSubscription from '../actions/updateSubscription';

class Course extends Component {
    constructor() {
        super();
        this.state = {
            lesson: null
        }
    }

    componentDidMount() {
        this.showOneLesson(this.props.course.lessons[0].id)
        this.checkForCompletion()
    }

    // SHOW AND HIDE LESSON //
    showOneLesson = lessonId => {
        let shownLesson = this.props.course.lessons.find(lesson => lesson.id === lessonId)
        this.setState({
            lesson: shownLesson
        })
    }

    renderSubscribeButton = () => {
        if (this.props.subscription) {
            let sub = this.props.subscription
            return <button class="unsubscribe" onClick={() => this.props.deleteSubscription(sub.id, sub.user_id)}>Unsubscribe</button>
        } else {
            return <button class="subscribe" onClick={() => this.props.createSubscription(this.props.user.id, this.props.course.id)}>Subscribe</button> 
        }
    }

    nextLessonId() {
        if (this.props.subscription) {
            if (this.state.complete) {
                return this.props.course.lessons[0].id
            }
            return this.props.subscription.lesson_statuses.find(lesson => lesson.status === "").lesson_id
        }
    }

    // USE PROGRESS TO DETERMINE THE NEXT LESSON, OR IF THE COURSE IS COMPLETE //
    handleLessonProgress = (lessonId) => {
        this.props.updateSubscription(lessonId, this.props.subscription.id)
        if (this.finalLesson()) {

        } else if (lessonId === this.lastLessonId() ) {

        }
        else {
            this.showOneLesson(lessonId + 1)
        }
    }

    lastLessonId() {
        if (this.props.subscription) {
            let statuses = this.props.subscription.lesson_statuses
            return statuses[statuses.length - 1].lesson_id
        }
    } 

    checkForCompletion() {
        if (this.props.subscription) {
            let status = !this.props.subscription.lesson_statuses.some(status => status.status === '')
            this.setState({
                complete: status
            })
        }
    }

    finalLesson() {
        let incomplete = this.props.subscription.lesson_statuses.filter(status => status.status === '').length
        return incomplete > 0 ? false : true
    }

    // CONDITIONALLY RENDER COURSE //
    renderButton(course) {
        if (this.props.subscription) {
            return <NavLink to={`/courses/${course.id}`}><button>Go to {course.title}</button></NavLink>
        } else if (this.props.user) {
            return <button class="subscribe" onClick={() => this.props.createSubscription(this.props.user.id, course.id)}>Subscribe</button>
        } else {
            return this.loggedOutButtons()
        }
    }

    loggedOutButtons = () => {
        return <span>To view this course,
                <NavLink to="/login"><button>Log In</button></NavLink>
                or
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
            </span>
    }

    courseContent = () => {
        return <div className="container">
                <div className="course sidebar">
                    <CourseTOC 
                        lessons={this.props.course.lessons} 
                        progress={this.props.subscription.lesson_statuses} 
                        showOneLesson={this.showOneLesson}
                        />
                    {this.renderSubscribeButton()}
                </div>
                { this.state.lesson ? this.renderLesson() : null }
            </div>
    }

    renderLesson = () => {
        return <div className="lesson"><Lesson lesson={this.state.lesson} />
                {this.renderLessonButton(this.state.lesson.id)}
            </div>
    }

    renderLessonButton = (lessonId) => { 
        if (lessonId === this.lastLessonId()) {
            return <button>Complete</button>
        } else {
            return <button 
                className="next-lesson" 
                onClick={() => this.handleLessonProgress(this.state.lesson.id)}>
                Go Next
            </button>
        }
    }
    // HANDLE LESSON PROGRESS WITH COMPLETION //

    render() {
        if (this.props.subscription) {
            return <div className="course">
                <h1>{this.props.course.title}</h1>
                {this.courseContent()}
            </div>
        } else {
            return <div className="course">
                <h1>{this.props.course.title}</h1>
                {this.renderButton()}
            </div>
        }
    }
}

const mapStateToProps = state => {
    return { user: state.user }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        createSubscription: (userId, courseId) => dispatch(createSubscription(userId, courseId)),
        deleteSubscription: (subId, userId) => dispatch(deleteSubscription(subId, userId)),
        updateSubscription: (lessonId, subId) => dispatch(updateSubscription(lessonId, subId))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Course)