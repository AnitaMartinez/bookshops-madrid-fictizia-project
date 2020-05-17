
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

module.exports = parseData
