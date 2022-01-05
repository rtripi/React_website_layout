import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Destinations</h1>
      <div className="cars__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Explore the desert"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-7.jpg"
              text="Hiking season"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-6.jpg"
              text="The city"
              label="Turism"
              path="/services"
            />
            <CardItem
              src="/images/img-7.jpg"
              text="Hiking season"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-6.jpg"
              text="The city"
              label="Turism"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
