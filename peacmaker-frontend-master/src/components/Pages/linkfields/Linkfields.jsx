import React from 'react'
import "./linkfields.css"
const Linkfields = (props) => {
  return (
    <div>
         <div className='container11'>
            <div className='inner-div'>
            <a href="https://www.example.com">{props.text}</a>

            </div>

         </div>
    </div>
  )
}

export default Linkfields
