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
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

//ACTIONS
import fetchCourses from './actions/fetchCourses';
import createUser from './actions/createUser';
import fetchTeacher from './actions/fetchTeacher';
import fetchUser from './actions/fetchUser';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  // LOGIN HANDLERS //
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    fetch('http://127.0.0.1:3001/api/v1/logged_in')    
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (json.logged_in) {
        this.handleLogin(json)
        this.redirect()
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

  componentDidMount() {
    this.loginStatus()
    this.props.fetchCourses()
  }

  renderSessionStatus = () => {
    if (this.state.isLoggedIn) {
      console.log(this.state.user)
      return <div>
          <h4>Logged In!</h4>
          {/* <h4>Welcome, {this.props.user.username}</h4> */}
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
            {/* <LoginContainer changeSession={this.handleSessionChange} session={this.props.session}/> */}
          </header>
          <body>
            <Route exact path="/" render={() => (<LoggedOutViewContainer {...this.props}/>)} />
            <Route exact path="/login" render={() => (<LoginForm {...this.props} handleLogin={this.handleLogin}/>)} />
            <Route exact path="/signup" render={() => (<SignupForm {...this.props}/>)} />
            <Route path="/users" render={() => (<UserViewContainer {...this.props} />)} />
            <Route path="/teachers" render={() => (<TeacherViewContainer {...this.props} />)} />
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
    createUser: (credentials) => dispatch(createUser(credentials)),
    fetchCourses: () => dispatch(fetchCourses()),
    fetchTeacher: (teacherId) => dispatch(fetchTeacher(teacherId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
