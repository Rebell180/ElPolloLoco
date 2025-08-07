// import { CollidableObject } from "CollidableObject.js";
import { ImageManager } from "../../../manager/imageManager.js";
import { CollidableObject } from "../CollidableObjects/CollidableObject.js"

/**
 * 
 */
export class Character extends CollidableObject {

    constructor() {
        super();
        this.loadImage({pPath: ImageManager.CHARACTER.IDLE[0]});
        this.x = 80;
        this.y = 180;
        this.width = 120;
        this.height = 250;
    }


    jump() {

    }


}