import React, { useState, useEffect } from "react";

const Scoreboard = function(props) {
  const [highScore, setHighScore] = useState(0);

  useEffect(function() {
    if(props.score > highScore) {
      setHighScore(props.score);
    }
  }, [props.score, highScore]);

  return (
    <div className="scoreboard">
      <h2>Score: {props.score}</h2>
      <h3>High Score: {highScore}</h3>
    </div>
  );
}

export default Scoreboard;
