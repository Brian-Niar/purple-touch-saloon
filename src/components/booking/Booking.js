import React,{useState} from 'react'
import './booking.css'
import { Link } from 'react-router-dom'

const Booking = () => {
  const [inputs, setInputs] = useState({
    sender:'',
    email:'',
    phone:'',
    event:'',
    message:''
  })
  const [res, setRes] = useState('');

  const handleChange = (e)=>{
    var {name, value} = e.target;
    setInputs({...inputs , [name]:value})
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setRes('thank you for choosing Purple Touch')
    setInputs({
      sender:'',
      email:'',
      phone:'',
      event:'',
      message:''
  })

  }; 
  return (
      <div className='booking-container position-top flex-c'>
      {/* <div className='layout-aside'>
        <Aside/>
      </div> */}
        <div className='booking'>
          <h3>Book your photo | video shoot</h3>
          <form  onSubmit={handleSubmit}>
            <input type="text" name='sender' value={inputs.sender} onChange={handleChange} placeholder='Enter name' />
            <input type="email" name="email" value={inputs.email} onChange={handleChange} id="" placeholder='email@domain.ext'/>
            <input type="text" name='phone' value={inputs.phone} onChange={handleChange} placeholder='Phone' />
            {/* <select name="services" id="serviceslist" className='select-service-dropdown'>
              
              <option value="" className ='first-option-item' >Select Service</option>
              <option value="hair">hair</option>
              <option value="facial">facial</option>
              <option value="facial">dreadlocks</option>
              <option value="manicure">manicure</option>
              <option value="pedicure">pedicure</option>
            </select> */}
            <textarea name="message" id="" cols="30" rows="10" value={inputs.message} onChange={handleChange} placeholder='Type here ...'></textarea>
    
            <button type="submit">SUBMIT</button>
          </form>
          {res &&
            <p className='res'>
              <span>
              {res}
              </span>
              <Link to={'/'} className ='return-home'>Go back to home</Link>
             </p>
          }
        </div>
    </div>
  )
}

export default Booking