import React from 'react';

const CardBack = props => {
  const { card } = props;
  return (
    <div>
      Card
      <h1>{card.back}</h1>
    </div>
  );
};
export default CardBack;
