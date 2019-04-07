import Home from "./home.js";
import { sound } from "../data/sound.js";

const How = (_ => {
  //cache the doom
  const $hangman = document.querySelector(".hangman");

  const init = _ => {
    render();
    listeners();
  };

  const render = () => {
    let markup = `
    <h1 class="hangman__title">Instructions</h1>
    <p class="hangman__instructions"> <i class="fas fa-angle-right"></i> Alright here is how you play!</p>
    <p class="hangman__instructions"><i class="fas fa-angle-right"></i> When you start a new game, the game will automatically choose a random word.</p>
    <p class="hangman__instructions"><i class="fas fa-angle-right"></i> Your job is to guess that chosem word completely by guessing a letter at a time by clicking on the buttons.</p>
    <p class="hangman__instructions"><i class="fas fa-angle-right"></i> If you successfully guess the word within 7 tries, you win or else you lose.</p>
    <p class="hangman__instructions"><i class="fas fa-angle-right"></i> If you lose, you will be hanged without mercy.<i class="fas fa-ghost"></i></p>
    <button class="button hangman__trigger">Main Menu</button>
    `;
    $hangman.innerHTML = markup;
  };
  const listeners = _ => {
    document.querySelector(".hangman__trigger").addEventListener("click", _ => {
      Home.init();
      sound.click.play();
    });
  };

  return {
    init
  };
})();
export default How;
