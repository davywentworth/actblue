import React from 'react'

const CreditCard = () => {
  return (
    <div className='mb-16'>
      <h4 className='normal-case bold'>Payment Details</h4>
      <input className='w-100 mb-4' name="pan" placeholder='0000 0000 0000 0000' />
      <div className="flex mb-4">
        <input className='w-100 mr-2' name="exp" placeholder='MM / YY' />
        <input className='w-100 ml-2' name="cvv" placeholder='CVV' />
      </div>
    </div>
  )
}

export default CreditCard
