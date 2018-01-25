import { Material } from "./Material";

export class Explosion {

    private _sprite: PIXI.Sprite;
    private _material: Material;

   constructor(x: number, y: number,position:string) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('explosion.png'));
        // if(position == "vertical"){
        //     this._sprite.rotation=Math.PI/2;
        // }
        
        this._sprite.position.x = x;
        this._sprite.position.y = y;        
        this._material = Material.Destructible;

    }

    public get sprite(): PIXI.Sprite {
		return this._sprite;
	}

	public set sprite(value: PIXI.Sprite) {
		this._sprite = value;
    }

	public get material(): Material {
		return this._material;
	}

	public set material(value: Material) {
		this._material = value;
	}
    




}