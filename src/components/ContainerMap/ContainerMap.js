import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./ContainerMap.css";
import { Icon } from "leaflet";

// import PropTypes from 'prop-types'

const coordenates = {
  lat: 40.417147,
  lng: -3.703494,
};

const attributionOpenStreetMap = {
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}


const ContainerMap = (props) => {
  const { lat, lng} = coordenates;
  return (
    <Map center={[lat, lng]} zoom={13}>
      <TileLayer
        url={attributionOpenStreetMap.url}
        attribution={attributionOpenStreetMap.attribution}
      />
      <Marker
          key={'id'}
          position={[ lat, lng ]}
          // onClick={() => console.log('pulsado marker')}
      >
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
      </Marker>
    </Map>
  )
}

export default ContainerMap;
