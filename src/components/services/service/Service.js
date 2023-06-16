import React from 'react'
import './service.css'

const Service = () => {
    return (
        <div className="service">
            {/* the best image on top plus related services */}
            <h4>Experience beauty session</h4>
            <div className="top-service-wrapper flex-c">
                <img src="" alt="" />
            </div>
            {/* Related services */}

            <div className="related-services">
                <div className='related-services-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='related-services-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='related-services-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='related-services-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='related-services-wrapper'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service
