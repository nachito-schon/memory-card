import React, { useState } from "react";

const Instructions = function() {
  const [areInstructionsHidden, setAreInstructionsHidden] = useState(true);

  const showInstructions = function() {
    setAreInstructionsHidden(false);
  }

  const hideInstructions = function() {
    setAreInstructionsHidden(true);
  }

  return (
    <div className="instructionsButtonContainer">
      <button className="showInstructionsButton" onClick={showInstructions}>How to play</button>
      <div className="instructionsScreenBlocker" hidden={areInstructionsHidden}>
        <div className="instructionsContainer">
          <button className="hideInstructionsButton" onClick={hideInstructions}>+</button>
          <h5>HOW TO PLAY</h5>
          <p>When you click on a card all the cards get shuffled.</p>
          <p>Earn ponits by clicking on different cards each time.</p>
          <p>If you click on a card you already clicked on the score counter sets back to 0.</p>
          <p>Try to get the higher score of 12!</p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
