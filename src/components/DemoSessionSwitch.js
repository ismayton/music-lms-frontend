import React, { Component } from 'react';

export default class DemoSessionSwitch extends Component {
    state = {
        session: 'logged out'
    }
    
    sessionTypes = ['user', 'teacher', 'logged out']

    renderButtons = () => {
        let selected = this.state.session
        return this.sessionTypes.map( session => 
            <li>
                <button
                    type="radio"
                    id={session}
                    className={`${selected === session ? "selected" : ""}`}
                    name={session} 
                    onClick={event => this.handleClick(event)}>
                    {session}
                </button>
            </li>
        )
    }

    handleClick = event => {
        this.setState({
            session: event.target.name
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.changeSession(this.state.session)
    }

    render() {
        return <form className="session" onSubmit={event => this.handleSubmit(event)}>
            <h4>Session</h4>
            <ul>{this.renderButtons()}</ul>
        </form>
    }
}
