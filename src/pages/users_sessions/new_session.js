import React from 'react'
// import axios from 'axios'

class NewSession extends React.Component {
    state = {

    }
    render = () => {
        return (
            <div id="new-session-container">
                <h2>Log In</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" />
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="text" />
                </form>
            </div>
        )
    }
}

export default NewSession
