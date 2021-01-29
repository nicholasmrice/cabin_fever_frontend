import React from 'react'
import axios from 'axios'

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
        <React.Fragment>
            <h1>Create a Cabin</h1>
            <form onSubmit={this.createCabin}>
                <label htmlFor="address">Address</label>
                <input id="address" type="text" onChange={this.handleChange} value={this.state.address}/>
                <br/>
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onChange={this.handleChange} value={this.state.description}/>
                <br/>
                <input type="submit" value="Create New Cabin"/>
            </form>
            {this.state.cabins.map((cabin) => {
                return <div key={cabin.id}>
                    <h5>Cabin: {cabin.address}</h5>
                    <h5>Description: {cabin.description}</h5>
                    <details>
                        <summary>Edit Cabin</summary>
                        <form id={cabin.id} onSubmit={this.updateCabin}>
                            <label htmlFor="address">address</label>
                            <input type="text" id="address" onChange={this.handleChange}/>
                            <br />
                            <label htmlFor="description">description</label>
                            <input type="text" id="description" onChange={this.handleChange}/>
                            <br />
                            <input type="submit" value="Update Cabin"/>
                        </form>
                    </details>
                <button value={cabin.id} onClick={this.deleteCabin}>X</button>
                </div>
            })}
        </React.Fragment>
        )
    }

}



export default App;
