import React from 'react'
import  './clientsReviews.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import { Star } from '@material-ui/icons'


const ClientsReviews = () => {
    return (
        <div className='client-reviews-container'>
            <h3>Clients Reviews</h3>
            <div className='stars'>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        <div className='client-reviews-wrapper transition'>

            <div className='client-review transition'>
                <div className='client-review-info-wrapper'>
                    <div className="client-review-img-wrapper">
                        <img src='' alt="" />
                    </div>

                    <div className='client-review-header'>
                        <h4>Makeba florence</h4>
                    </div>
                </div>
                <p className='client-review-p'>
                <FaQuoteLeft/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illo facilis tempore facilis tempor doloribus nostrum aperiam quasi similique exercitationem
                <FaQuoteRight/>

                </p>
            </div>

            <div className='client-review transition'>
                <div className='client-review-info-wrapper'>
                    <div className="client-review-img-wrapper">
                        <img src='' alt="" />
                    </div>

                    <div className='client-review-header'>
                        <h4>Ashley brown</h4>
                    </div>
                </div>
                <p className='client-review-p'>
                <FaQuoteLeft/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illo facilis tempore facilis tempor doloribus nostrum aperiam quasi similique exercitationem
                <FaQuoteRight/>

                </p>
            </div>

            <div className='client-review transition'>
                <div className='client-review-info-wrapper'>
                    <div className="client-review-img-wrapper">
                        <img src='' alt="" />
                    </div>

                    <div className='client-review-header'>
                        <h4>Angie kai</h4>
                    </div>
                </div>
                <p className='client-review-p'>
                <FaQuoteLeft/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illo facilis tempore facilis tempor doloribus nostrum aperiam quasi similique exercitationem
                <FaQuoteRight/>

                </p>
            </div>

        </div>
        </div>
    )
}

export default ClientsReviews
