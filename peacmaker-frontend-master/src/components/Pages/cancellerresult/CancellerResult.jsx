import React from 'react';
import "./cancellerresult.css";
import Header from "../header/Header";
import Footer from '../footer/Footer';
import CR from "../../pictures/ertugrul.mp3"
const CancellerResult = () => {
  return (
    <div>
      <Header />

      <div className='canceller-border'>
        <div className="canceller-header">
          <p>
            Calculating phase... Finished!
            <br />
            <br />
            You can play the opposite phase audio
            <br />
            for a peaceful environment.
          </p>
        </div>

        <div className='canceller-image'>
          <video width="320" height="240" controls>
            <source src={CR}>
            </source>
          </video>
        
        </div>
      </div>
      <div className='canceller-buttom'>
        Still can hear noise? <a href="https://www.example.com">Click here</a>
      </div>
      <div className='canceller-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default CancellerResult;
