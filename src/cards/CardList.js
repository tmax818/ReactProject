import React from 'react';
import Card from './card/Card';

const CardList = ({ cards }) => {
  return (
    <div>
      cardlist
      {cards.map(card => {
        return <Card card={card} />;
      })}
    </div>
  );
};

export default CardList;
