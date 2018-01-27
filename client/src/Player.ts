export class Player {

    private _sprite: PIXI.Sprite;
    public velocityX: number;
    public velocityY: number;
   
    constructor(x: number, y: number) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('assets/player.png'));
        // this._sprite.position.x = x;
        // this._sprite.position.y = y;
        this._sprite.x = x;
        this._sprite.y = y;
        this.velocityX = 0;
        this.velocityY = 0;

    }
    //#region GETTER-SETTER
    get sprite(): PIXI.Sprite {
        return this._sprite;
    }

    set sprite(spriteSet: PIXI.Sprite) {
        this._sprite = spriteSet;
    }

    animate() {
        this._sprite.x += this.velocityX;
        this._sprite.y += this.velocityY;
    }
    //#endregion
}