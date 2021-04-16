import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    renderNav() {
        if (!this.props.user) {
            return <div>
                <NavLink to='/login'><button>Log In</button></NavLink>
                <NavLink to='/signup'><button>Sign Up</button></NavLink>
            </div>
        } else {
            // WHAT ROUTES DO WE NEED? NEW CONTAINERS //
            return <div>
                <NavLink to='/all-courses'><button>All Courses</button></NavLink>
                <NavLink to='/my-courses'><button>My Courses</button></NavLink>
                <NavLink to='/logout'><button>Log Out</button></NavLink>
            </div>
        }
    }

    render() {
        return (
            <div className="session">
                <h4>Session</h4>
                <ul>
                    <NavLink to='/'><button>Home</button></NavLink>
                    {this.renderNav()}
                </ul>
            </div>
        ); 
    }
};

