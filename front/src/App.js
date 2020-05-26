import React, { useEffect, useState } from 'react';
import { ContainerMap } from './components'
import { getGeolocation } from './utils'

import './App.css';
import { getEvents } from './api/events'



const App = () => {

  const [events, setEvents] = useState([])
  const [userLocation, setUserLocation] = useState([])

  useEffect(() => { // TODO: manage errors --> catch
    getGeolocation().then(value => {
      setUserLocation(value)
    })
    getEvents().then(data => setEvents(data))
  }, []);

  return (
    <div className="App">
      <p>Eventos en las bibliotecas de Madrid</p>
      { // TODO: quitar esto y poner un loading
        events && events.length && (
          <ContainerMap
            events={events}
            userLocation={userLocation}
          />
        )
      }
    </div>
  );
}

export default App;
