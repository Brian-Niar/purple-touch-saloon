import React from 'react'
import '.response.css'
const Response = ({res}) => {
    return (
        <div className='res'>
            <span>
            {res}
            </span>
            <Link to={'/'} className ='return-home'>Go back to home</Link>
         </div>
    )
}

export default Response
