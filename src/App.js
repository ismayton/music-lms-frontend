import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CONTAINERS
import CoursesContainer from './containers/CoursesContainer';

// COMPONENTS 
import SessionNavBar from './components/SessionNavBar';
import MainNavBar from './components/MainNavBar'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Logout from './components/Logout'

//ACTIONS
import createUser from './actions/createUser';
import loginUser from './actions/loginUser';
import logoutUser from './actions/logoutUser';
import fetchCourses from './actions/fetchCourses';
import createSubscription from './actions/createSubscription'
import deleteSubscription from './actions/deleteSubscription'
// import fetchUser from './actions/fetchUser';
// import fetchTeacher from './actions/fetchTeacher';

//BRANDING
import logo from './images/hornhippie_logo_primary.png'
import icon from './images/hornhippie_icon_teal CIRCULAR.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  // LOGIN HANDLERS //
  loginStatus = () => {
    fetch('http://127.0.0.1:3001/api/v1/logged_in')    
    .then(response => response.json())
    .then(json => {
      if (json.logged_in) {
        this.handleLogin(json)
        this.redirect()
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  componentDidMount() {
    this.loginStatus()
    this.props.fetchCourses()
  }

  

  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
          <img src={icon} class="App-icon" alt="Horn Hippie Icon"/>
            <img src={logo} class="App-logo" alt="Horn Hippie Logo"/>
            <h2 style={{marginTop: '10px'}}>Academy</h2>
            <SessionNavBar {...this.props} />
          </header>
          <div className="nav main">
            
            <MainNavBar {...this.props} />
          </div>
          <body>
            <Route exact path="/" render={() => (<CoursesContainer {...this.props} />)} />
            <Route exact path="/login" render={() => (<LoginForm {...this.props} />)} />
            <Route exact path="/signup" render={() => (<SignupForm {...this.props} />)} />
            <Route path="/all-courses" render={() => (<CoursesContainer {...this.props} />)} />
            <Route path="/my-courses" render={() => (<CoursesContainer {...this.props} />)} />
            <Route path="/logout" render={() => (<Logout {...this.props} />)}/>
          </body>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { courses: state.courses, loading: state.loading, user: state.user }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser()),
    fetchCourses: () => dispatch(fetchCourses()),
    createSubscription: (userId, courseId) => dispatch(createSubscription(userId, courseId)),
    deleteSubscription: (subId, userId) => dispatch(deleteSubscription(subId, userId))
    // not needed? //
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchTeacher: (teacherId) => dispatch(fetchTeacher(teacherId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
