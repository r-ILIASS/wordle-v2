import { WORD_LENGTH } from "./settings.js";
import { dictionary, targetWords } from "./db.js";
import { guessGrid, getActiveTiles, alertContainer } from "./dom.js";
import { showAlert, shakeTiles } from "./eyeCandy.js";

// Input Actions
export const pressKey = (key) => {
  const activeTiles = getActiveTiles();
  if (activeTiles.length === WORD_LENGTH) return;

  const nextTile = guessGrid.querySelector(':not([data-state="active"])');
  nextTile.dataset.state = "active";
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  return;
};

export const deleteKey = () => {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];

  if (activeTiles.length === 0) return;

  lastTile.textContent = "";
  delete lastTile.dataset.letter;
  delete lastTile.dataset.state;
  return;
};

// Submit
export const submitGuess = () => {
  const activeTiles = [...getActiveTiles()];

  if (activeTiles.length < WORD_LENGTH) {
    showAlert("Not enough letters!", alertContainer);
    shakeTiles(activeTiles);
    return;
  }

  const guess = activeTiles.reduce(
    (word, tile) => (word += tile.dataset.letter),
    ""
  );

  if (!dictionary.includes(guess)) {
    showAlert("This is not a word", alertContainer);
    shakeTiles(activeTiles);
    return;
  }

  console.log("submitGuess()", guess);
};
