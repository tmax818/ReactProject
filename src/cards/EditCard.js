import React from 'react';
import CardList from './CardList';
import NewCard from './card/NewCard';

const EditCard = ({
  cards,
  match,
  location,
  handleDelete,
  handleUpdate,
  handleNewCard,
  subject_id
}) => {
  return (
    <div>
      <CardList
        cards={cards}
        match={match}
        location={location}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <hr />
      <h4>Add New Card</h4>
      <NewCard handleNewCard={handleNewCard} subject_id={match.params.sid} />
    </div>
  );
};

export default EditCard;
