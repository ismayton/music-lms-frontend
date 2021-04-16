import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    renderNav() {
        if (!this.props.logged_in) {
            return <div>
                <NavLink to='/login'><button>Log In</button></NavLink>
                <NavLink to='/signup'><button>Sign Up</button></NavLink>
            </div>
        } else {
            return <div>
                // WHAT ROUTES DO WE NEED? NEW CONTAINERS //
                <NavLink to='/users'><button>Users</button></NavLink>
                <NavLink to='/teachers'><button>Teachers</button></NavLink>
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

