import * as PIXI from 'pixi.js';
import { Player } from "./Player";
import { Explosion } from "./Explosion";
export class LayerDynamicItem {

    public arrayPlayer: Player[];
    public arrayExplosion: Explosion[][];


    constructor() {
        this.arrayPlayer = [];
        this.arrayExplosion = [];
    }

    load(stageLayer: PIXI.Container): PIXI.Container {

        let player = new Player(55, 10);
        stageLayer.addChild(player.sprite);
        this.arrayPlayer[1] = player;
        return stageLayer;

    }


    destroyBomb(stageLayer: PIXI.Container, bomb: any) {


        setTimeout(function () {

         

            for (let x = 0; x < 4; x++) {
                this.arrayExplosion[x] = [];
            for (let y = 0; y < 4; y++) {
                
                
                switch (y) {
                    case 0:
                     //let explosion1 = new Explosion(bomb.x, bomb.y-200, "vertical");
                   // this.arrayExplosion[x][y] = explosion1;
                   // stageLayer.addChild(explosion1.sprite);
                        break;
                    // case 1:
                    //  explosion = new Explosion(bomb.x, bomb.y+50, "vertical");
                    // this.arrayExplosion[x][y] = explosion;
                    // stageLayer.addChild(explosion.sprite);
                    //     break;
                    // case 2:
                    // explosion = new Explosion(bomb.x-200, bomb.y, "horizontal");
                    // this.arrayExplosion[x][y] = explosion;
                    // stageLayer.addChild(explosion.sprite);
                    //     break;
                    // case 3:
                    // explosion = new Explosion(bomb.x+50, bomb.y, "horizontal");
                    // this.arrayExplosion[x][y] = explosion;
                    // stageLayer.addChild(explosion.sprite);
                    //     break;
                    default:
                        break;
                }
            }
        }



            bomb.destroy();
            // explosion.sprite.destroy()
           // setTimeout(function () {for (let i = 0; i < 4; i++) {this.arrayExplosion[i].destroy;}}, 100);

        }, 2000);


    }

}