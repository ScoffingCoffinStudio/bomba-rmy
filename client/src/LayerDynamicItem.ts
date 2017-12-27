import * as PIXI from 'pixi.js';
import { Player } from "./Player";
export class LayerDynamicItem {


    constructor() {

    }

    load(stageLayer: PIXI.Container): PIXI.Container {

        var texture = PIXI.Texture.fromImage('player.png');
        var player = new Player();
        for (let index = 0; index < 4; index++) {

            var player = new Player();
            var playerSprite = new PIXI.Sprite(texture);

            switch (index) {
                case 0:
                playerSprite.position.x = 50;
                playerSprite.position.y = 50;
                    break;

                case 1:
                playerSprite.position.x = 200;
                playerSprite.position.y = 50;
                    break;
                case 2:
                playerSprite.position.x = 50;
                playerSprite.position.y = 200;
                    break;
                case 3:
                playerSprite.position.x = 200;
                playerSprite.position.y = 200;
                    break;
                default:
                    break;
            }
            
            stageLayer.addChild(playerSprite);
        }
        return stageLayer;
    }

}