import { WORD_LENGTH } from "./settings.js";
import { guessGrid, getActiveTiles } from "./dom.js";

// Actions
export const pressKey = (key) => {
  const activeTiles = getActiveTiles();
  if (activeTiles.length === WORD_LENGTH) return;

  const nextTile = guessGrid.querySelector(':not([data-state="active"])');
  nextTile.dataset.state = "active";
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  return;
};

export const submitGuess = () => {
  const activeTiles = [...getActiveTiles()];
  const guess = activeTiles.reduce(
    (word, tile) => (word += tile.dataset.letter),
    ""
  );

  console.log("submitGuess()", guess);
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
