import React from 'react'

class NavBar extends React.Component {
    render = () => {
        return <div id="navbar">
            <h1 id="logo">Cabin Fever</h1>
            <div id="nav-links-container">
                <p>Sign Up</p>
                <p> / </p>
                <p>Log In</p>
            </div>
        </div>
    }
}

export default NavBar
