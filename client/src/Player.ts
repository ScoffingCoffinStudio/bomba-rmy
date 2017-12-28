export class Player {

    private _sprite: PIXI.Sprite;
   

    constructor(x: number, y: number) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('player.png'));
        this._sprite.position.x = x;
        this._sprite.position.y = y;
      

    }
    //#region GETTER-SETTER
    get sprite(): PIXI.Sprite {
        return this._sprite;
    }

    set sprite(spriteSet: PIXI.Sprite) {
        this._sprite = spriteSet;
    }
}