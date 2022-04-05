import ison from '../images/Comet ISON.png';
import jewel from '../images/Jewel Bug nebula.png';
import jupiter from '../images/Jupiter.png';
import mars from '../images/Mars.png';
import mountain from '../images/Mystic Mountain.png';
import pillars from '../images/Pillars of Creation.png';
import ring from '../images/Ring nebula.png';
import rubin from '../images/Rubins galaxy.png';
import saturn from '../images/Saturn.png';
import pinwheel from '../images/Southern Pinwheel.png';
import rose from '../images/The Rose.png';
import uranus from '../images/Uranus.png';
import uniqid from 'uniqid';
import React, { useState } from 'react';

const shuffle = function(array) {
  const shuffledArray = [...array];
  let remaining = shuffledArray.length;
  while(remaining>0) {
    const randomIndex = Math.floor(Math.random()*remaining);
    remaining -= 1;
    const randomItem = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = shuffledArray[remaining];
    shuffledArray[remaining] = randomItem;
  }

  return shuffledArray;
}

const Gameboard = function() {
  const [pictures, setPictures] = useState([
    {name: 'Comet ISON', url: ison},
    {name: 'Jewel Bug nebula', url: jewel},
    {name: 'Jupiter', url:jupiter},
    {name: 'Mars', url:mars},
    {name: 'Mystic Mountain', url: mountain},
    {name: 'Pillars of Creation', url: pillars},
    {name: 'Ring nebula', url: ring},
    {name: "Rubin's nebula", url: rubin},
    {name: 'Saturn', url: saturn},
    {name: 'Southern Pinwheel', url: pinwheel},
    {name: 'The Rose', url: rose},
    {name: 'Uranus', url: uranus}
  ]);

  const handleClick = function() {
    setPictures(shuffle(pictures));
  }

  const cards = pictures.map(function(picture) {
    return (
      <img key={uniqid()} src={picture.url} alt={picture.name} onClick={handleClick} />
    );
  });

  return (
    <div>
      {cards}
    </div>
  );
}

export default Gameboard;
