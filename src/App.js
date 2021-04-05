import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoursesContainer from './containers/CoursesContainer'
import fetchCourses from './actions/fetchCourses'

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
        <CoursesContainer courses={this.props.courses}/>
      </body>
    </div>
    );
  }

}
const mapStateToProps = state => {
  return { courses: state.courses, loading: state.loading}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: () => dispatch(fetchCourses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
