import React, { useState } from "react";
import { useRef } from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";


const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 36.7762, lng:  3.05997 });
    const ZOOM_LEVEL = 9;
  

    return (<>
            <div className="row">
                <div className="col text-center">
                    <h2>React-leaflet - Basic Openstreet Maps</h2>
                    <p>Loading basic map using layer from maptiler</p>
                    <div className="col">
                        <MapContainer center={center} zoom={ZOOM_LEVEL} 
                        style={{  height: 500 , width: "100%"}}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
