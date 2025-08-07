import { World } from "./world.js";

/**
 * 
 */
export class Game {

    // ctx;
    world;


    constructor({pCanvas}) {
        // this.ctx = this.canvas.getContext('2d');
        this.world = new World({pCanvas: pCanvas});

    }

}