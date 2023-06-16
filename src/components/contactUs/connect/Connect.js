import React from 'react'
import './connect.css'
import { EmailOutlined, Facebook, Twitter, WhatsApp } from '@material-ui/icons'


const Connect = () => {
    return (
         <div className='connect-socials'>
            <h4>Connect on socials</h4>

            <div>
            <Facebook /> 
            <a href="http://" target="_blank" rel="noopener noreferrer">facebook</a>
            </div>

            <div>
            <EmailOutlined/>
            <a href="mailto:info@naske.co.ke">send us an Email</a>
            </div>

            <div>
            <Twitter/>
            <a href="http://" target="_blank" rel="noopener noreferrer">tweet</a>
            </div>

            <div> <WhatsApp/>
            <a href="http://api.whatsapp.com? send = +254723341899">whatsApp</a>
            </div>
        </div>
    
    )
}

export default Connect
