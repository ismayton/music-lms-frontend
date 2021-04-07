import React, { Component } from 'react';

export default class DemoSessionSwitch extends Component {

    state = {
        session: ''
    }

    sessionTypes = ['user', 'teacher', 'logged_out']

    renderButtons = () => {
        let selected = this.props.session
        return this.sessionTypes.map( session => 
            <button 
                type="radio"
                id={session}
                className={`${selected === session ? "selected" : ""}`}
                name={session} 
                onClick={event => this.handleClick(event)}>
                {session}
            </button>
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
        return <form onSubmit={event => this.handleSubmit(event)}>
            {this.renderButtons()}
        </form>
    }
}
