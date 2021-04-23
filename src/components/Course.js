import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS //
// import LessonsContainer from '../containers/LessonsContainer';
import Lesson from '../components/Lesson'
import CourseTOC from './CourseTOC';
import { Link } from 'react-router-dom';

// ACTIONS //
import createSubscription from '../actions/createSubscription';
import deleteSubscription from '../actions/deleteSubscription';
import updateSubscription from '../actions/updateSubscription';

class Course extends Component {
    constructor() {
        super();
        this.state = {
            showHideLessons: false,
            shownLesson: null,
            complete: false
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
            showHideLessons: true,
            shownLesson: shownLesson
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
        if (this.state.complete) {
            this.showOneLesson(this.props.course.lessons[0].id)
        } else if (lessonId === this.lastLessonId()) {
            this.showOneLesson(this.nextLessonId())
        } else {
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
        console.log('remaining lessons to complete: ')
        return incomplete > 0 ? false : true
    }

    // CONDITIONALLY RENDER COURSE //
    renderSubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <div className="course sidebar">
                <CourseTOC 
                    lessons={this.props.course.lessons} 
                    progress={this.props.subscription.lesson_statuses} 
                    showAllLessons={this.showAllLessons} 
                    hiddenOrShown={this.state.showHideLessons} 
                    showOneLesson={this.showOneLesson}
                    />
                {this.renderSubscribeButton()}
            </div>
            
            { this.state.showHideLessons ? <Lesson 
                lesson={this.state.shownLesson} 
                // showOneLesson={this.showOneLesson} 
                handleLessonProgress={this.handleLessonProgress}
                last={this.finalLesson()}
                /> : null }
        </div>
    }

    renderUnsubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <div className="course sidebar">{this.renderSubscribeButton()}</div>
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
        if (this.props.subscription) {
            return <>{this.renderSubscribedCourse()}</>
        } else if (this.props.user) {
                return <>{this.renderUnsubscribedCourse()}</>
        } else {
            return <>{this.renderLoggedOut()}</>
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