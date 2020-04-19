import React from "react";
import PlayerLi from "../PlayerLi/PlayerLi";

function PlayerList({
  players,
  deletePerson,
  currentDrinkerIndex,
  randomPlayerIndex
}) {
  return (
    <div
      className="playerslist"
      style={{ height: players.length * 30 + 15 + "px" }}
    >
      <ul>
        {players.map(function(name, i) {
          return (
            <PlayerLi
              players={players}
              deletePerson={deletePerson}
              currentDrinkerIndex={currentDrinkerIndex}
              randomPlayerIndex={randomPlayerIndex}
              name={name}
              i={i}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;

//for each item in players, map over it
//return an li with each name in it
