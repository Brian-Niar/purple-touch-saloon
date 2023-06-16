import React from 'react'
import './products.css'

const Products = () => {
    // belt of diffrent products used fro diffrent sevices list on home page

    return (
        <div className='products-list-container flex-c'>
        <div className='products-list-wrapper'>

                <h3>Explore Products</h3>
                <div className="products">
                    <span className="products-item">Miadi</span>
                    <span className="products-item">Shampoo</span>
                    <span className="products-item">Kuza</span>
                    <span className="products-item">Polish</span>
                    <span className="products-item">Gel</span>
                    <span className="products-item">Coconut Oil</span>
                </div>
        </div>
        </div>
    )
}

export default Products
