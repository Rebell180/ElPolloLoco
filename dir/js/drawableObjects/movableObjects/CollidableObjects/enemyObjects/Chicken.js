import { ImgHub } from "../../../../manager/imgHub.js";
import { IntervalHub } from "../../../../manager/intervalHub.js";
import { EnemyObject } from "./EnemyObject.js";


export class Chicken extends EnemyObject {

    width = 60;
    height = 60;

    animationTimer = 1000 / 5;
    movingTimer = 1000/ 60;
    currentImg = 0;

    constructor() {
        super().loadImage({pPath: ImgHub.CHICKEN.WALK[1]});  
        this.loadImages(ImgHub.CHICKEN.WALK);
        IntervalHub.startInterval({func: this.animate, timer: this.animationTimer});
        IntervalHub.startInterval({func: this.moveLeft, timer: this.movingTimer});
    }

    animate = () => {
        let i = this.currentImg % ImgHub.CHICKEN.WALK.length;
        let path = ImgHub.CHICKEN.WALK[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    moveLeft = () => {
        this.x -= 0.3;
    }

}