import React from 'react'
import {Link} from 'react-router-dom'
import './display.css'

const Display = () => {
  return (
    <section className='display position-top'>
      <div className='transition display-wrapper'>
        <img src="" alt="" />
        <div className='display-info'>
          <h3 className='display-info-h'>FEELING BEAUTIFUL IS SEEMLESS</h3>
          <p className='display-info-p'>Come and feel the touch</p>
          <Link to={'/bookings'} className='display-btn'>Book Session</Link>
        </div>
      </div>
    </section>
  )
}

export default Display