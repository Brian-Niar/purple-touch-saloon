import React from 'react'
import './singleService.css'
import { PaymentSharp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const DreadLockServices = () => {
    return (
      <section className='service-section position-top'>
             <div className='service-section-titles'>
            <h3>DreadLocks Services</h3>
        </div>
        <div className="top-section-service-wrapper">
            <div className='service-img-wrapper'>
                <img src="" alt="" />
            </div>

           <div className='service-details'>
             <h4>Professional Dreadlocks</h4>
             <p>Description of the service a client might like appears here. te top side is for the main image and the bottom is for related service depending on your enterprice.
             </p>
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
                    <h5>Baby locks</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>Retouch</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>styling</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>locks extension</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='service-section-item'>
                    <h5>maintenance</h5>
                    <div className='service-section-item-img'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default DreadLockServices
