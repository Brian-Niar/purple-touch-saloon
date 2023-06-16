import React,{useState} from 'react'
import { HomeOutlined,PhoneAndroid , InfoOutlined,  Notifications, Sports, PinDrop} from '@material-ui/icons'
import {NavLink} from 'react-router-dom'
import './sidenav.css'
import { Avatar} from '@material-ui/core'
import { CameraOutlined} from '@material-ui/icons'


const sidenavIcons = {
  home: <HomeOutlined/> ,
  about: <InfoOutlined/>,
  notification: <Notifications/>,
  contact:<PhoneAndroid />,
  sports:<Sports/>,
  arrow: <PinDrop/>,
  avatar:<Avatar/>,
  camera:<CameraOutlined/>
}



const SideNav = ({onClick}) => {
   const [dropDown, setDropDown]= useState(false)
  
    function showMenu() {
    setDropDown(true)
    }
    function closeMenu() {
      setDropDown(false)
     }
 
  return (
    <div className='sidenav transition'>
        <nav onClick={onClick} >
          <NavLink to='/' className='sidenav-link'> {sidenavIcons.home} home</NavLink>
          <NavLink to='/facial' className='sidenav-link'>{sidenavIcons.camera} Facial</NavLink>
          <NavLink to='/hair' className='sidenav-link'> {sidenavIcons.sports }Hair</NavLink>
          <NavLink to='/pedicure' className='sidenav-link'>{sidenavIcons.about} pedicure</NavLink>
          <NavLink to='/manicure' className='sidenav-link'>{sidenavIcons.notification}manicure</NavLink> 
          <NavLink to='/dreadlocks' className='sidenav-link'>{sidenavIcons.notification}DreadLocks</NavLink> 
        </nav>
        <p className='dropdown-menu' onClick={dropDown? closeMenu : showMenu }> {sidenavIcons.arrow} socials</p>
           {
             dropDown 
             ?
             <nav onClick={onClick} className='dropdown-container'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='dropdown-link'>facebook</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='dropdown-link'>instagram</a>
                <a href="http://api.whatsapp.com?send=25423341899"  rel="noopener noreferrer" className='dropdown-link'>whatsaApp</a>
              </nav>
               : 
             null
            }

        <nav onClick={onClick}>
          <NavLink to='/about' className='sidenav-link'>{sidenavIcons.about} About us</NavLink>
          <NavLink to='/contact' className='sidenav-link'>{sidenavIcons.contact}Contact Us</NavLink>
          <NavLink to='/enroll' className='sidenav-admission-link'>{sidenavIcons.avatar1}Learn at Purple Touch</NavLink>
        </nav>
    </div>
  )
}

export default SideNav