import React from 'react'

class SubmitACabin extends React.Component {
    render = () => {
        return (
            <div id="submit-cabin-container">
                <h2>Submit Your Own Cabin For Rent</h2>
                <form id="submit-cabin-form" onSubmit={this.props.createCabin}>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={this.props.handleChange} value={this.props.state.address}/>
                    <br/>
                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" onChange={this.props.handleChange} value={this.props.state.description}/>
                    <br/>
                    <input type="submit" value="Create New Cabin"/>
                </form>
            </div>
        )
    }
}

export default SubmitACabin
