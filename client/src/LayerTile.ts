import * as PIXI from 'pixi.js';
import { Block } from "./Block";

export class LayerTile {

    constructor() {

    }

    load(stageLayer: PIXI.Container): PIXI.Container {

        var texture = PIXI.Texture.fromImage('block.png');
        var block = new Block();
        
        for (let index = 0; index < 5; index++) {
           
            var bunny = new PIXI.Sprite(texture);
            // bunny.anchor.x = 0.5;
            // bunny.anchor.y = 0.5;
            bunny.position.x = block.arrayBlock[0][index];
            bunny.position.y = block.arrayBlock[1][index];
           
            // bunny.scale.x = 2;
            // bunny.scale.y = 2;
            stageLayer.addChild(bunny);
        }
        return stageLayer;
    }
}

