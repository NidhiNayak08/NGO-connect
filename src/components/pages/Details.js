import React from 'react';
// import '../../App.css';
import Depthdetails from '../depthDeatils';
// import child from ''

const firstNgo = {
  img: '../../../images/child.jpg',              
  title: "Water For People India",
  info: `is a public charitable trust focused on providing sustainable access to high-quality drinking water, sanitation and hygiene (WASH) services 
  to create a water secure environment, sustained by local communities, businesses and governments.They design and implement ground – level solutions 
  that help the marginalized communities – rural areas and urban slums – access their share of water resources.  `,
};

const SecondNgo = {
  img: "../../../images/child.jpg",
  title: "Swades Foundation",
  info: `believes that it is every individual’s right to receive safe and sanitized drinking water. This NGO working towards the conservation of water bodies in Maharashtra aims at ensuring that every family in its geography receives their share of 200 liters 
  of water per day through taps and pipes, in addition to other basic facilities such as sanitation, healthcare and livelihood.`,
};

const ThirdNgo = {
  img: "../../../images/child.jpg",
  title: "Sankalpa Rural Development Society",
  info: `This water conservation NGO in India has been promoting rainwater harvesting techniques through bore well 
  recharge, and rooftop rainwater harvesting for well over a decade now. Founded by Sikandar Meeranaik, an 
  entrepreneur in modern-day rainwater harvesting, SRDS believes that following its water harvesting methods could cause no water scarcity in India.
`,
};

export default function Details() {
  return (
    <div>
      <a href="/next-page" className='ngo-link' >
        <Depthdetails img={firstNgo.img} title={firstNgo.title} info={firstNgo.info} />
      </a>
      <a href="/next-page" className='ngo-link'>
        <Depthdetails img={firstNgo.img} title={SecondNgo.title} info={SecondNgo.info} />
      </a>
      <a href="/next-page" className='ngo-link'>
        <Depthdetails img={firstNgo.img} title={ThirdNgo.title} info={ThirdNgo.info} />
      </a>
    </div>
  );
}
