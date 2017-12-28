import * as PIXI from 'pixi.js';
import { Block } from "./Block";
import { Player } from "./Player";


export class LayerTile {
    public arrayBlock: Block[][];
    constructor() {
        this.arrayBlock = [];
    }

    // load(stageLayer: PIXI.Container): PIXI.Container {

    //     var texture = PIXI.Texture.fromImage('bunny.png');
    //     var block = new Block();
    //     for (let index = 0; index < 25; index++) {

    //         var bunny = new PIXI.Sprite(texture);
    //         bunny.anchor.x = 0.5;
    //         bunny.anchor.y = 0.5;
    //         bunny.position.x = block.arrayBlock[0][index];
    //         bunny.position.y = block.arrayBlock[1][index];
    //         bunny.scale.x = 2;
    //         bunny.scale.y = 2;
    //         stageLayer.addChild(bunny);
    //     }
    //     return stageLayer;
    // }

    load(stageLayer: PIXI.Container): PIXI.Container {
     
        for (let x = 0; x < 10; x++) {
            this.arrayBlock[x] = [];
            for (let y = 0; y < 10; y++) {
                let block = new Block(x * 120, y * 120);
                this.arrayBlock[x][y] = block;
                stageLayer.addChild(block.sprite);
            }
        }
        // let player =  new Player(55,10);
        // stageLayer.addChild(player.sprite);
        return stageLayer;
    }
}

