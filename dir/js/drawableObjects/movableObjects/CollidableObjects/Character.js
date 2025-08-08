import { ImgHub } from "../../../manager/imgHub.js";
import { IntervalHub } from "../../../manager/intervalHub.js";
import { KeyHub } from "../../../manager/keyhub.js";
import { CollidableObject } from "./CollidableObject.js"

/**
 * 
 */
export class Character extends CollidableObject {

    x = 80;
    y = 180;
    width = 120;
    height = 250;
    moveSpeed = 15;
    animationTimer = 1000 / 10;

    currentImages = [];

    constructor() {
        super().loadImage({pPath: ImgHub.CHARACTER.IDLE[0]});
        this.currentImages = ImgHub.CHARACTER.IDLE;
        this.loadImages(this.currentImages);
        IntervalHub.startInterval({func : this.animate, timer: this.animationTimer});
    }

    animate = () => {

        if (KeyHub.RIGHT) {
            this.currentImages = ImgHub.CHARACTER.WALK;
            this.loadImages(this.currentImages);
            this.x += this.moveSpeed;
        }
        else if (KeyHub.LEFT && this.x > 50) {
            this.currentImages = ImgHub.CHARACTER.WALK
            this.loadImages(this.currentImages);
            this.x -= this.moveSpeed;
        } 
        else {
            this.currentImages = ImgHub.CHARACTER.IDLE;
            this.loadImages(this.currentImages);
        }  

        let i = this.currentImg % this.currentImages.length;
        let path = this.currentImages[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }


}