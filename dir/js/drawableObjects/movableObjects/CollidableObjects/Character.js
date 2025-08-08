import { ImgHub } from "../../../manager/imgHub.js";
import { IntervalHub } from "../../../manager/intervalHub.js";
import { KeyHub } from "../../../manager/keyhub.js";
import { CollidableObject } from "./CollidableObject.js"

/**
 * 
 */
export class Character extends CollidableObject {

    world;
    x = 0;
    y = 180;
    width = 120;
    height = 250;
    moveSpeed = 5;
    animationTimer = 1000 / 10;
    movementTimer = 1000 / 60;
    otherDirection = false;

    currentImages = [];

    constructor() {
        super().loadImage({pPath: ImgHub.CHARACTER.IDLE[0]});
        this.currentImages = ImgHub.CHARACTER.IDLE;
        this.loadImages(this.currentImages);
        IntervalHub.startInterval({func : this.animate, timer: this.animationTimer});
        IntervalHub.startInterval({func : this.move, timer: this.movementTimer});
    }

    move = () => {
        if (KeyHub.RIGHT) {
            this.otherDirection = false;
            this.x += this.moveSpeed;
            
        }
        else if (KeyHub.LEFT && this.x > 50) {
            this.otherDirection = true;
            this.x -= this.moveSpeed;
        }
        this.world.camera_x = - this.x;
    }

    animate = () => {

        if (KeyHub.LEFT || KeyHub.RIGHT) {
            this.currentImages = ImgHub.CHARACTER.WALK
            this.loadImages(this.currentImages);
        } else {
            this.currentImages = ImgHub.CHARACTER.IDLE;
            this.loadImages(this.currentImages);
        }
        
        let i = this.currentImg % this.currentImages.length;
        let path = this.currentImages[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }


}