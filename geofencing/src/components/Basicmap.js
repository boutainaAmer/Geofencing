import React, { useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import osm from "./osm-providers";



const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 36.7762, lng:  3.05997 });
    const ZOOM_LEVEL = 9;
    const [mapLayers, setMapLayers] = useState([]);

    //create a geofence 
    const _onCreate = (e) => {
      console.log(e);
      const { layerType, layer } = e;
      if (layerType === "circle") {
        const { _leaflet_id } = layer;
        //A method to show/hide a maplayer on the map
        setMapLayers((layers) => [
          ...layers,
          { id: _leaflet_id, radius: layer.getRadius(), center:layer.getConfig()}
        ]);
      }
    };
  
    const _onEdited = (e) => {
      console.log(e);
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id, editing }) => {
        setMapLayers((layers) =>
          layers.map((l) =>
            l.id === _leaflet_id
              ? { ...l, latlngs: { ...editing.latlngs[0] } }
              : l
          )
        );
      });
    };
  
    const _onDeleted = (e) => {
      console.log(e);
      const {
        layers: { _layers },
      } = e;
  
      Object.values(_layers).map(({ _leaflet_id }) => {
        setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
      });
    };
   
    return (
      <>
        <div className="row">
            <div className="col">
             
              <MapContainer center={center} zoom={ZOOM_LEVEL} 
                          style={{  height: 600 , width: "100%",marginTop: 15,marginRight: 15 }}>
                             <FeatureGroup>
                             <EditControl
                    position="topright"
                    onCreated={_onCreate}
                    onEdited={_onEdited}
                    onDeleted={_onDeleted}
                    draw={{
                      circlemarker: false,
                      marker: false,

                    }}
                  />
                </FeatureGroup>
                              <TileLayer
                                  url={osm.maptiler.url}
                                  attribution={osm.maptiler.attribution}
                              />
                          </MapContainer>
                          
                          <pre className="text-left">{JSON.stringify(mapLayers, 0, 2)}</pre>
             
            </div>     
        </div>
      </>
    );
  };
  
export default BasicMap;
