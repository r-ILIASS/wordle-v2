// DOM elements
export const guessGrid = document.querySelector("[data-guess-grid]");
export const alertContainer = document.querySelector("[data-alert-container]");

// helper function
export const getActiveTiles = () => {
  return guessGrid.querySelectorAll('[data-state="active"');
};
