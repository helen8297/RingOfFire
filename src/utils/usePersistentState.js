import React, { useState, useEffect } from "react";

function usePersistantStorage(initialState = null, key = "ringOfFireNames") {
  const [state, setState] = useState(() => {
    const theLocalStorage = localStorage.getItem(key);
    return theLocalStorage ? JSON.parse(theLocalStorage) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistantStorage;
