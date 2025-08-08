import { ImgHub } from "../../manager/imgHub.js";
import { IntervalHub } from "../../manager/intervalHub.js";
import { MovableObject } from "./MovableObject.js";

/**
 * 
 */
export class Cloud extends MovableObject {

    static spawnCloudX = 50;

    width = 350;
    height = 200;
    interval = 1000 / 60;
    moveSpeed = 0.125

    constructor() {
        super();
        this.loadImage({pPath: ImgHub.CLOUDS[0]});
        this.setSpawnCloudX();
        this.setRandomY();
        IntervalHub.startInterval({func: this.animate, timer: this.interval});
    }

    setSpawnCloudX() {
        this.x = Cloud.spawnCloudX;
        Cloud.spawnCloudX += this.width;
    }

    setRandomY() {
        this.y = (Math.random() * 50) + (Math.random() * 100);
    }

    animate = () => {
        this.x -= this.moveSpeed;
    }
}