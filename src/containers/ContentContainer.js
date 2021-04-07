import React, { Component } from 'react';
import Course from '../components/Course';
import TeacherViewContainer from './TeacherViewContainer';
import UserViewContainer from './UserViewContainer';
import CoursesContainer from './CoursesContainer';

export default class CoursesContaner extends Component { 
    renderCourses() {
        return this.props.courses.map( course => <Course course={course}/> )
    }

  renderContainer() {
    switch (this.props.session) {
      case "user":
          this.props.fetchCourses({user: 1})
          return <div>
              <h1>User Div Returned</h1>
              <UserViewContainer courses={this.props.courses}/>
          </div>

      case "teacher":
          this.props.fetchCourses({teacher: 2})
          return <div>
              <h1>Teacher Div Returned</h1>
              <TeacherViewContainer courses={this.props.courses}/>
          </div>

      case "logged_out":
          this.props.fetchCourses()
          return <div>
              <h1>Logged Out Div Returned</h1>
              <CoursesContainer courses={this.props.courses}/>
          </div>

      default: <div>
          <h1>Default Div Returned</h1>
      </div>
    }
  }

    render() {
        return <div>
            {this.renderContainer()}
        </div>
    }
}


