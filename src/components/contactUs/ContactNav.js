import React from 'react'
import './contactnav.css'

import {NavLink, Link } from 'react-router-dom'
import gmailicon from '../../assets/gmailicon.jpg'

const ContactNav = () => {
    return (
        <div className='explore-contact'>
            <h4>EXPLORE</h4>
            <div className='links-container'>
                <NavLink to={'/contact'} className='explore-contact-navlinks'>Contact us</NavLink>
                <a href="#prefooter" className='explore-contact-navlinks'>find us on map</a>
                <a href="#connect" className='explore-contact-navlinks'>connect on socials</a>
                {/* <NavLink to={'/contact'} className='explore-contact-navlinks'>Connect on socials</NavLink>   */}
              

            </div>
            <ul className='contact-ul'>
                <li>
                <Link to={'/bookings'} className='admission-link'>Enroll now</Link>  
                </li>

                <li className='email-list-item'>
               <img src={gmailicon} alt="" /> 
                <a href="mailto:info@naske.co.ke" className='email-link'>info@purpletouch.co.ke</a>   
                </li>
            </ul>
        </div>
    )
}

export default ContactNav
