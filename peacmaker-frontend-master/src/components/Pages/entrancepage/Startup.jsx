import React from 'react'
import "./startup.css"
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const Startup = () => {
  return (
    <div className='start-container'>
        <div>
        <header className="header">
      <div className="header__logo">Peacemaker</div>

     

      
    </header>
        </div>
        <div className='start_p'>
            <p>
                Choose option below one to get enter in our family
            </p>
        </div>
        <div className='start_b'>
            <Link to='/login'>
            <Button text1={"LogIn"}/>
            </Link>
        </div>
        <div >
            <Link to='/signup'>
            <button type='Submit' className='start_bb'>SignUp</button>

            </Link>

        </div>

      
    </div>
  )
}

export default Startup
