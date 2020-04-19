import React from "react";

function PersonInput({ addNewPerson, handleInputText, keyPressed, inputText }) {
  return (
    <div>
      <input
        type="text"
        onChange={handleInputText}
        placeholder="Player Name"
        value={inputText}
        onKeyPress={keyPressed}
      />
      <button className="addPersonButton" onClick={addNewPerson}>
        Add Player
      </button>
    </div>
  );
}

// Take in add person function from props
// Make an input field
// When submit button or Enter 🔑
// Add new person to state

export default PersonInput;
