import { pressKey, deleteKey, submitGuess } from "./actions.js";

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

// exports
const handle = {
  click,
  keydown,
};

export default handle;
