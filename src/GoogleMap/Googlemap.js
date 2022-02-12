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
    zoom={14}
    style={mapStyles}
    initialCenter={{ lat: 42.269447, lng: 42.710943}}
    >
     
          <Marker position={{ lat: 42.269447, lng: 42.710943}} />
          
    </Map>
</div>

  );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBAnAL34Oe5QpGq6RvtsQ3ZeoBu5TPiOKg")
  })(MapContainer)
