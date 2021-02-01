import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Components
import Home from './pages/cabins/home.js'
import ShowCabin from './pages/cabins/show.js'
import NavBar from './components/nav_bar.js'

class App extends React.Component {
    render = () => {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/show/:id' component={ShowCabin}/>
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }

}



export default App;
