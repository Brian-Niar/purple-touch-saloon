import { Share, ShoppingCartOutlined, Star, Wifi } from '@material-ui/icons'
import React from 'react'
import  './promotions.css'
const Promotions = () => {
    return (
        <div className='promotions-container flex-c'>
        <div className='promotions-wrapper'>
            <div className='promotion-header'>
                <Star/>
                <h4>Promotions</h4>
            </div>
            <ul className='promotions-ul'>
                <li>Free hair repair</li>
                <li>Free locks retouch for new customers</li>
                {/* <li>Free deliver for orders above Ksh 2000</li> */}
                <li><Wifi/> Enjoy free wi-fi and waiting lounge</li>
                <li>
                    <ShoppingCartOutlined/>
                    Buy any purple touch product and enjoy 15% discount
                </li>
            </ul>
            <div className='promo-btns'>
                <button disabled="disabled" className='promo-explore-btn'>explore services</button>
                <button disabled="disabled" className='share-btn'>
                    share
                    <Share/>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Promotions
