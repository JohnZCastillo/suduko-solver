const board = document.querySelector(".board");

// add event for every boxe on the board

Object.keys(board.children).forEach((key) => {
  const box = board.children[key];

  box.addEventListener("click", () => {
    box.contentEditable = true;
  });

  //prevent user from entering more than one character
  box.addEventListener("keydown", (event) => {
    const data = event.key;

    // allow backspace
    if (event.key === "Backspace") return;

    // disallow numbers and another input if data has already been assign
    if (box.innerHTML.length > 0 || !Number.isInteger(Number(data))) {
      event.preventDefault();
      return;
    }
  });
});
