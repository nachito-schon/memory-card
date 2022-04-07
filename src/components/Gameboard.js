import uniqid from 'uniqid';
import React from 'react';

const Gameboard = function(props) {
  const cards = props.pictures.map(function(picture) {
    return (
      <div key={uniqid()} className="card" onClick={props.handleClick}>
        <img src={picture.url} alt={picture.name} />
        <h4>{picture.name}</h4>
      </div>
    );
  });

  return (
    <div className="gameboard">
      {cards}
    </div>
  );
}

export default Gameboard;
