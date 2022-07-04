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
    const _onCreate = (e) => {
      console.log(e);
  
      const { layerType, layer } = e;
      if (layerType === "polygon") {
        const { _leaflet_id } = layer;
  
        setMapLayers((layers) => [
          ...layers,
          { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
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
              <p>i'm here</p>
              <MapContainer center={center} zoom={ZOOM_LEVEL} 
                          style={{  height: 700 , width: 1240 }}>
                             <FeatureGroup>
                             <EditControl
                    position="topright"
                    onCreated={_onCreate}
                    onEdited={_onEdited}
                    onDeleted={_onDeleted}
                    draw={{
                      rectangle: false,
                      polyline: false,
                      circle: false,
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
