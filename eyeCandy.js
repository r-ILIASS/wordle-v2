import { keyboard, alertContainer } from "./dom.js";
import { targetWord } from "./db.js";

const FLIP_ANIMATION_DURATION = 500;

// Alert
export const showAlert = (message, duration = 1000) => {
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

// Shaking animation
export const shakeTiles = (tiles) => {
  tiles.forEach((tile) => {
    tile.classList.add("shake");

    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
};

// Flip animation
export const flipTile = (tile, index, array, guess) => {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"]`);

  // first 90deg flip
  setTimeout(() => {
    tile.classList.add("flip");
  }, index * FLIP_ANIMATION_DURATION);

  tile.addEventListener("transitionend", () => {
    if (letter === targetWord[index]) {
      tile.dataset.state = "correct";
      key.classList.add("correct");
    }
    if (targetWord.includes(letter) && letter !== targetWord[index]) {
      tile.dataset.state = "wrong-location";
      key.classList.add("wrong-location");
    }
    if (!targetWord.includes(letter)) {
      tile.dataset.state = "wrong";
      key.classList.add("wrong");
    }

    // second 90deg flip
    tile.classList.remove("flip");
  });
};
