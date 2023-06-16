import React from 'react'
import './explore.css'
import gmailicon from '../../assets/gmailicon.jpg'

import { NavLink } from 'react-router-dom'


const Explore = () => {

  return (
    <div className='explore'>
      <h4>EXPLORE</h4>
      <div className='links-container'>
        
        <NavLink to={'/about'} className='explore-links'>About us</NavLink>
        <NavLink to={'/contact'} className='explore-links'>Contact us</NavLink>
        <NavLink to={'/contact'} className='explore-links'>follow us</NavLink>
      </div>

      <ul>
        <li>
          <NavLink to={'/admissions'} className=' admission-link'>Enroll now</NavLink>  
        </li>
        <li className='email-list-item'>
           <img src={gmailicon} alt="" /> 
            <a href="mailto:info@naske.co.ke" className='email-link'>info@purpletouch.co.ke</a>
        </li>
      </ul>
      
    </div>
  )
}

export default Explore