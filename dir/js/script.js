import { Game } from "./game.js";

let canvasRef;
let game;

function init() {
    canvasRef = document.getElementById('canvas-frame');
    game = new Game({pCanvas: canvasRef});
    
    // game.startGame({pLevel: null});
}

init();