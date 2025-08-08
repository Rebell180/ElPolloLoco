import { Game } from "./game.js";
import { KeyHub } from "./manager/keyhub.js";

let canvasRef;
let game;

function init() {
    canvasRef = document.getElementById('canvas-frame');
    game = new Game({pCanvas: canvasRef});
    KeyHub.initKeyboard();
    
    // game.startGame({pLevel: null});
}

init();