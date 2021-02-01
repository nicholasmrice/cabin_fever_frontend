import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render = () => {
        return <div id="navbar">
            <h1 id="logo">Cabin Fever</h1>
            <div id="nav-links-container">
                <Link to={'/signup'}><p>Sign Up</p></Link>
                <p> / </p>
                <Link to={'/login'}><p>Log In</p></Link>
            </div>
        </div>
    }
}

export default NavBar
