import React from 'react'
import axios from 'axios'
// Components
import LandingPage from '../../components/landing_page.js'
import FindACabin from '../../components/find_cabin.js'
import RecentCabins from '../../components/recent_cabins.js'
import SubmitACabin from '../../components/submit_cabin.js'

class Home extends React.Component {
    state = {
        address: '',
        description: '',
        image_url: '',
        amenities: '',
        cabins: [],
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
                    description: '',
                    image_url: '',
                    amenities: '',
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
            <React.Fragment>
                <LandingPage />
                <FindACabin />
                <RecentCabins state={this.state} handleChange={this.handleChange}
                getCabins={this.getCabins} updateCabin={this.updateCabin} deleteCabin={this.deleteCabin} />
                <SubmitACabin state={this.state} handleChange={this.handleChange} getCabins={this.getCabins} createCabin={this.createCabin}/>
            </React.Fragment>
        )
    }
}

export default Home
