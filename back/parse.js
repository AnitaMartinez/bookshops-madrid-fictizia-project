const dayTranslation = {
  MO: 'LU',
  TU: 'MA',
  WE: 'MI',
  TH: 'JU',
  FR: 'VI',
  SA: 'SA',
  SU: 'DO',
};

const parseFrequency = ({ recurrence }) => {
  const { frequency, days } = recurrence;
  switch (frequency) {
    case 'WEEKLY': return {
      days: days.split(',').map((day) => dayTranslation[day]).join(','),
      frequency: 'Semanal',
    };
    default: return {
      days,
      frequency,
    };
  }
};

const parseDate = (string) => {
  const date = new Date(string);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

const parseData = (data) => {
  const eventsData = data['@graph'];
  return eventsData.map((event) => ({
    id: event.id,
    title: event.title ? event.title : null,
    description: event.description ? event.description : null,
    link: event.link ? event.link : null,
    bookshop: event['event-location'] ? event['event-location'] : null,
    audience: event.audience ? event.audience : null,
    coordenates: event.location ? event.location : null,
    address: event.address && event.address.area ? event.address.area : null,
    time: event.time ? event.time : null,
    recurrence: event.recurrence ? parseFrequency(event) : null,
    dates: {
      startDate: event.dtstart ? parseDate(event.dtstart) : null,
      endDate: event.dtend ? parseDate(event.dtend) : null,
    },
  }));
};

module.exports = parseData;
