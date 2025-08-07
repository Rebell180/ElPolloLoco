import { ImageManager } from "../../manager/imageManager.js";
import { IntervalManager } from "../../manager/intervalManager.js";
import { MovableObject } from "./MovableObject.js";

/**
 * 
 */
export class Cloud extends MovableObject {

    width = 350;
    height = 200;
    y = (Math.random() * 50) + (Math.random() * 100);
    static spawnCloudX = 50;
    interval = 1000 / 15;

    constructor() {
        super().loadImage({pPath: ImageManager.CLOUDS[1]});
        this.setSpawnCloudX();
        IntervalManager.startInterval({func: this.animate, timer: this.interval});
    }

    setSpawnCloudX() {
        this.x = Cloud.spawnCloudX;
        Cloud.spawnCloudX += this.width;

    }

    animate = () => {
        this.x -= 0.5;
    }
}