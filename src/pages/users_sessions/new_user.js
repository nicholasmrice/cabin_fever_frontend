import React from 'react'
// import axios from 'axios'

class NewUser extends React.Component {
    state = {

    }
    render = () => {
        return (
            <div id="new-user-container">
                <h2>New User Sign Up</h2>
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

export default NewUser
