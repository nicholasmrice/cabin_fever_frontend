import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Components
import NavBar from './components/nav_bar.js'
import Home from './pages/cabins/home.js'
import ShowCabin from './pages/cabins/show.js'
import NewUser from './pages/users_sessions/new_user.js'
import NewSession from './pages/users_sessions/new_session.js'

class App extends React.Component {
    render = () => {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/show/:id' component={ShowCabin}/>
                        <Route path='/signup' component={NewUser} />
                        <Route path='/login' component={NewSession} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }

}



export default App;
