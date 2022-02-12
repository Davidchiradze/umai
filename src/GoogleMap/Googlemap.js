import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Googlemap.scss'
const MapContainer  = (props) => {
    const mapStyles = {
        width: '100%',
        height: '600px',
      };
  return (
    <div className='google-map-wrapper'>
    <Map
    google={props.google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: 47.444, lng: -122.176}}
    >
     
          <Marker position={{ lat: 48.00, lng: -122.00}} />
          
    </Map>
</div>

  );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBAnAL34Oe5QpGq6RvtsQ3ZeoBu5TPiOKg")
  })(MapContainer)
