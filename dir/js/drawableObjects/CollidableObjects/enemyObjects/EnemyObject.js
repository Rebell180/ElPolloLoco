import { CollidableObject } from "../../CollidableObjects/CollidableObject.js";


export class EnemyObject extends CollidableObject {

    static spawnX = 500;
    
    constructor() {
        super();
        this.setSpawnX(); 
    }

    setSpawnX(){
        this.x = EnemyObject.spawnX;
        EnemyObject.spawnX += Math.random() * 50 + 200;
    }
}