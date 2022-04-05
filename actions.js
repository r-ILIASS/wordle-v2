import { WORD_LENGTH } from "./settings.js";
import { guessGrid, getActiveTiles, alertContainer } from "./dom.js";

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

  if (activeTiles.length < WORD_LENGTH) {
    showAlert("Not enough letters!");
    return;
  }

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

// Alert
const showAlert = (message, duration = 1000) => {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);

  if (duration == null) return;

  setTimeout(() => {
    alert.classList.add("hide");

    alert.addEventListener("transitionend", () => {
      alert.remove();
    });
  }, duration);
};
