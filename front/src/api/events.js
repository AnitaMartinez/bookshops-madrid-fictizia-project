
const url = 'http://localhost:5000/catalogue'
const urlByDistrict = 'http://localhost:5000/catalogue/district'

const getEvents = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve(data)
        } )
        .catch((err) => console.log(err))
    })
}

const getEventsByDistrict = (params) => {
    return new Promise((resolve, reject) => {
        fetch(`${urlByDistrict}?${params}`)
        .then(response => response.json())
        .then(data => {
            resolve(data)
        } )
        .catch((err) => console.log(err))
    })
}

export {
    getEvents,
    getEventsByDistrict
}