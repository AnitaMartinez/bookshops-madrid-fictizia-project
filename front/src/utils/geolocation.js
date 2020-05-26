
export const getGeolocation = () => {
    return new Promise((resolve, reject) => {
      if('geolocation' in navigator) {
        navigator.geolocation.watchPosition(
          value => {
            resolve({
              latitude: value.coords.latitude,
              longitude: value.coords.longitude
            })
          },
          error => {
            reject(error)
          }
        );
      } else {
        // TODO: esto mandarlo en el reject o en el resolve, pero si no se queda pending
        console.log('Geolocation not available')
      }
    })
  }