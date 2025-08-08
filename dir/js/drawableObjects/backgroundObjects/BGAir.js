import { ImgHub } from "../../manager/imgHub.js";
import { Background } from "./Background.js";


export class BGAir extends Background {

    
    static drawX = -1;

    constructor() {
        super();
        this.x = BGAir.drawX;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.loadImage({pPath: ImgHub.BACKGROUND.AIR_WIDE});
        this.setDraxX();
    }
    setDraxX() {
        BGAir.drawX += this.width;
    }
}