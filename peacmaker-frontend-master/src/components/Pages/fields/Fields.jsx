import React from 'react'
import "./fields.css"
const Fields = (props) => {
  return (
    <div>
    
    <div className='signup_3'>
            <div className='signup_31'>
              {props.text1}
           </div>
            <div className='signup_32'>
              <input type="text" className='field_input'/>
            </div>
        </div>
        <div className='my-box' >
            <div className='label'>
              {props.text2}
           </div>
           <div className='label-inner'>
            <input type='text' className='field_input'/>

           </div>
           
            
        </div>


    </div>
    
    
  )
}

export default Fields