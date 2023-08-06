import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import Details from './pages/Details';


function Cards() {
  return (
    <div className='cards'>
      <h1>Our Programs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="/images/water.jpg"
              text='Water for Life, Life for Water'
              label='WaterAid'
              path='/products'
            />

            <CardItem
              src='/images/plant.jpg'
              text='Reconnect with Nature, Renew the Earth'
              label='GreenPeace'
              path='/services'
            />
          

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/hunger.jpg'
              text='Together, We Can End Hunger.'
              label='FoodforAll'
              path='/services'
            />
            <CardItem
              src='/images/child.jpg'
              text='Compassion in Action: Help Poor Children Now.'
              label='SaveTheChildren'
              path='/products'
            />
            <CardItem
              src='/images/animal.jpg'
              text='Wildlife Thrives, Humanity Thrives.'
              label='WorldWildlifeFund'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;