import {Link} from 'react-router-dom'
import './topnav.css'
import React from 'react'


const TopNav = () => {
  return (
    <>
      <nav role='navigation' className='top-navbar'>
        <Link to={'/'} className='navlink'>home</Link>
        <Link to={'/hair'} className='navlink'>hair</Link>
        <Link to={'/facial'} className='navlink'>Facial</Link>
        <Link to={'/manicure'} className='navlink'>manicure</Link>
        <Link to={'/pedicure'} className='navlink'>pedicure</Link>
        <Link to={'/dreadlocks'} className='navlink'>Dreadlocks</Link>
        <Link to={'/career'} className='navlink'>Career</Link>
        <Link to={'/about'} className='navlink'>About</Link>
        <Link to={'/contact'} className='navlink contact'>Contact</Link>
        <Link to='/enroll' className='navlink admission'>Enroll</Link>
      </nav>
    </>
  )
}

export default TopNav