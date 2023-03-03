import React, { useState } from "react";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { imagesURLs } from "./imagesURLs";

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
    {name: 'Comet ISON', url: imagesURLs.ison},
    {name: 'Jewel Bug nebula', url: imagesURLs.jewel},
    {name: 'Jupiter', url:imagesURLs.jupiter},
    {name: 'Mars', url:imagesURLs.mars},
    {name: 'Mystic Mountain', url: imagesURLs.mountain},
    {name: 'Pillars of Creation', url: imagesURLs.pillars},
    {name: 'Ring nebula', url: imagesURLs.ring},
    {name: "Rubin's nebula", url: imagesURLs.rubin},
    {name: 'Saturn', url: imagesURLs.saturn},
    {name: 'Southern Pinwheel', url: imagesURLs.pinwheel},
    {name: 'The Rose', url: imagesURLs.rose},
    {name: 'Uranus', url: imagesURLs.uranus}
  ]);
  const [areInstructionsHidden, setAreInstructionsHidden] = useState(true);
  const [memory, setMemory] = useState([]);
  const showInstructions = function() {
    setAreInstructionsHidden(false);
  }

  const hideInstructions = function() {
    setAreInstructionsHidden(true);
  }

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
      <button className="showInstructionsButton" onClick={showInstructions}>How to play</button>
      <Scoreboard score={memory.length} />
      <Gameboard pictures={pictures} handleClick={handleClick} />
      <Instructions isHidden={areInstructionsHidden} hideInstructions={hideInstructions} />
    </div>
  );
}

export default App;
