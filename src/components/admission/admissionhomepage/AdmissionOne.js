import './admissionOne.css'
import { Link } from 'react-router-dom'

const AdmissionOne = () => {
    return (
        <div className='admissionAd-container'>
            <h4>admission in progress</h4>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam autem nulla facilis nisi quod, repudiandae totam porro nihil fugiat excepturi perferendis neque aut vitae sapiente! Quam dolorem commodi, libero nesciunt voluptatum sed omnis laborum dolorum labore iure alias nam fugiat consequuntur qui nihil eaque illo assumenda quibusdam architecto.
            </p>
            <div className="admissionbtns">
                <div className="admissionbtn online-admission">
                    <Link to={'/admissions'} className=' online-admission-link'>Go to Admission</Link>
                </div>
                <div className="admissionbtn visit">
                    <Link to={'/admissions'} className=' visit-link'>Request Visit</Link>
                </div>
            </div>
        </div>
    )
}

export default AdmissionOne
