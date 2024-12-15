import React from 'react';
import "./suggestions.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import fan from "../../pictures/fan.png"
import Cockroach from "../../pictures/cockroach.webp"
import Delivery from "../../pictures/dilveryboy.png"
import baby from "../../pictures/baby.png"
import motor from "../../pictures/motor.webp"
const Suggestions = () => {
  return (
    <div>
      <Header />
      <div className='suggestions-header'>
        <div className='suggestion-hero'>
          <p>Suggestions to reduce noise:</p>
          <div>
            <p><b>Fan:</b> You can turn the <b>fan</b> off or slow it down.</p>
            <p className='baby'><b>Baby crying:</b> You can feed the <b>baby</b> or check<br/> its diaper.</p>
          </div>
        </div>
        <div className='suggestion-image'>
          <img src={fan} alt='fan'></img>
          <img src={Cockroach} width='240px' alt='cockroach'></img>
          <img src={Delivery} width='240px' alt='motorcycle'></img>
          <img src={baby} width='240px' alt='babeypic'></img>
          <img src={motor} width='260px' height='225px' alt='motorpic'></img>
        </div>
      </div>
      <div className='suggestion-middle'>
        <p>
          <button>Click here</button>
        </p>
      </div>
      <div className='suggestions-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Suggestions;
