import { Character } from "./drawableObjects/collidableObjects/Character.js";
import { Chicken } from "./drawableObjects/CollidableObjects/enemyObjects/Chicken.js";

/**
 * 
 */
export class World {

    ctx; 
    canvas;
    // level;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]

    constructor({pCanvas} = {}) {
        this.canvas = pCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    }

    draw() {
        // Clear Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Canvas
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(eenemy => {
            this.ctx.drawImage(eenemy.img, eenemy.x, eenemy.y, eenemy.width, eenemy.height);
        });

        // recall Canvas
        const self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }
}