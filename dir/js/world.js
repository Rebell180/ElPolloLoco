
import { BGAir } from "./drawableObjects/backgroundObjects/BGAir.js";
import { BGLayer1 } from "./drawableObjects/backgroundObjects/BGLayer1.js";
import { BGLayer2 } from "./drawableObjects/backgroundObjects/BGLayer2.js";
import { BGLayer3 } from "./drawableObjects/backgroundObjects/BGLayer3.js";
import { Cloud } from "./drawableObjects/movableObjects/Cloud.js";
import { Character } from "./drawableObjects/movableObjects/collidableObjects/Character.js";
import { Chicken } from "./drawableObjects/movableObjects/collidableObjects/enemyObjects/Chicken.js";

/**
 * 
 */
export class World {

    ctx; 
    canvas;
    camera_x = 0;

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
        new BGLayer1(),
        new BGAir(),
        new BGLayer3(),
        new BGLayer2(),
        new BGLayer1(),
        new BGAir(),
        new BGLayer3(),
        new BGLayer2(),
        new BGLayer1(),
    ];

    constructor({pCanvas} = {}) {
        this.canvas = pCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
        this.setWorldToCharacter();
    }

    setWorldToCharacter() {
        this.character.world = this;
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
        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addObjectToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objArr) {
        objArr.forEach(obj => {
            this.addObjectToMap(obj);
        });
    }

    addObjectToMap(obj) {
        if(obj.otherDirection) {
            this.flipImage(obj);
        }
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
        if (obj.otherDirection) {
            this.flipImageBack(obj);
        }
    }

    flipImage(obj) {
        this.ctx.save();
        this.ctx.translate(obj.width, 0);
        this.ctx.scale(-1, 1);
        obj.x = obj.x * -1; 
    }

    flipImageBack(obj) {
        obj.x = obj.x * -1;
        this.ctx.restore();
    }
    
    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
