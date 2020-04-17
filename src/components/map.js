import Leaflet from 'leaflet'
import React  , { Component} from 'react'

class MapIndex extends Component{
    componentDidMount()
    {
        var mymap = Leaflet.map('root').setView([51.505,-0.09],13);
        Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(mymap);
    }
  render()
  {
    return(
      <div id="root"></div>
    )
  }
}

export default MapIndex