const url = 'http://localhost:5000/catalogue'
const urlByDistrict = 'http://localhost:5000/catalogue/district'

const getEvents = () => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resolve(data)
    })
    .catch((err) => reject(err))
})

const getEventsByDistrict = (params) => new Promise((resolve, reject) => {
  fetch(`${urlByDistrict}?${params}`)
    .then((response) => response.json())
    .then((data) => {
      resolve(data)
    })
    .catch((err) => reject(err))
})

export {
  getEvents,
  getEventsByDistrict,
}
