
const url = 'http://localhost:5000/catalogue'

const getEvents = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch((err) => console.log(err))
    })
}

export {
    getEvents
}