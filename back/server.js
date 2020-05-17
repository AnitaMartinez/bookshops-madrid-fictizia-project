const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// TODO: move this functions to a parse file

// const parseDates = (dtstart, dtend) => {
//     console.log('> por aquí')
//     const obj = {
//         startDate: dtstart ?
//             `${dtstart.getFullYear()}-${dtstart.getMonth()}-${dtstart.getDate()}`
//                 : null,
//         endDate: dtend ?
//             `${dtend.getFullYear()}-${dtend.getMonth()}-${dtend.getDate()}`
//                 : null,
//     }
//     console.log('obj', obj)
//     return obj
// }

const parseData = data => {
    const eventsData = data['@graph']
    return eventsData.map(event => {
        return {
            id: event.id,
            title: event.title ? event.title: null,
            description: event.description ? event.description: null,
            link: event.link ? event.link : null,
            bookshop: event['event-location'] ? event['event-location'] : null,
            audience: event.audience ? event.audience : null,
            coordenates: event.location ? event.location : null,
            address: event.address && event.address.area ? event.address.area : null,
            time: event.time ?event.time : null,
            recurrence: event.recurrence ? event.recurrence : null,
            // dates: parseDates(event.dtstart, event.dtend),
        }
    })

}

app.get('/catalogue', function (req, res) {
    axios.get(`https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json`)
        .then(response => {
            const formattedData = parseData(response.data)
            console.log('formattedData', formattedData)
            return formattedData
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => res.send(err))
})


app.listen(port, () => console.log(`Listening on port ${port}`))