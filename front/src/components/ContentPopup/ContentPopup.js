import React from 'react'
import PropTypes from 'prop-types'
import './ContentPopup.scss'

const ContentPopup = ({ event }) => {
  const {
    title, bookshop, dates, recurrence, time, link,
  } = event
  return (
    <div className="ContentPopUp">
      {
          title && <h3 className="title">{ title }</h3>
        }
      <h4 className="bookshop">{ bookshop || 'Evento online' }</h4>
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
      <a href={link} target="_blank" rel="noopener noreferrer" className="link">Más información</a>
    </div>
  )
}

ContentPopup.propTypes = {
  event: PropTypes.object,
}

ContentPopup.defaultProps = {
  event: {},
}

export default ContentPopup
