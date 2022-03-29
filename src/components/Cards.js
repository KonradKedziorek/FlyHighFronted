import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpeg'
              text='Odwiedź piaszczyste plaże Hiszpani'
              label='Barcelona'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Zwiedzaj starożytne zabytki Grecji'
              label='Ateny'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Poczuj się jak Napoleon Bonaparte'
              label='Paryż'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Chcesz przeżyć przygodę życia?'
              label='Dołącz do nas'
              path='/SignUp'
            />
            <CardItem
              src='images/img-5.jpeg'
              text='Chcesz zobaczyć białe noce?'
              label='Sankt Petersburg'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;