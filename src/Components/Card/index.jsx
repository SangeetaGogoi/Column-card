import React from 'react';
import './card.css';
import SEDANICON from '../assets/icon-sedans.svg';
import SUVSICON from '../assets/icon-suvs.svg';
import LUXURYICON from '../assets/icon-luxury.svg';

export default function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='orange-card'>
          <img
            src={SEDANICON}
            alt=''
            className='sedan-img'
          />
          <h1>SEDANS</h1>
          <p>
            Choose a sedan for its affordability
            and excellent fuel economy. Ideal for
            cruising in the city or on your next
            road trip.
          </p>
          <button className='btn'>
            Learn More
          </button>
        </div>
        <div className='green-card'>
          {' '}
          <img
            src={SUVSICON}
            alt=''
            className='suv-img'
          />
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior,
            power, and versatility. Perfect for
            your next family vacation and off-road
            adventures.
          </p>
          <button className='btn'>
            Learn More
          </button>
        </div>
        <div className='darkgreen-card'>
          {' '}
          <img
            src={LUXURYICON}
            alt=''
            className='luxury-img'
          />
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without
            the bloated prices.Enjoy the enhanced
            comfort of a luxury rental and arrive
            in style.
          </p>
          <button className='btn'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
