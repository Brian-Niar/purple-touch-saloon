import React from 'react'
import { Link } from 'react-router-dom'
import './services.css'

const Services = () => {
    return (
        <section className='services'>
            <h3>Explore our services</h3>
            <div className='services-wrapper'>

                <div className="service-item">
                    <img src="" alt="" />
                    <Link to={'/hair'} className="service-link">Hair</Link>
                </div>

                <div className="service-item">
                    <img src="" alt="" />
                    <Link to={'/facial'} className="service-link">Facial</Link>
                </div>

                <div className="service-item">
                    <img src="" alt="" />
                    <Link to={'/manicure'} className="service-link">Manicure</Link>
                </div>

                <div className="service-item">
                    <img src="" alt="" />
                    <Link to={'/pedicure'} className="service-link">Pedicure</Link>
                </div>
            </div>
            
        </section>
    )
}

export default Services
