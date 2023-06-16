import {Call, Money, Work } from '@material-ui/icons'
import React from 'react'
import './about.css'


import {EmailOutlined, WhatsApp } from '@material-ui/icons'
import {GrFacebookOption} from 'react-icons/gr'

const About = () => {

  return (
    <section className="about-wrapper position-top">
        <div className="about-container">
            <h3>About Us</h3>
            <p className='about'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas enim! Ea earum, magni rem incidunt amet aliquam omnis unde.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non tempore voluptas odit cupiditate veniam, voluptatibus blanditiis soluta expedita possimus voluptatem minus facere aperiam.<br/>Dolore illum laudantium. Recusandae facilis delectus veritatis repudiandae odio sequi molestiae, ab tenetur mollitia vel. Nihil harum illo corrupti officiis nam, consequuntur velit dolor voluptatum? empore consequuntur nemo numquam ipsum inventore laboriosam perspiciatis, quibusdam quidem amet aspernatur consectetur nulla qui. Corporis rem dicta, ipsum illum fuga, expedita nam accusamus alias ipsam, temporibus neque!      
            <br/><br/> Visitor are adviced to visit related Quick Links and find Career Opengs,Order Products,Book Hotels,Tickets much much more</p>
        </div>

        <hr className='line'/>
        
        <div className='why-us'>
          <h3>Why choose us</h3>
          <div className="flex">
              <div className='about-more'>
                <Call/>
                <h4>Professional services</h4>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia optio vitae molestias ea id, voluptas sit temporibus alias ratione omnis. </p>
              </div>
              <div className='about-more'>
                <Money/>
                <h4>Beauty tricks</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis delectus perferendis fugit ut eveniet eius, dolorum unde! Odio, voluptate! </p>
              </div>
              <div className='about-more'>
                <Work/>
                <h4>After Services</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nulla atque? Placeat repellendus praesentium unde distinctio obcaecati recusandae pariatur quam mollitia sed?</p>
              </div>
          </div>
        </div>
       
        {/* social media links */}
        <div className="about-connect">
            <label htmlFor="call">
              <Call className='item-call'/>
              <a href="tel:+25423341899">Call</a>
            </label>
            <label htmlFor="facebook">
              <GrFacebookOption className='item-facebook'/>
              <a href="tel:+">facebook</a>
            </label>
            <label htmlFor="email">
              <EmailOutlined className='item-email'/>
              <a href="mailto:info@naske.co.ke">Email</a>
            </label>
            <label htmlFor="whatsApp">
              <WhatsApp className='item-whatsapp'/>
              <a href="tel:+">whatsApp</a>
            </label>
        </div>

    </section>
  )
}

export default About