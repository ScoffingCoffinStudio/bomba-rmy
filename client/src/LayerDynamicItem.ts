import * as PIXI from 'pixi.js';
import { Player } from "./Player";
import { Explosion } from "./Explosion";
export class LayerDynamicItem {

    public arrayPlayer: Player[];
    public arrayExplosion: Explosion[];


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

    destroyBomb(stageLayer: PIXI.Container, bomb: any): PIXI.Container {
        setTimeout(function () {
            // this.arrayExplosion = [new Explosion(bomb.x + 50, bomb.y - 200, "vertical"), new Explosion(bomb.x + 50, bomb.y + 45, "vertical"), new Explosion(bomb.x - 190, bomb.y + 10, "horizontal"), new Explosion(bomb.x + 40, bomb.y + 10, "horizontal")];

            // for (let entry of this.arrayExplosion) {
            //     stageLayer.addChild(entry.sprite);
            // }
            bomb.destroy();

            // setTimeout(function () {
            //     for (let entry of this.arrayExplosion) {          
            //         entry.sprite.destroy();
            //     }
            // }, 100);

            PIXI.loader
                .add('assets/mc.json')
                .load(setupExplosion)


            function setupExplosion() {
                var explosionTextures = [],
                    i;
                for (i = 0; i < 26; i++) {
                    var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
                    explosionTextures.push(texture);
                }

                for (i = 0; i < 50; i++) {
                    // create an explosion AnimatedSprite
                    var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

                    explosion.x = Math.random() * stageLayer.width;
                    explosion.y = Math.random() * stageLayer.height;
                    explosion.anchor.set(0.5);
                    explosion.rotation = Math.random() * Math.PI;
                    explosion.scale.set(0.75 + Math.random() * 0.5);
                    explosion.gotoAndPlay(Math.random() * 27);
                    stageLayer.addChild(explosion);
                }
            }


        }, 2000);

        
        return stageLayer;
    }

}