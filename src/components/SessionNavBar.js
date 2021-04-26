import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SessionNavBar extends Component {
    renderNav() {
        if (!this.props.user) {
            return <div>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
        } else {
            return <div>
                <NavLink to='/my-courses'>My Courses <span class="course-count">{this.courseCount()}</span></NavLink>
                <NavLink to='/logout'>Log Out</NavLink>
            </div>
        }
    }

    courseCount() {
        if (this.props.user.courses) {
            return this.props.user.courses.length
        } else {
            return 0
        }
    }

    renderSessionStatus = () => {
        if (this.props.user) {
          return <h5>Howdy, {this.props.user.username}!</h5>
        }
      }

    render() {
        return <>
                <div className="session">
                    {this.renderNav()}
                </div>
            </> 
    }
};

