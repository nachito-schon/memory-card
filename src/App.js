import ison from './images/comet-ison.png';
import jewel from './images/jewel-bug-nebula.png';
import jupiter from './images/jupiter.png';
import mars from './images/mars.png';
import mountain from './images/mystic-mountain.png';
import pillars from './images/pillars-of-creation.png';
import ring from './images/ring-nebula.png';
import rubin from './images/rubins-galaxy.png';
import saturn from './images/saturn.png';
import pinwheel from './images/southern-pinwheel.png';
import rose from './images/the-rose.png';
import uranus from './images/uranus.png';
import React, { useState } from "react";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

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

function App() {
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

  const [memory, setMemory] = useState([]);

  const handleClick = function(event) {
    const card = event.currentTarget.textContent;
    if(memory.includes(card)) {
      setMemory([]);
    }
    else {
      setMemory([...memory, card]);
    }

    setPictures(shuffle(pictures));
  }

  return (
    <div className="App">
      <h1>MEMORY CARD GAME</h1>
      <Instructions />
      <Scoreboard score={memory.length} />
      <Gameboard pictures={pictures} handleClick={handleClick} />
    </div>
  );
}

export default App;
