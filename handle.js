const WORD_LENGTH = 5;
const guessGrid = document.querySelector("[data-guess-grid]");

// event handlers
const click = (e) => {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
    return;
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
};

const keydown = (e) => {
  if (e.key === "Enter") {
    submitGuess();
    return;
  }

  if (e.key === "Backspace") {
    deleteKey();
    return;
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
};

// Actions
const pressKey = (key) => {
  const activeTiles = getActiveTiles();
  if (activeTiles.length === WORD_LENGTH) return;

  const nextTile = guessGrid.querySelector(':not([data-state="active"])');
  nextTile.dataset.state = "active";
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  return;
};

const submitGuess = () => {
  console.log("submitGuess()");
};

const deleteKey = () => {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];

  if (activeTiles.length === 0) return;

  lastTile.textContent = "";
  delete lastTile.dataset.letter;
  delete lastTile.dataset.state;
  return;
};

// helper functions
const getActiveTiles = () => {
  return guessGrid.querySelectorAll('[data-state="active"');
};

// exports
const handle = {
  click,
  keydown,
};

export default handle;
