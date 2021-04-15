import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CONTAINERS
// import ContentContainer from './containers/ContentContainer';
// import LoginContainer from './containers/LoginContainer';
import TeacherViewContainer from './containers/TeacherViewContainer';
import UserViewContainer from './containers/UserViewContainer';
import LoggedOutViewContainer from './containers/LoggedOutViewContainer';

// COMPONENTS 
import NavBar from './components/NavBar';

//ACTIONS
import fetchCourses from './actions/fetchCourses';
// import createUser from './actions/createUser';
import fetchTeacher from './actions/fetchTeacher';
import fetchUser from './actions/fetchUser';

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    return (
      <Router >
        

        <div className="App">
          <header className="App-header">
            <h1>Music LMS App</h1>
            <NavBar {...this.props} />
            {/* <LoginContainer changeSession={this.handleSessionChange} session={this.props.session}/> */}
          </header>
          <body>
            <Route exact path="/" render={() => (<LoggedOutViewContainer {...this.props}/>)} />
            <Route path="/users" render={() => (<UserViewContainer {...this.props} />)} />
            <Route path="/teachers" render={() => (<TeacherViewContainer {...this.props} />)} />
          </body>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { courses: state.courses, loading: state.loading, user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    fetchTeacher: (teacherId) => dispatch(fetchTeacher(teacherId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
