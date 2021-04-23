import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import marked from 'marked';

// CONTAINERS
import CoursesContainer from './containers/CoursesContainer';
import UserViewContainer from './containers/UserViewContainer';
import HomeViewContainer from './containers/HomeViewContainer';
import TeacherViewContainer from './containers/TeacherViewContainer';

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
  
  componentDidMount() {
    this.loginStatus()
    this.props.fetchCourses()
    // this.fetchMarkdown()
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

  // DONT FORGET!! TRANSITION LESSONS FROM DB ATTRIBUTES TO GITHUB .MD FILES WITH EMBEDS //
  // fetchMarkdown = () => {
  //   let user = 'ismayton'
  //   let repo = 'horn-hippie-lessons'
  //   let path = 'course-1-lesson-1.md'
  //   let url = `https://raw.githubusercontent.com/${user}/${repo}/main/${path}`
  //   let configObj = {
  //     Headers: {'accept':'application/vnd.github.v3.raw'}
  //   }
    
  //   fetch(url, configObj)
  //   .then(response => response.text())
  //   .then(text => this.renderMarkdown(text))
  // }

  // renderMarkdown = (text) => {
  //   let rawMarkup = marked(text)
  //   let div = document.querySelector(".markdown")
  //   div.innerHTML = rawMarkup
  // }

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
            <Route path="/my-courses" render={() => (<UserViewContainer {...this.props} />)} />
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
