const Board = (_ => {
  //state
  let livesLeft = null;
  let canvas;
  let context;
  const init = _ => {
    canvas = document.querySelector(".hangman__board");
    context = canvas.getContext("2d");
    context.lineWidth = 2.5;
    context.strokeStyle = "#FAFFFD";
    drawFirstLines();
  };

  const draw = (startX, startY, endX, endY) => {
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  };
  //draw the lines
  const line1 = _ => {
    draw(0, 145, 200, 145);
  };
  const line2 = _ => {
    draw(10, 0, 10, 161);
  };
  const line3 = _ => {
    draw(0, 10, 130, 10);
  };
  const drawFirstLines = _ => {
    line1();
    line2();
    line3();
  };
  const rope = _ => {
    draw(120, 10, 120, 20);
  };
  const head = _ => {
    context.beginPath();
    context.arc(120, 35, 15, 0, Math.PI * 2);
    context.stroke();
  };
  const torso = _ => {
    draw(120, 50, 120, 110);
  };
  const leftLeg = _ => {
    draw(120, 110, 100, 140);
  };

  const rightLeg = _ => {
    draw(120, 110, 140, 140);
  };

  const leftHand = _ => {
    draw(120, 80, 100, 60);
  };

  const rightHand = _ => {
    draw(120, 80, 140, 60);
  };
  //make the body when the player wrong
  const makeTheBody = lives => {
    switch (lives) {
      case 6:
        rope();
        break;
      case 5:
        head();
        break;
      case 4:
        torso();
        break;
      case 3:
        leftLeg();
        break;
      case 2:
        rightHand();
        break;
      case 1:
        leftHand();
        break;
      case 0:
        rightLeg();
        break;
      default:
        break;
    }
  };

  const setLives = newLives => {
    livesLeft = newLives;
    makeTheBody(livesLeft);
  };

  return {
    setLives,
    init
  };
})();
export default Board;
