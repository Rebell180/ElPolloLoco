import { ImageManager } from "../../manager/imageManager.js";
import { Background } from "./Background.js";


export class BGLayer3 extends Background {

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 1440;
        this.height = 480;
        this.loadImage({pPath: ImageManager.BACKGROUND.LAYER_3_WIDE});
    }
}