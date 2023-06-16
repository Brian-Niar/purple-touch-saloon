import React from 'react'
import { Link } from 'react-router-dom'
import './career.css'
const Career = () => {


    return (
        <div className='career-wrapper position-top' >
            <div className='career'>
                <h3>
                    Career Page
                </h3>
                <p>
                    purple Touch Beauty spa is a diverse saloon which on a regular looks for skills, knowledge, talent and zeal to work with us in offering the best beauty services and  to better, improve and uplhold standards, values ethics of Purple Touch in order to deliver only the best services to our esteemed clients.
                    <br/>
                    <br/>
                    Purple Touch is not just a beauty spa but also offers variety of courses to people who want to pursue beauty as a profession.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, architecto?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, odio. lorem10

                </p>
                {/* <div className="apply-career">
                   <button>Apply</button>
                </div> */}
                <div className='career-links'>
                    <Link to={'/vacancy'} className='career-attachment'>work with us</Link>
                    <Link to={'/enroll'} className='career-enroll'>Enroll at Purple Touch Beauty College</Link>
                    <Link to={'/vacancy'} className='career-attachment'>Apply for attachment</Link>
                </div>
            </div>
        </div>
    )
}

export default Career
