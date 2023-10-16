import React from 'react'


const Header = ({band}) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  const date = (new Date(band.date)).toLocaleString('en-us', options)

  return (
    <div className='header'>
      <h1 className='mb-8 m-0'>{band.name}</h1>
      <p className='mb-2 m-0'>{date}</p>
      <p className='mb-2 m-0'>{band.location}</p>
    </div>
  )
}

export default Header
