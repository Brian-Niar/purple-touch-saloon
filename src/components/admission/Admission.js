import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import { Phone } from '@material-ui/icons'
import './admission.css'
import { Link } from 'react-router-dom'
import Explore from '../explore/Explore'


const Admission = () => {
  const [inputs, setInputs] = useState({
    studentFirstName:'',
    studentLastname:'',
    age:'',
    studenttelephone1:'',
    studentresidence:'',
    
    parentFirstname:'',
    parentLastname:'',
    email:'',
    address:'',
    residence:'',
    telephone1:'',
  })
  const [res, setRes] = useState('');

  const handleChange = (e)=>{
    var {name, value} = e.target;
    setInputs({...inputs , [name]:value})
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    setRes('thank you for choosing Castle Rock')

    setInputs({
      studentfirstname:'',
      studentlastname:'',
      studentage:'',
      studentemail:'',
      studenttelephone1:'',
      studenttelephone2:'',
      studentsresidence:'',

      
      parentfirstname:'',
      parentlastname:'',
      email:'',
      address:'',
      residence:'',
      telephone1:'',
      telephone2:'',
    })
}

  return (
    <main className='layout position-top'>
      <aside className='layout-aside'>
        <Explore/>
      </aside>
      <div className=" layout-data transition admission-wrapper">
        <p  className='registra-p'>Office</p>
        <h2 className='registra-h2'>ADMISSIONS</h2>

        <div className='registra-contact'>
          
        </div>

          <p className='admission-info'>Do you want to be a beauty profession. Purple touch offer beauty classes to students who want to learn from the best.
          We have enabled online admission to make it easy for parents or guardians to secure space for their children. Enroll now
         </p>

        <h6 className='h6'>Contact Admissions office</h6>
        <p className='telephone-title'> <Phone/> Telephone</p>
         <ul className="telephone">
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
            <li>
              <a href="tel:+254723341899" className="telephone-anchor">+(254)-72334-1899</a>
            </li>
          </ul>
         
        <form action="" onSubmit={handleSubmit} style={{position:'relative'}}>

        {res &&
            <div className='res'>
              <span>
              {res}
              </span>
              <Link to={'/'} className ='return-home'>Go back to home</Link>
             </div>
          }
            <h5 className='student-details-h5'> <Avatar/> Student Details</h5>
            <input type="text"placeholder='firstName' value={inputs.studentfirstname}  onChange={handleChange} name="studentfisrtname"/>
            
            <input type="text" placeholder='lastName' value={inputs.studentlastname} onChange={handleChange} name="studentlastname"/>
            <input type="email" placeholder='email@domain.ext' value={inputs.studentemail} onChange={handleChange} name="studentemail" id="" />
            <input type="text" placeholder='telephone' value={inputs.studenttelephone1} onChange={handleChange} name="studenttelephone1"/>
           <input type="text" placeholder='residence' value={inputs.studentresidence} onChange={handleChange} name="studentresidence"/>
           
            <h5 className='student-details-h5'> <Avatar/> First Parent/ Guardian</h5>
            <input type="text"placeholder='firstName' value={inputs.parentfirstname} onChange={handleChange} name="parentfirstname"/>
            
            <input type="text" placeholder='lastName' value={inputs.parentmiddlename} onChange={handleChange} name="parentlastname"/>
            <input type="email" placeholder='email@domain.ext' value={inputs.email} onChange={handleChange} name="email" id="" />         
            <input type="text" placeholder='telephone' value={inputs.telephone1} onChange={handleChange} name="telephone1"/>
         

            

            <textarea name="" placeholder='Type here' onChange={handleChange} value={inputs.name} id="" cols="30" rows="10"></textarea>
            <button className='admission-submit-btn' type='submit'>SUBMIT</button>
        </form>
      </div>
    </main>
  )
}

export default Admission