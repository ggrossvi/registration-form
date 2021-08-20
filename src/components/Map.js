//https://www.telerik.com/blogs/maps-in-react
// https://github.com/google-map-react/google-map-react
//https://tintef.github.io/react-google-places-autocomplete/docs/
//https://github.com/istarkov/google-map-clustering-example

import { GoogleMap, withScriptsjs, Marker, withGoogleMap, InfoWindow } from "react-google-maps";
import * as buddyData from "./buddy.json";
// import mapStyles from "./mapStyles";
// import nodeExternals from 'webpack-node-externals';
import React, { useState, useEffect } from "react";



function Map() {
    const [selectedBuddy, setSelectedBuddy] = useState(null);
    return (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: 47.6062, lng: -122.3321}}
        >
            {buddyData.buddies.map(buddy => (
                <Marker
                    key={buddy.properties.BUDDY_ID}
                    position={{
                        lat: buddy.geometry.coordinates[0],
                        
                        lng: buddy.geometry.coordinates[1]
                    }}
            
                    onClick={() => { setSelectedBuddy(buddy); }}
                    // icon={{
                    //     url: `/skateboarding.svg`,
                    //     scaledSize: new window.google.maps.Size(25, 25)
                    // }}
                />
            ))}

            {selectedBuddy && (
                <InfoWindow
                    onCloseClick={() => { setSelectedBuddy(null); }}
                    position={{
                        lat: selectedBuddy.geometry.coordinates[0],
                        lng: selectedBuddy.geometry.coordinates[1]
                    }}
                >
                    <div>
                        <h2>{selectedBuddy.properties.NAME}</h2>
                        <p>{selectedBuddy.properties.DESCRIPTION}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default Map;