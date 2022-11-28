import React,{Component} from 'react'
import {GeoJSON, MapContainer} from "react-leaflet"
import roads from "../roads.json"
import "leaflet/dist/leaflet.css"

class Roads extends Component {
  state={}
   render() {
     return(
       <div>
         <MapContainer style={{height:"80vh"}} zoom={9} center={[36.7762, 3.05997]}>
         <GeoJSON data={roads.geometries}/>
         </MapContainer>

         
       </div>
     )
   }
}
export default Roads;
