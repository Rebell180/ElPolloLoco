import { ImgHub } from "../../manager/imgHub.js";
import { Background } from "./Background.js";


export class BGAir extends Background {

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.loadImage({pPath: ImgHub.BACKGROUND.AIR_WIDE});
    }
}