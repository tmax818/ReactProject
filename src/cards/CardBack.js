import React from 'react';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      <h1>{card.back}</h1>
    </div>
  );
};

export default CardFront;
