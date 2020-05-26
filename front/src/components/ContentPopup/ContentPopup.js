import React from 'react'
import PropTypes from 'prop-types'


const ContentPopup = ({ event }) => {
  const { title, bookshop, dates, recurrence, time } = event
  return (
    <>
        {
          title && <h3>{ title }</h3>
        }
        <h4>{ bookshop ? bookshop : 'Evento online' }</h4>
        {
          dates && <p>{ `Del ${dates.startDate} al ${dates.endDate}` }</p>
        }
        {
          recurrence && (
            <>
              {
                time && <span>{ `${time} horas. ` }</span>
              }
              <span>{ `${recurrence.days}. Frecuencia: ${recurrence.frequency}` }</span>
            </>
          )
        }
        <button>Más información</button>
    </>
  )
}

ContentPopup.propTypes = {
  event: PropTypes.object
}

ContentPopup.defaultProps = {
  events: {}
}

export default ContentPopup;
