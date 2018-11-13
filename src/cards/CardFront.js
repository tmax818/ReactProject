import React from 'react';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      <span>{card.front}</span>
    </div>
  );
};

export default CardFront;
