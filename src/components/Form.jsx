import React, {useState} from 'react'
import TicketType from './TicketType'
import PII from './PII'
import CreditCard from './CreditCard'

const Form = ({band}) => {
  const [ticketCount, setTicketCount] = useState({})
  // const [errors, setErrors] = useState([])

  const prices = band.ticketTypes.reduce((previous, value) => ({
    ...previous,
    [value.type]: value.cost
  }), {})

  const handleChange = (evt) => {
    if (Object.keys(prices).includes(evt?.target?.name)) {
      setTicketCount({
        ...ticketCount,
        [evt.target.name]: parseInt(evt.target.value, 10)
      })
    }
  }

  const cost = (
    Object.entries(ticketCount).reduce((previous, [type, value]) => (prices[type] * value) + previous, 0)
  ) || 0

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const target = evt.target
    const values = Array.from(target.elements).map(element => ({
        [element.name]: element.value
    }))

    // handle input validations, if invalid call setErrors
    console.log(values)
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      {band.ticketTypes.map(ticket => <TicketType ticket={ticket} key={ticket.type} />)}
      <h3 className='flex space-between mb-32'>
        <span>Total</span> <span className='normal'>${cost/100}</span>
      </h3>
      <PII />
      <CreditCard />

      <button type='submit'>Get Tickets</button>
    </form>
  )
}

export default Form
