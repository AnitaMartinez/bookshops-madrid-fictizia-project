import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from 'prop-types'
import { ContentPopup, Spinner } from '../../components'
import { coordsMadrid, attributionOpenStreetMap } from '../../utils'
import "./ContainerMap.css";

const ContainerMap = ({ events, userLocation, hasDeniedLocation }) => {
  const { latitude: latMadrid, longitude: lngMadrid} = coordsMadrid;
  const userLocationLoading = Object.keys(userLocation).length === 0

  if(userLocationLoading && !hasDeniedLocation) return <Spinner/>

  return (
    <Map center={[latMadrid, lngMadrid]} zoom={11}>
      <TileLayer
        url={attributionOpenStreetMap.url}
        attribution={attributionOpenStreetMap.attribution}
      />
      {
        events.map(event => {
          const position = [
            event.coordenates ? event.coordenates.latitude : userLocation ? userLocation.latitude : coordsMadrid.latitude,
            event.coordenates ? event.coordenates.longitude : userLocation ? userLocation.longitude : coordsMadrid.longitude,

          ]
          return (
            <Marker
              key={event.id}
              position={position}
              >
                <Popup>
                  <ContentPopup
                    event={event}
                  />
                </Popup>
            </Marker>
          )
        })
      }
    </Map>
  )
}

ContainerMap.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    coordenates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
    id: PropTypes.string.isRequired,
    dates: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string
    }),
    title: PropTypes.string,
    address: PropTypes.object,
    audience: PropTypes.string,
    bookshop: PropTypes.string,
    description: PropTypes.string,
    recurrence: PropTypes.shape({
      days: PropTypes.string,
      frequency: PropTypes.string
    }),
    time: PropTypes.string,
  })),
  userLocation: PropTypes.object,
  hasDeniedLocation: PropTypes.bool
}

ContainerMap.defaultProps = {
  events: []
}

export default ContainerMap;
