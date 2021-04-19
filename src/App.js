import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CONTAINERS
import CoursesContainer from './containers/CoursesContainer';

// COMPONENTS 
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Logout from './components/Logout'

//ACTIONS
import createUser from './actions/createUser';
import loginUser from './actions/loginUser';
import logoutUser from './actions/logoutUser';
import fetchCourses from './actions/fetchCourses';
// import fetchUser from './actions/fetchUser';
// import fetchTeacher from './actions/fetchTeacher';

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

  // handleLogout() {
  //   this.props.logoutUser()
  //   return <Redirect from="/logout" to="/" exact />
  // }

  componentDidMount() {
    this.loginStatus()
    this.props.fetchCourses()
  }

  renderSessionStatus = () => {
    if (this.props.user) {
      let user = this.props.user
      return <div>
          <h4>Logged In!</h4>
          <h4>Welcome, {user.username}</h4>
          <p>You are enrolled in {user.courses ? user.courses.length : 0} Courses</p>
        </div>
    } else {
      return <h4>Logged out...</h4>
    }
  }

  render() {
    return (
      <Router >
        <div className="App">
          <header className="App-header">
            <h1>Music LMS App</h1>
            {this.renderSessionStatus()}
            <NavBar {...this.props} />
          </header>
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
    // not needed? //
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchTeacher: (teacherId) => dispatch(fetchTeacher(teacherId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
