import React from 'react'
import mapboxgl from 'mapbox-gl'

class FindACabin extends React.Component {
    state = {
        lat: 39,
        lng: -95,
        zoom: 3,
    }


    componentDidMount = () => {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render = () => {
        return (
            <div id="find-a-cabin-container">
                <div id="find-a-cabin-nav">
                    <h2>Find A Cabin</h2>
                </div>
                <div>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
                <div id='map-geo' className='map'> </div>

            </div>
        )
    }
}

export default FindACabin
