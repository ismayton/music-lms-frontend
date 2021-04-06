import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoursesContainer from './containers/CoursesContainer'
import fetchCourses from './actions/fetchCourses'
import LoginContainer from './containers/LoginContainer'
import createUser from './actions/createUser'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchCourses()
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Music LMS App</h1>
      </header>
      <body>
        <LoginContainer session={this.props.session} createUser={this.props.createUser}/>
        <CoursesContainer courses={this.props.courses}/>
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
    fetchCourses: () => dispatch(fetchCourses()),
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
