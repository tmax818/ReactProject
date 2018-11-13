import React from 'react';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      <span>{card.back}</span>
    </div>
  );
};

export default CardFront;
