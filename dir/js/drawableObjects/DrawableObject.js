/**
 * 
 */
export class DrawableObject {

    x;
    y;    
    width;
    height;
    img;

    constructor() {
        
    }

    loadImage({pPath} = {}) {
        this.img = new Image();
        this.img.src = pPath;
    }

    draw() {

    }

    drawImage() {

    }


}