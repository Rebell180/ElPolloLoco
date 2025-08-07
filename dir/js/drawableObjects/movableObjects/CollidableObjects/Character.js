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
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
    }


    jump() {

    }


}