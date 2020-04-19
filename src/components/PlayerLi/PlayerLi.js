import React from "react";
import { animated, useSpring } from "react-spring";

function PlayerLi({
  players,
  deletePerson,
  currentDrinkerIndex,
  randomPlayerIndex,
  name,
  i
}) {
  const contentProps = useSpring({
    from: { opacity: 0, marginTop: -1000 },
    opacity: 1,
    marginTop: 0
  });

  return (
    <animated.li style={contentProps} key={name}>
      {i === currentDrinkerIndex ? (
        <p className="playernameHighlight">
          {randomPlayerIndex === i ? "👉🏽" + name + "👈🏽" : name}
        </p>
      ) : (
        <p className="playername">
          {randomPlayerIndex === i ? "👉🏽" + name + "👈🏽" : name}
        </p>
      )}
      <button className="deletebutton" onClick={() => deletePerson(i)}>
        <span role="img">❌</span>
      </button>
    </animated.li>
  );
}

export default PlayerLi;
