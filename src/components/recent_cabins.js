import React from 'react'

class RecentCabins extends React.Component {
    render = () => {
        return (
            <div id="recent-cabins-container">
                <h2>Recently Added Cabins</h2>
                <div id="recent-grid-container">
                {this.props.state.cabins.map((cabin) => {
                    return <div key={cabin.id}>
                        <h5>Cabin: {cabin.address}</h5>
                        <h5>Description: {cabin.description}</h5>
                        <details>
                            <summary>Edit Cabin</summary>
                            <form id={cabin.id} onSubmit={this.props.updateCabin}>
                                <label htmlFor="address">address</label>
                                <input type="text" id="address" onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="description">description</label>
                                <input type="text" id="description" onChange={this.props.handleChange}/>
                                <br />
                                <input type="submit" value="Update Cabin"/>
                            </form>
                        </details>
                    <button value={cabin.id} onClick={this.props.deleteCabin}>X</button>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default RecentCabins
