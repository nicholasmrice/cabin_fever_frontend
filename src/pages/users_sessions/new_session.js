import React from 'react'
import axios from 'axios'

class NewSession extends React.Component {
    state = {
        username: '',
        password: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    createSession = (event) => {
        event.preventDefault()
        axios
            .post('/sessions/', this.state)
            .then((res) => {
                this.setState({
                    username: '',
                    password: '',
                })
            })
    }
    render = () => {
        return (
            <div id="new-session-container">
                <h2>Log In</h2>
                <form onSubmit={this.createSession}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" onChange={this.handleChange}/>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NewSession
