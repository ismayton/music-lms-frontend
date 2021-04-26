import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


// ACTIONS //
import createSubscription from '../actions/createSubscription';
import deleteSubscription from '../actions/deleteSubscription';
import updateSubscription from '../actions/updateSubscription';

class CoursesContainer extends Component { 

    renderCourses() {
        return this.props.courses.map( course => {
            return <div className="course">
                <h1>{course.title}</h1>
                {this.courseDashboard(course)}
                {this.renderButton(course)}
            </div>
        })
    }

    courseDashboard(course) {
        let sub = this.subscription(course.id)
        if (sub) {
            let count = sub.lesson_statuses.filter(status => status.status === 'complete').length
            return <div>
            <h4>Progress: {count} out of {course.lessons.length} Complete</h4>
        </div>
        } else {
            return <div>
            <h4>Lessons: {course.lessons.length}</h4>
        </div>
        }
    }
    
    // RETURN ACTIVE SUBSCRIPTION OR NULL //
    subscription = (courseId) => {
        if (this.props.user) {
            return this.props.user.subscriptions.find(userSub => userSub.course_id === courseId)
        } else {
            return null
        }
    }

    // RENDER NAV BUTTONS BASED ON SUBSCRIPTION OR SESSION //
    renderButton(course) {
        if (this.subscription(course.id)) {
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

    render() {
        return <div className="courses">
            {this.renderCourses()}
        </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)