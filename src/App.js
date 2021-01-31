import React from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Components
import Home from './pages/cabins/home.js'
import ShowCabin from './pages/cabins/show.js'
import NavBar from './components/nav_bar.js'

class App extends React.Component {
    state = {
        address: '',
        description: '',
        cabins: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    // Create
    createCabin = (event) => {
        event.preventDefault()
        axios
            .post('/cabins', this.state)
            .then((res) => {this.getCabins()})
    }
    // Read
    getCabins = () => {
        axios
            .get('/cabins')
            .then((res) => {
                this.setState({
                    cabins: res.data,
                    address: '',
                    description: ''
                })
            })
            .catch((err) => {console.log(err)})
    }
    // Update
    updateCabin = (event) => {
        event.preventDefault()
        event.target.reset()
        axios
            .put('/cabins/' + event.target.id, this.state)
            .then((res) => {
                this.getCabins()
            })
    }
    // Delete
    deleteCabin = (event) => {
        axios
        .delete('/cabins/' + event.target.value)
        .then((res) => {
            this.getCabins()
        })
    }
    componentDidMount = () => {
        this.getCabins()
    }
    render = () => {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/show' component={ShowCabin} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }

}



export default App;
