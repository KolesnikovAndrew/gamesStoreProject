import React from "react";

export const Game = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.thumbnail}></img>
    </div>
  );
};

export default Game;
