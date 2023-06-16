import { PaymentSharp } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './singleService.css'

const FacialServices = () => {
    return (
     <section className='service-section position-top'>
        <div className='service-section-titles'>
            <h3>facial services</h3>
        </div>
        <div className="top-section-service-wrapper">
            <div className='service-img-wrapper'>
                <img src="" alt="" />
            </div>

           <div className='service-details'>
             <h4>Professional facial</h4>
             <p>Description of the service a client might like. te top side is for the main image and the bottom is for related service depending on your enterprice.</p>
             <div className='booking-wrapper'>
                <PaymentSharp/>
                <Link to={'/contact'} className='booking-link'>Book now</Link>
             </div>
           </div>
        </div>

        <div className="service-section-items">
                <h3>Related services</h3>
            <div className="service-section-wrapper">
                <div className='service-section-item'>
                    <h5>make up</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>face scrubbing</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>eyebrows trimming</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>face mask</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>face massage</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            </div>
   </section>
    )
}

export default FacialServices
