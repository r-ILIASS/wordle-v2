// Alert
export const showAlert = (message, alertContainer, duration = 1000) => {
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
