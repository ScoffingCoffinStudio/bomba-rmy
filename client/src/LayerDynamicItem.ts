import * as PIXI from 'pixi.js';
import { Player } from "./Player";
export class LayerDynamicItem {

    public arrayPlayer: Player[];
    constructor() {
        this.arrayPlayer = [];
    }

    load(stageLayer: PIXI.Container): PIXI.Container {

        let player =  new Player(55,10);
        stageLayer.addChild(player.sprite);
        this.arrayPlayer[1] = player;
        return stageLayer;
            
    }

}