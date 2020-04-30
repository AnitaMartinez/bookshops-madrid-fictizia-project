import React from 'react'
// import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';

const coordenates = {
    center: {
      lat: 40.4165001,
      lng: -3.7025599
    },
    zoom: 11
  };


const ContainerMap = (props) => {
  return (
    <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={coordenates.center}
          defaultZoom={coordenates.zoom}
        >
            <div
                lat={40.417188}
                lng={-3.703526}
            >
                <p>Soy la Puerta del Sol</p>
            </div>
        </GoogleMapReact>
      </div>
  )
}

export default ContainerMap;
