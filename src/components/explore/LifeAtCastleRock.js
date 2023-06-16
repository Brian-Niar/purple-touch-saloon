import React from 'react'
import './explore.css'
import gmailicon from '../../assets/gmailicon.jpg'

import { NavLink } from 'react-router-dom'

const LifeAtCastleRock = () => {
    return (
     <div className='explore'>
        <h4>EXPLORE</h4>
        <div className='links-container'>
            
            <NavLink to={'/casterly-life'} className='explore-links' style={{color:'crimson'}}>Life at Castle Rock</NavLink>
            <NavLink to={'/gallery'} className='explore-links'>Castle Media</NavLink>
            <NavLink to={'/contact'} className='explore-links'>Castle Socials</NavLink>
            <NavLink to={'/notice'} className='explore-links'>Noticeboard</NavLink>
            <NavLink to={'/contact'} className='explore-links'>Contact Us</NavLink>
        </div>

        <ul>
            <li>
            <NavLink to={'/admissions'} className='admission-link'>online admission</NavLink>  
            </li>
            <li className='email-list-item'>
            <img src={gmailicon} alt="" /> 
                <a href="mailto:info@naske.co.ke" className='email-link'>info@castlerock.sc.ke</a>
            </li>
            <li>
            <NavLink to={'/error'} className='students-portal-link'>Students Portal</NavLink>
            </li>
        </ul>
      
    </div>
    )
}

export default LifeAtCastleRock
