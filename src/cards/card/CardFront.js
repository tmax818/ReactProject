import React from 'react';

const CardFront = ({ card }) => {
  console.log(card);
  return (
    <div>
      {card && (
        <div>
          <h3>{card.front}</h3>
          <p>
            card views: {card.count} card score: {card.rating}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardFront;
