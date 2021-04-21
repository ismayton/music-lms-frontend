import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SessionNavBar extends Component {
    renderNav() {
        if (!this.props.user) {
            return <div>
                <NavLink to='/login'><button>Log In</button></NavLink>
                <NavLink to='/signup'><button>Sign Up</button></NavLink>
            </div>
        } else {
            return <div>
                <NavLink to='/my-courses'><button >My Courses <div class="course-count">{this.props.user.courses.length}</div></button></NavLink>
                <NavLink to='/logout'><button>Log Out</button></NavLink>
            </div>
        }
    }

    renderSessionStatus = () => {
        if (this.props.user) {
          let user = this.props.user
          return <div>
              <h5>Welcome, <br/>{user.username}</h5>
            </div>
        } else {
          return <h5>Log in or Sign up to Start</h5>
        }
      }

    render() {
        return (
            <div className="nav session">
                {this.renderSessionStatus()}
                <ul>
                    {this.renderNav()}
                </ul>
            </div>
        ); 
    }
};

