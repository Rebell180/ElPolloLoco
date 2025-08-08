import { ImgHub } from "../../manager/imgHub.js";
import { Background } from "./Background.js";


export class BGLayer2 extends Background {
    
    static drawX = -1;

    constructor() {
        super();
        this.x = BGLayer2.drawX;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.loadImage({pPath: ImgHub.BACKGROUND.LAYER_2_WIDE});
        this.setDraxX();
    }

    setDraxX() {
        BGLayer2.drawX += this.width;
    }
}