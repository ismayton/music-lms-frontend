import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTS //
import LessonsContainer from '../containers/LessonsContainer';
import CourseTOC from './CourseTOC';
import { Link } from 'react-router-dom';

// ACTIONS //
// import createSubscription from '../actions/createSubscription';
// import deleteSubscription from '../actions/deleteSubscription';
import updateSubscription from '../actions/updateSubscription';

class Course extends Component {
    constructor(props) {
        super();
        this.state = {
            showHideLessons: false,
            shownLessons: null
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.showOneLesson(this.props.course.lessons[0].id)
    }

    // SHOW AND HIDE LESSONS //
    showAllLessons = event => {
        this.setState({
            showHideLessons: !this.state.showHideLessons,
            shownLessons: this.props.course.lessons
        })
    }

    showOneLesson = lessonId => {
        let shownLesson = this.props.course.lessons.find(lesson => lesson.id === lessonId)
        this.setState({
            showHideLessons: true,
            shownLessons: [shownLesson]
        })

    }

    // HANDLE SUBSCRIPTION CHANGES //
    // I SHOULD FIND A WAY TO GET AROUND HAVING TO CHECK THIS, JUST PASS THE COURSES I SHOULD RENDER //
    // MY COURSES SHOULD RENDER A USER VIEW WITH A COURSES CONTAINER THAT ONLY HAS SUBSCRIBED COURSES //
    subscribed() {
        if (this.props.user && this.props.user.subscriptions.length > 0) {
            return this.props.user.courses.some(course => course.id === this.props.course.id)
        } else {
            return false
        }
    }
    
    subscription = () => {
        return this.props.user.subscriptions.find(userSub => userSub.course_id === this.props.course.id)
    }

    renderSubscribeButton = () => {
        if (this.subscribed()) {
            let sub = this.subscription()
            return <button class="unsubscribe" onClick={() => this.props.deleteSubscription(sub.id, this.props.user.id)}>Unsubscribe</button>
        }
         else {
            return <button class="subscribe" onClick={() => this.props.createSubscription(this.props.user.id, this.props.course.id)}>Subscribe</button> 
        }
    }
    
    handleLessonProgress = (lessonId) => {
        let sub = this.subscription()
        this.props.updateSubscription(lessonId, sub.id)
        this.showOneLesson(lessonId + 1)
    }

    courseProgress = (courseId) => {
        let sub = this.props.user.subscriptions.find(sub => sub.course_id === courseId )
        if (sub) {
            return sub.lesson_statuses
        }
    }

    // CONDITIONAL RENDERING OF COURSE //
    renderSubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <div className="course sidebar">
                <CourseTOC 
                    lessons={this.props.course.lessons} 
                    progress={this.courseProgress(this.props.course.id)} 
                    showAllLessons={this.showAllLessons} 
                    hiddenOrShown={this.state.showHideLessons} 
                    showOneLesson={this.showOneLesson}
                    />
                {this.renderSubscribeButton()}
            </div>
            
            { this.state.showHideLessons ? <LessonsContainer 
                lessons={this.state.shownLessons} 
                showOneLesson={this.showOneLesson} 
                handleLessonProgress={this.handleLessonProgress}
                /> : null }
        </div>
    }

    renderUnsubscribedCourse = () => {
        return <div className="course">
            <h1>{this.props.course.title}</h1>
            <div className="course sidebar">{this.renderSubscribeButton()}</div>
            
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

const mapStateToProps = state => {
    return { user: state.user }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    //   createUser: (user) => dispatch(createUser(user)),
    //   loginUser: (user) => dispatch(loginUser(user)),
    //   logoutUser: () => dispatch(logoutUser()),
    //   fetchCourses: () => dispatch(fetchCourses()),
    //   createSubscription: (userId, courseId) => dispatch(createSubscription(userId, courseId)),
    //   deleteSubscription: (subId, userId) => dispatch(deleteSubscription(subId, userId)),
    updateSubscription: (lessonId, subId) => dispatch(updateSubscription(lessonId, subId))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Course)