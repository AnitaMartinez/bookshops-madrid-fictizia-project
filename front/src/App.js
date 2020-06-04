import React, { useEffect, useState } from 'react';
import { ContainerMap, Input } from './components'
import { getGeolocation } from './utils'
import { getEvents } from './api/events'
import './App.css';

const App = () => {

  const [events, setEvents] = useState([])
  const [userLocation, setUserLocation] = useState([])

  useEffect(() => { // TODO: manage errors --> catch
    getGeolocation().then(value => {
      setUserLocation(value)
    })
    getEvents().then(data => setEvents(data))
  }, []);

  const handleSubmitInput = text => {
    // TODO: hacer la llamada con los params, getEvents, y luego setEvents con el resultado
    console.log(text)
  }

  return (
    <div className="App">
      <p>Eventos en las bibliotecas de Madrid</p>
      <Input onSubmit={handleSubmitInput} />
      <ContainerMap
            events={events}
            userLocation={userLocation}
          />
    </div>
  );
}

export default App;
