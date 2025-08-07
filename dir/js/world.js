
import { BGAir } from "./drawableObjects/backgroundObjects/BGAir.js";
import { BGLayer1 } from "./drawableObjects/backgroundObjects/BGLayer1.js";
import { BGLayer2 } from "./drawableObjects/backgroundObjects/BGLayer2.js";
import { BGLayer3 } from "./drawableObjects/backgroundObjects/BGLayer3.js";
import { Cloud } from "./drawableObjects/movableObjects/Cloud.js";
import { Character } from "./drawableObjects/movableObjects/collidableObjects/Character.js";
import { Chicken } from "./drawableObjects/movableObjects/CollidableObjects/enemyObjects/Chicken.js";

/**
 * 
 */
export class World {

    ctx; 
    canvas;

    character = new Character();

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud(),
        new Cloud(),
        new Cloud()
    ];

    backgrounds = [
        new BGAir(),
        new BGLayer3(),
        new BGLayer2(),
        new BGLayer1()
    ];


    constructor({pCanvas} = {}) {
        this.canvas = pCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    }



    draw() {
        this.clearCanvas();
        this.drawImages();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    drawImages() {
        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addObjectToMap(this.character);

    }

    addObjectsToMap(objArr) {
        objArr.forEach(obj => {
            // console.log(obj.img.src);
            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
            
        });
    }

    addObjectToMap(obj) {
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}