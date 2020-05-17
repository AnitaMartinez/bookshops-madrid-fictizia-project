import React, { useEffect, useState } from 'react';
import { ContainerMap } from './components'
import './App.css';
import { getEvents } from './api/events'

const getGeolocation = () => {
  const onSuccess = position => {
    console.log(position.coords.latitude, position.coords.longitude);
  }
  const onError = err => {
    console.log(err);
  }
  if('geolocation' in navigator) {
    console.log('active')
    // Aquí, si no lo tiene ya, pide permiso para pedir localización. Y cuando la tiene, la devuelve en unos segundos
    navigator.geolocation.watchPosition(onSuccess, onError);
  } else {
    console.log('not available')
  }
}

const App = () => {

  const [events, setEvents] = useState([])

  useEffect(getGeolocation, []);

  useEffect(() => {
    getEvents().then(data => setEvents(data))
  }, []);

  return (
    <div className="App">
      <p>hola</p>
      { // TODO: quitar esto y poner un loading
        events.length && <ContainerMap events={events} />
      }
      
    </div>
  );
}

export default App;
