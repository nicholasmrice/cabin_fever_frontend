import React from 'react'
import axios from 'axios'

class NewUser extends React.Component {
    state = {
        username: '',
        password: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    createUser = (event) => {
        event.preventDefault()
        axios
        .post('/users', this.state)
        .then((res) => {
            this.setState({
                username: '',
                password: '',
            })
        })
    }
    render = () => {
        return (
            <div id="new-user-container">
                <h2>New User Sign Up</h2>
                <form id="new-user-form" onSubmit={this.createUser}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" onChange={this.handleChange} value={this.state.username}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" onChange={this.handleChange} value={this.state.password}/>
                    <br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default NewUser
