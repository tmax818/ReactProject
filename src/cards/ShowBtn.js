import React from 'react';

const ShowBtn = props => {
  console.log(props);
  return <button onClick={props.handleClick}>Show Answer</button>;
};
export default ShowBtn;
