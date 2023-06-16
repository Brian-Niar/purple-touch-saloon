import React from 'react'
import { useNavigate } from 'react-router-dom'
import './reUse.css'
import { Link } from 'react-router-dom'



const ReUse = ({name}) => {
  const navigate = useNavigate()
  return (
    <div className='re-use'>
      <div className='re-use-wrapper'>
        <h3>{name}</h3>
        <p>services</p>
        <div className='re-use-items'>
          <div className='re-use-item'>
            <img src='' alt=""/>
            <button className='re-use-btn'onClick={()=> navigate('/hair')} >Retouch</button>
          </div>
          <div className='re-use-item'>
            <img src='' alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/facial')}>Make up</button>
          </div>
          <div className='re-use-item'>
            <img src='' alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/hair')}>Plaiting</button>
          </div>
          <div className='re-use-item'>
            <img src='' alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/hair')}>Shaving</button>
          </div>
          <div className='re-use-item'>
            <img src='' alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/hair')}>Blow dry</button>
          </div>
          <div className='re-use-item'>
            <img src='' alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/hair')}>Repair</button>
          </div>
          <span className='last-item'>
            <Link to={'/contact'} className='last-item-link'>Contact us</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReUse