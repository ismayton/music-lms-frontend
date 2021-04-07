import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONTAINERS
// import ContentContainer from './containers/ContentContainer';
import LoginContainer from './containers/LoginContainer';
import TeacherViewContainer from './containers/TeacherViewContainer';
import UserViewContainer from './containers/UserViewContainer';
import CoursesContainer from './containers/CoursesContainer';

//ACTIONS
import fetchCourses from './actions/fetchCourses';
import changeSession from './actions/changeSession';
import createUser from './actions/createUser';

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses(this.props.session)
    // move this fetch call into each specific container, render that container and fetch on mount
  }

  renderContainer() {
    switch (this.props.session) {
      case "user":
        console.log('user case triggered')
          return <div>
              <h1>User Div Returned</h1>
              <UserViewContainer courses={this.props.courses}/>
          </div>

      case "teacher":
          console.log('teacher case triggered')

          return <div>
              <h1>Teacher Div Returned</h1>
              <TeacherViewContainer courses={this.props.courses}/>
          </div>

      case "logged_out":
        console.log('logged out case triggered')

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
    return (
    <div className="App">
      <header className="App-header">
        <h1>Music LMS App</h1>
      </header>
      <body>
        <LoginContainer changeSession={this.props.changeSession} session={this.props.session}/>
        {this.renderContainer()}
      </body>
    </div>
    );
  }

}
const mapStateToProps = state => {
  return { courses: state.courses, loading: state.loading, session: state.session}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: (params) => dispatch(fetchCourses(params)),
    createUser: (user) => dispatch(createUser(user)),
    changeSession: (session) => dispatch(changeSession(session))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
