// DOM elements
export const guessGrid = document.querySelector("[data-guess-grid]");

// helper function
export const getActiveTiles = () => {
  return guessGrid.querySelectorAll('[data-state="active"');
};
