import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavBar extends Component {
    render() {
        return <div className="main">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/all-courses'>All Courses</NavLink>
            </div>
    }
};

