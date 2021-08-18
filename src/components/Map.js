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
    const [selectedPark, setSelectedPark] = useState(null);
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
            {buddyData.buddies.map(park => (
                <Marker
                    key={park.properties.PARK_ID}
                    position={{
                        lat: park.geometry.coordinates[1],
                        lng: park.geometry.coordinates[0]
                    }}
                    onClick={() => { setSelectedPark(park); }}
                    // icon={{
                    //     url: `/skateboarding.svg`,
                    //     scaledSize: new window.google.maps.Size(25, 25)
                    // }}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    onCloseClick={() => { setSelectedPark(null); }}
                    position={{
                        lat: selectedPark.geometry.coordinates[1],
                        lng: selectedPark.geometry.coordinates[0]
                    }}
                >
                    <div>
                        <h2>{selectedPark.properties.NAME}</h2>
                        <p>{selectedPark.properties.DESCRIPTION}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default Map;