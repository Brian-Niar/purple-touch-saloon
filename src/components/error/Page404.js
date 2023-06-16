import React from 'react'
import NewsLetter from '../newsletter/NewsLetter'
import './page404.css'
const Page404 = () => {
    return (
        <div className='error-container'>
            <div className='error'>
                <h2>JAMBO!!</h2>
                <p>No vacancies available</p>
            </div>
            <NewsLetter/>
        </div>
    )
}

export default Page404
