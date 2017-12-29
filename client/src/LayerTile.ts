import * as PIXI from 'pixi.js';
import { Block } from "./Block";
import { Background } from "./Background";

export class LayerTile {

    public arrayBlock: Block[][];

    constructor() {
        this.arrayBlock = [];
    }

    load(stageLayer: PIXI.Container): PIXI.Container {
        let background = new Background(0, 0);
        stageLayer.addChild(background.sprite);

        for (let x = 0; x < 10; x++) {
            this.arrayBlock[x] = [];
            for (let y = 0; y < 10; y++) {
                let block = new Block(x * 120, y * 120);
                this.arrayBlock[x][y] = block;
                stageLayer.addChild(block.sprite);
            }
        }

        return stageLayer;
    }
}

