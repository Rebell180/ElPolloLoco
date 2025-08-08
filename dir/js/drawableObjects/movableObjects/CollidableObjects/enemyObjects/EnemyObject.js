import { CollidableObject } from "../CollidableObject.js";


export class EnemyObject extends CollidableObject {

    static spawnEnemyX = 500;
    y = 360;
    
    constructor() {
        super();
        this.setSpawnEnemyX(); 
    }

    setSpawnEnemyX(){
        this.x = EnemyObject.spawnEnemyX;
        EnemyObject.spawnEnemyX += Math.random() * 50 + 200;
    }
}