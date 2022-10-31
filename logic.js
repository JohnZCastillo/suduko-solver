const board = document.querySelector(".board");

// add event for every boxe on the board

Object.keys(board.children).forEach((key) => {
  const box = board.children[key];

  box.addEventListener("click", () => {
    box.contentEditable = true;
  });

  //prevent user from entering more than one character
  box.addEventListener("keydown", (event) => {
    if (box.innerHTML.length > 0) {
      event.preventDefault();
    }
  });
});
