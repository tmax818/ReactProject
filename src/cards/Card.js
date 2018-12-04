import React from 'react';
import CardControls from './CardControls';

const Card = ({ card, incrementCount, show, showCard, handleUpdate }) => {
  console.log(card, incrementCount, show, handleUpdate);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{card.front}</div>
          <button className="ui basic green button" onClick={showCard}>
            showCard
          </button>
          {show && (
            <CardControls
              card={card}
              handleUpdate={handleUpdate}
              incrementCount={incrementCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
