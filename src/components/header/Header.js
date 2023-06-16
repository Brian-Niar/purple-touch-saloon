import './header.css'
import React,{useState} from 'react'
import { Menu } from '@material-ui/icons'
import TopNav from '../topnav/TopNav'
import SideNav from '../sidenav/SideNav'
import Logo from '../logo/Logo'


const Header = () => {
  const [toggle, setToggle]= useState(false)
    function open (){
      setToggle(true)
    };
    function close (){
      setToggle(false);
    };

  return (
    <header>
      <div className='header-wrapper'>
          <div className='logo-section'>
            <Logo/>
            <div className='school-name'>
              <h4>Purple Touch</h4>
              <span>beauty Spa & kinyozi</span>
            </div>
          </div>
          <div className='topnav-section'>
            <TopNav />
            <Menu onClick={open}/>
            {toggle && <SideNav onClick={close}/> }
          </div>
      </div>
    </header>
  )
}

export default Header