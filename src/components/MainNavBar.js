import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavBar extends Component {
    

    render() {
        // add teacher route for teacher information/bio
        return (
            <div className="nav main">
                    <NavLink to='/'><button>Home</button></NavLink>
                    <NavLink to='/all-courses'><button>Courses</button></NavLink>
            </div>
        ); 
    }
};

