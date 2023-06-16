import React from 'react'
import './preFooter.css'
import { Link } from 'react-router-dom'
import googlemap from '../../assets/googlemap.jpg'

import {EmailOutlined,LocationOn,PhoneAndroid } from '@material-ui/icons'
import {IoCallOutline} from 'react-icons/io5'





const PreFooter = () => {
  return (

    <div className='prefooter'id='prefooter'>
        <div className="transition prefooter-wrapper">
          {/* QUICK LINKS LIST */}
            <div className="quicklinks">
                <h4>Quick Links</h4>
                <p>
                 <Link to={'/enroll'} className='quicklink'>Book beauty session</Link>
                 </p>
                <p>
                 <Link to={'/contact'} className='quicklink'>Enroll at Purple Touch college</Link></p>
              
                <p> <Link to={'/contact'} className='quicklink'>Contact front desk</Link></p>

                <p> <Link to={'/contact'} className='quicklink'>Follow Us</Link></p>
                  
                <p> 
                  <a href="http://api.whatsapp.com/send?phone=+254723341899">WhatsApp us</a>
                </p>               
  
            </div>
            {/* GOOGLE MAP SHOWING CASTLE ROCK LOCATION */}
            <div className="map">
              <img src={googlemap}  className='map-img' alt='' />
            </div>

            {/* ADRESSES */}
            <div className="contact-address">    
                <h4>Contact Details</h4> 

                <p className='contact-last-child'> <LocationOn/>Location Building Floor Road</p>
                <p> <IoCallOutline/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
                <p> <PhoneAndroid/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
             
                <p> <EmailOutlined/> <a href="mailto:info@naske.co.ke" className='email-link'>info@purpletouch.co.ke</a></p>
            </div>
        </div>
    </div>
  )
}

export default PreFooter