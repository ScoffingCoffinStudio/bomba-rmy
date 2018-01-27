import { Material } from "./Material";
export class Block {

    private _sprite: PIXI.Sprite;
    private _material: Material;

    constructor(x: number, y: number) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('assets/block.png'));
        this._sprite.position.x = x;
        this._sprite.position.y = y;     
        this._material = Material.Destructible;

    }
    
    //#region GETTER-SETTER
    get sprite(): PIXI.Sprite {
        return this._sprite;
    }

    set sprite(spriteSet: PIXI.Sprite) {
        this._sprite = spriteSet;
    }

    get material(): Material {
        return this._material;
    }

    set material(materialSet: Material) {
        this._material = materialSet;
    }
    //#endregion


    

























    //public arrayBlock: Block[][];
    // public arrayBlock: number[][];
    // constructor() {
    //     // this.arrayBlock = [];
    //     for (var i: number = 0; i < 10; i++) {
    //         // this.arrayBlock[i] = [200+(i*50)];
    //         for (var j: number = 0; j < 10; j++) {
    //             this.arrayBlock[i][j] = [200 + (i * 50)][200 + (i * 50)];
    //         }
    //     }
    // }
}