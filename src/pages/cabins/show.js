import React from 'react'
import axios from 'axios'

class ShowCabin extends React.Component {
    state = {
        address: '',
        description: '',
        image_url: '',
        amenities: '',
    }
    // Read/Show Cabin
    showCabin = () => {
        axios
        .get('/cabins/' + this.props.match.params.id)
        .then((res) => {
            this.setState({
                address: res.data.address,
                description: res.data.description,
                image_url: res.data.image_url,
                amenities: res.data.amenities,
            })
        })
    }
    // Update Cabin
    updateCabin = (event) => {
        event.preventDefault()
        event.target.reset()
        axios
            .put('/cabins/' + event.target.id, this.state)
            .then((res) => {
                this.getCabins()
            })
    }
    // Delete Cabin
    deleteCabin = (event) => {
        axios
        .delete('/cabins/' + event.target.value)
        .then((res) => {
            this.getCabins()
        })
    }
    componentDidMount = () => {
        this.showCabin()
    }
    render = () => {
        return (
            <div id="show-cabin-container">
                <h2>This Cabin</h2>
                <h3>Address: {this.state.address}</h3>
                <img src={this.state.image_url} alt="cabin"/>
                <h5>Description: {this.state.description}</h5>
                <h5>Amenities: {this.state.amenities}</h5>
            </div>
        )
    }
}

export default ShowCabin
