import React from "react";

const Instructions = function(props) {
  return (
    <div className="instructionsScreenBlocker" style={{display: props.isHidden ? 'none' : ''}}>
      <div className="instructionsContainer">
        <button className="hideInstructionsButton" onClick={props.hideInstructions}>+</button>
        <h5>HOW TO PLAY</h5>
        <p>When you click on a card all the cards get shuffled.</p>
        <p>Earn ponits by clicking on different cards each time.</p>
        <p>If you click on a card you already clicked on the score counter sets back to 0.</p>
        <p>Try to get the higher score of 12!</p>
      </div>
    </div>
  );
}

export default Instructions;
