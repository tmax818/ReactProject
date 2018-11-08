import React from 'react';
import CardControls from './CardControls';

const CardFront = props => {
  const { card } = props;
  return (
    <div>
      Card
      <h1>{card.front}</h1>
    </div>
  );
};
export default CardFront;
