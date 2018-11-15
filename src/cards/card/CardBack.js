import React from 'react';
import CardControls from './CardControls';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      <h3>{card.back}</h3>
      <CardControls />
    </div>
  );
};

export default CardFront;
