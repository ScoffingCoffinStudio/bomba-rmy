import { Material } from "./Material";
export class Background {

    private _sprite: PIXI.Sprite;
    private _material: Material;

    constructor(x: number, y: number) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('background.jpg'));
        this._sprite.position.x = x;
        this._sprite.position.y = y;
        this._material = Material.Indestructible;

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
}