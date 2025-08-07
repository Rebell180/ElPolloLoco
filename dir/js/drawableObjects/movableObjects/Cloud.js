import { ImageManager } from "../../manager/imageManager.js";
import { MovableObject } from "./MovableObject.js";

/**
 * 
 */
export class Cloud extends MovableObject {


    constructor() {
        super();
        this.loadImage({pPath: ImageManager.CLOUDS[0]});
        this.x = 110;
        this.y = 100;
        this.width = 100;
        this.height = 100;
    }
}