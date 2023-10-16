import React from 'react'

const TicketType = ({ticket}) => {
  const cost = ticket.cost/100
  return (
    <div className="ticket-type-container">
      <div className="ticket-type">
        <div>
          <h3>
            <label htmlFor={ticket.type}>{ticket.name}</label>
          </h3>
          <p>{ticket.description}</p>
        </div>
        <input
          name={ticket.type}
          id={ticket.type}
          type="number"
          placeholder='0'
          min="0"
        />
      </div>
      <h4>
        ${cost}
      </h4>
    </div>
  )
}

export default TicketType
