import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./ContainerMap.css";
import { ContentPopup } from '../../components'

// import PropTypes from 'prop-types'

const coordenatesMadrid = {
  latitude: 40.417147,
  longitude: -3.703494,
};

const attributionOpenStreetMap = {
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}


const ContainerMap = (props) => {
  const { latitude: latMadrid, longitude: lngMadrid} = coordenatesMadrid;
  const { events } = props

  return (
    <Map center={[latMadrid, lngMadrid]} zoom={11}>
      <TileLayer
        url={attributionOpenStreetMap.url}
        attribution={attributionOpenStreetMap.attribution}
      />
      {
        events.map(event => {
          console.log('>> event', event)
          return (
            <Marker
              key={event.id}
              position={[ event.location ? event.location.latitude : latMadrid, event.location ? event.location.longitude : lngMadrid ]}
              // onClick={() => console.log('pulsado marker')}
              >
                <Popup>
                  <ContentPopup/>
                </Popup>
              </Marker>
          )
        })
      }
    </Map>
  )
}

export default ContainerMap;
