import { DrawableObject } from "../DrawableObject.js";


/**
 * 
 */
export class MovableObject extends DrawableObject {

    imageCache = {}
    currentImg = 0;
    moveSpeed = 0.5;

    constructor() {
        super();
    }

    loadImages(arr) {
        this.imageCache = {};
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}