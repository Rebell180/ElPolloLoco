import { World } from "./world.js";

/**
 * 
 */
export class Game {

    world;

    constructor({pCanvas}) {
        this.world = new World({pCanvas: pCanvas});

    }

}