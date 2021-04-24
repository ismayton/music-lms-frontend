import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//BRANDING
import logo from './images/hornhippie_logo_primary.png';
import icon from './images/hornhippie_icon_teal CIRCULAR.png';

// CONTAINERS
import CoursesContainer from './containers/CoursesContainer';
import UserViewContainer from './containers/UserViewContainer';
import HomeViewContainer from './containers/HomeViewContainer';
import TeacherViewContainer from './containers/TeacherViewContainer';

// COMPONENTS 
import SessionNavBar from './components/SessionNavBar';
import MainNavBar from './components/MainNavBar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Logout from './components/Logout';

//ACTIONS
import createUser from './actions/createUser';
import loginUser from './actions/loginUser';
import logoutUser from './actions/logoutUser';
import fetchCourses from './actions/fetchCourses';
import fetchTeacher from './actions/fetchTeacher';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  
  componentDidMount() {
    this.props.fetchCourses()
    this.props.fetchTeacher(1)
    // this.fetchMarkdown()
  }

  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
          <img src={icon} class="App-icon" alt="Horn Hippie Icon"/>
            <img src={logo} class="App-logo" alt="Horn Hippie Logo"/>
            <h2 style={{marginTop: '10px'}}>Academy</h2>
            <div className="nav">
              <MainNavBar {...this.props} />
              <SessionNavBar {...this.props} />
            </div>
          </header>
          <body>
            {/* <div class="markdown">
              {this.fetchMarkdown()}
            </div> */}
            <Route exact path="/" render={() => (<HomeViewContainer {...this.props} />)} />
            <Route exact path="/login" render={() => (<LoginForm {...this.props} />)} />
            <Route exact path="/signup" render={() => (<SignupForm {...this.props} />)} />
            <Route path="/all-courses" render={() => (<CoursesContainer {...this.props} />)} />
            <Route exact path="/teacher" render={() => (<TeacherViewContainer teacher={this.props.teacher} />)} />
            <Route path="/my-courses" render={() => (<UserViewContainer {...this.props} />)} />
            <Route path="/logout" render={() => (<Logout {...this.props} />)}/>
          </body>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { courses: state.courses, teacher: state.teacher, user: state.user, loading: state.loading  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser()),
    fetchCourses: () => dispatch(fetchCourses()),
    fetchTeacher: (teacherId) => dispatch(fetchTeacher(teacherId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)