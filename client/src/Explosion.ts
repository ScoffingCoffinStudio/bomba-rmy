import { Material } from "./Material";

export class Explosion {

    private _sprite: PIXI.Sprite;
    private _material: Material;

   constructor(x: number, y: number,position:string) {
        this._sprite = new PIXI.Sprite(PIXI.Texture.fromImage('explosion.png'));
        if(position == "vertical"){
            this._sprite.rotation=Math.PI/2;
        }
        
        this._sprite.position.x = x;
        this._sprite.position.y = y;        
        this._material = Material.Destructible;

    }

     get sprite(): PIXI.Sprite {
		return this._sprite;
	}

	 set sprite(value: PIXI.Sprite) {
		this._sprite = value;
    }

	 get material(): Material {
		return this._material;
	}
 
	 set material(value: Material) {
		this._material = value;
	}
    




}