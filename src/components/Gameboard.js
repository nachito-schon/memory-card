import uniqid from 'uniqid';
import React from 'react';

const Gameboard = function(props) {
  const cards = props.pictures.map(function(picture) {
    return (
      <div key={uniqid()} className="card" onClick={props.handleClick}>
        <img
          srcSet={`${picture.url.small} 200w, ${picture.url.medium} 300w, ${picture.url.large} 400w`}
          sizes="(max-width: 768px) 200px, (max-width: 1280px) 300px, 400px"
          src={picture.url.large}
          alt={picture.name}
        />
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
