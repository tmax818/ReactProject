import React from 'react';
import CardControls from './CardControls';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      <span>{card.back}</span>
      <CardControls />
    </div>
  );
};

export default CardFront;
