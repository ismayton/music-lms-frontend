import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONTAINERS
import ContentContainer from './containers/ContentContainer';
import LoginContainer from './containers/LoginContainer';
// import TeacherViewContainer from './containers/TeacherViewContainer';
// import UserViewContainer from './containers/UserViewContainer';
// import CoursesContainer from './containers/CoursesContainer';

//ACTIONS
import fetchCourses from './actions/fetchCourses';
import changeSession from './actions/changeSession';
import createUser from './actions/createUser';

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses()
  }

  handleSessionChange = (session) => {
    this.props.changeSession(session)
    this.props.fetchCourses(session)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Music LMS App</h1>
        </header>
        <body>
          <LoginContainer changeSession={this.handleSessionChange} session={this.props.session}/>
          <ContentContainer courses={this.props.courses} session={this.props.session}/>
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
