import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONTAINERS
import ContentContainer from './containers/ContentContainer';
import LoginContainer from './containers/LoginContainer';

//ACTIONS
import fetchCourses from './actions/fetchCourses';
import fetchSession from './actions/fetchSession';
import createUser from './actions/createUser';

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses(this.props.session)
  }

  handleSessionChange = (session) => {
    this.props.fetchSession(session)
    this.props.fetchCourses(session)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Music LMS App</h1>
          <LoginContainer changeSession={this.handleSessionChange} session={this.props.session}/>
        </header>
        <body>
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
    fetchCourses: (session) => dispatch(fetchCourses(session)),
    createUser: (user) => dispatch(createUser(user)),
    fetchSession: (session) => dispatch(fetchSession(session))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
