import Interaction from "./interaction.js";
import { WORD_LENGTH } from "./settings.js";
import { dictionary } from "./db.js";
import { showAlert, shakeTiles, flipTile } from "./eyeCandy.js";
import { guessGrid, getActiveTiles } from "./dom.js";

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

  // if there isn't enough letters
  if (activeTiles.length < WORD_LENGTH) {
    showAlert("Not enough letters!");
    shakeTiles(activeTiles);
    return;
  }

  // reduce the active tiles data to a single string
  const guess = activeTiles.reduce(
    (word, tile) => (word += tile.dataset.letter),
    ""
  );

  // if the word doesn't exist in the dictionary
  if (!dictionary.includes(guess)) {
    showAlert("This is not a word");
    shakeTiles(activeTiles);
    return;
  }

  // if the word exists
  Interaction.stop();
  activeTiles.forEach((...params) => flipTile(...params, guess));
};
