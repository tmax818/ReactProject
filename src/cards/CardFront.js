import React from 'react';

const CardFront = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.card.front}</h1>
    </div>
  );
};

export default CardFront;
