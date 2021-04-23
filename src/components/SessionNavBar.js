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
                <NavLink to='/my-courses'><button>My Courses <span class="course-count">{this.props.user.courses.length}</span></button></NavLink>
                <NavLink to='/logout'><button>Log Out</button></NavLink>
            </div>
        }
    }

    renderSessionStatus = () => {
        if (this.props.user) {
          return <h5>Howdy, {this.props.user.username}!</h5>
        }
      }

    render() {
        return (
            <>
                <div className="greeting">
                    {this.renderSessionStatus()}
                </div>
                <div className="session">
                    {this.renderNav()}
                </div>
            </>
        ); 
    }
};

