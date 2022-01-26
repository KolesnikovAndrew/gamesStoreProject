import React from "react";
import Game from "./Game";

export const GameList = ({ games }) => {
  console.log(games);
  return (
    <div>
      {games.map((g) => (
        <div>
          <Game key={g.id} title={g.title} thumbnail={g.thumbnail} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
