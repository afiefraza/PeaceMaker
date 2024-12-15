import React from 'react'
import "./button.css"
const Button = (props) => {
  return (
    <div>
        <div className='container'>
            
            <button  type='Submit' className='inner-container' onClick={props.onClick}>
                {props.text1}
            </button>

            
        

        </div>
      
    </div>
  )
}

export default Button
