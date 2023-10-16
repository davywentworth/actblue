import React from 'react'

const PII = () => {
  return (
    <div className='mb-16'>
      <div className="flex mb-4">
        <input className='w-100 mr-2' name="firstName" placeholder='First Name' />
        <input className='w-100 ml-2' name="lastName" placeholder='Last Name' />
      </div>
      <input className='w-100' name="address" placeholder='Address' />
    </div>
  )
}

export default PII
