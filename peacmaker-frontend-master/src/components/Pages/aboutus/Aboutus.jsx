import React from 'react'
import "./aboutus.css"


import Footer from '../footer/Footer'
const Aboutus = () => {
  return (
    <div>
        <div className='about-header'>
            <b>About us</b>
        </div>
        <div className='about-hero1'>
            <p>
            Making World Peaceful
            </p>
            <p>
            Our mission is to cancel out noise and making  world
 peaceful
            </p>
        </div>
        <div className='about-image'>
        <img src="https://www.cardinalpeak.com/wp-content/uploads/2020/09/ANC-graphic-1024x696.png" alt="noisepic" />


        </div>
        <div className='about-footer'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Aboutus
