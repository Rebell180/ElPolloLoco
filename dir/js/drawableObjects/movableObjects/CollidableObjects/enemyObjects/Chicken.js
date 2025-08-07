import { ImageManager } from "../../../../manager/imageManager.js";
import { EnemyObject } from "./EnemyObject.js";


export class Chicken extends EnemyObject {

        constructor() {
            super();
            this.loadImage({pPath: ImageManager.CHICKEN.WALK[0]});
            this.y = 100;
            this.width = 100;
            this.height = 100;
        }
}