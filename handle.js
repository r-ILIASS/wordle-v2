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
  console.log("keydown line 1");

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

const pressKey = (key) => {
  console.log("pressKey()", key);
};

const submitGuess = () => {
  console.log("submitGuess()");
};

const deleteKey = () => {
  console.log("deleteKey()");
};

const handle = {
  click,
  keydown,
};

export default handle;
