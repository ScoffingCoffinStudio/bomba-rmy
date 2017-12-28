import * as PIXI from 'pixi.js';
import { Player } from "./Player";
export class LayerDynamicItem {


    constructor() {

    }

    load(stageLayer: PIXI.Container): PIXI.Container {

        let player =  new Player(55,10);
        stageLayer.addChild(player.sprite);
        return stageLayer;
            
    }

}