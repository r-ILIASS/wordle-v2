import handle from "./handle.js";

const start = () => {
  document.addEventListener("click", handle.click);
  document.addEventListener("keydown", handle.keydown);
};

const stop = () => {
  document.removeEventListener("click", handle.click);
  document.removeEventListener("keydown", handle.keydown);
  console.log("interaction stopped");
};

const interaction = {
  start,
  stop,
};

export default interaction;
