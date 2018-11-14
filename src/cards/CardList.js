import React from 'react';
import Card from './Card';

const CardList = ({ location, match, cards, handleDelete }) => {
  return (
    <div>
      cardlist
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            location={location}
            match={match}
            handleDelete={() => handleDelete(card.id)}
          />
        );
      })}
    </div>
  );
};

export default CardList;
