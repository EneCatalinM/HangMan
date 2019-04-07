import Game from "./game.js";
import How from "./how.js";
import { sound } from "../data/sound.js";
const Home = (_ => {
  //cache the dom;
  const $hangmanEl = document.querySelector(".hangman");
  const init = _ => {
    render();
    listeners();
  };
  const render = _ => {
    let markup = ``;
    markup += `
    <h1 class="hangman__title">HangMan</h1>
    <button class="hangman__newGame">New Game</button>
    <button class="hangman__howToPlay">How to Play</button>
    `;
    $hangmanEl.innerHTML = markup;
  };
  const listeners = _ => {
    document.querySelector(".hangman__newGame").addEventListener("click", _ => {
      Game.init();
      sound.click.play();
    });
    document
      .querySelector(".hangman__howToPlay")
      .addEventListener("click", _ => {
        How.init();
        sound.click.play();
      });
  };

  return {
    init
  };
})();
export default Home;
