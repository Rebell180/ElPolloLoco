import { ImgHub } from "../../manager/imgHub.js";
import { Background } from "./Background.js";


export class BGLayer3 extends Background {
    
    static drawX = -1;

    constructor() {
        super();
        this.x = BGLayer3.drawX;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.loadImage({pPath: ImgHub.BACKGROUND.LAYER_3_WIDE});
        this.setDraxX();
    }

    setDraxX() {
        BGLayer3.drawX += this.width;
    }
}