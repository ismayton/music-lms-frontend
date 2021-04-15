import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    
    sessionTypes = ['user', 'teacher', 'logged out']

    renderButton = (navLink) => {
        return <li>
                <button>{navLink}</button>
            </li>
    }

    render() {
        return (
            <div className="session">
                <h4>Session</h4>
                <ul>
                    {this.renderButton(<NavLink to="/">Home</NavLink>)}
                    {this.renderButton(<NavLink to="/login">Log In</NavLink>)}
                    {this.renderButton(<NavLink to="/signup">Sign Up</NavLink>)}
                    {/* {this.renderButton(<NavLink to="/users">Users</NavLink>)}
                    {this.renderButton(<NavLink to="/teachers">Teachers</NavLink>)} */}
                </ul>
            </div>
        ); 
    }
    
};

