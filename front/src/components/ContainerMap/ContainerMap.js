import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from 'prop-types'
import { ContentPopup, Spinner } from '../../components'
import { coordsMadrid, attributionOpenStreetMap } from '../../utils'
import "./ContainerMap.scss";

const ContainerMap = ({ events, userLocation, hasDeniedLocation, isSearchByDistrict }) => {
  const { latitude: latMadrid, longitude: lngMadrid} = coordsMadrid;
  const isUserLocationLoading = Object.keys(userLocation).length === 0
  const zoom = isSearchByDistrict ? 14 : 12

  if(isUserLocationLoading && !hasDeniedLocation) return <Spinner/>

  const firstEventCoordenates = events && events.length > 0 && events[0] && events[0].coordenates
  const latitudeMap = firstEventCoordenates && isSearchByDistrict ? firstEventCoordenates.latitude : userLocation ? userLocation.latitude : latMadrid
  const longitudeMap = firstEventCoordenates && isSearchByDistrict ? firstEventCoordenates.longitude : userLocation ? userLocation.longitude : lngMadrid
  
  return (
    <Map 
      center={[latitudeMap, longitudeMap]} 
      zoom={zoom} 
      className="Map"
    >
      <TileLayer
        url={attributionOpenStreetMap.url}
        attribution={attributionOpenStreetMap.attribution}
      />
      {
        events.map(event => {
          const position = [
            event.coordenates ? event.coordenates.latitude : coordsMadrid.latitude,
            event.coordenates ? event.coordenates.longitude : coordsMadrid.longitude,

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
  userLocation: PropTypes.object,
  hasDeniedLocation: PropTypes.bool,
  isSearchByDistrict: PropTypes.bool,
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
  }))
}

ContainerMap.defaultProps = {
  events: []
}

export default ContainerMap;
