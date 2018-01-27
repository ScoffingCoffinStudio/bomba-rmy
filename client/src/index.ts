import * as PIXIS from 'pixi.js';
import { LayerTile } from "./LayerTile";
import { LayerDynamicItem } from "./LayerDynamicItem";
import { Player } from './Player';
import { Bump } from './bump.js';

var bump = new Bump(PIXI);

var renderer = PIXI.autoDetectRenderer(500, 500, { backgroundColor: 0x1099bb });
document.body.appendChild(renderer.view);

var stageGame = new PIXI.Container();

var layerTile = new LayerTile();
layerTile.load(stageGame);

var layerDynamicItem = new LayerDynamicItem();
layerDynamicItem.load(stageGame);






animateStart();















//LOAD KEYBOARD LISTENER 
// faire un truc plus prore
export class KeyboardState {
  public keycode: number;
  public isDown: boolean;
  public isUp: boolean;
  public press: () => void;
  public release: () => void;

  private downHandler: (event: KeyboardEvent) => void;
  private upHandler: (event: KeyboardEvent) => void;

  constructor(keycode: number) {
    this.keycode = keycode;
    this.isDown = false;
    this.isUp = true;
    this.press = function () { };
    this.release = function () { };

    this.downHandler = event => {
      if (event.keyCode === this.keycode) {
        if (this.isUp && this.press) this.press();
        this.isDown = true;
        this.isUp = false;
      }
      event.preventDefault();
    };

    this.upHandler = event => {
      if (event.keyCode === this.keycode) {
        if (this.isDown && this.release) this.release();
        this.isDown = false;
        this.isUp = true;
      }
      event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
      "keydown", this.downHandler.bind(this), false
    );
    window.addEventListener(
      "keyup", this.upHandler.bind(this), false
    );
  }
}

let left = new KeyboardState(37),
  up = new KeyboardState(38),
  right = new KeyboardState(39),
  down = new KeyboardState(40),
  showBomb = new KeyboardState(32);

right.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 10;
  layerDynamicItem.arrayPlayer[1].velocityY = 0;
};

right.release = () => {
  if (!left.isDown && layerDynamicItem.arrayPlayer[1].velocityY === 0) {
    layerDynamicItem.arrayPlayer[1].velocityX = 0;
  }
};

left.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = -10;
  layerDynamicItem.arrayPlayer[1].velocityY = 0;
};

left.release = () => {
  if (!right.isDown && layerDynamicItem.arrayPlayer[1].velocityY === 0) {
    layerDynamicItem.arrayPlayer[1].velocityX = 0;
  }
};

up.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 0;
  layerDynamicItem.arrayPlayer[1].velocityY = -10;
};

up.release = () => {
  if (!down.isDown && layerDynamicItem.arrayPlayer[1].velocityX === 0) {
    layerDynamicItem.arrayPlayer[1].velocityY = 0;
  }
};

down.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 0;
  layerDynamicItem.arrayPlayer[1].velocityY = 10;
};

down.release = () => {
  if (!up.isDown && layerDynamicItem.arrayPlayer[1].velocityX === 0) {
    layerDynamicItem.arrayPlayer[1].velocityY = 0;
  }
};

showBomb.press = () => {
  let bomb = new PIXI.Sprite(PIXI.Texture.fromImage('assets/bomb.png'));

  bomb.x = Math.floor(layerDynamicItem.arrayPlayer[1].sprite.position.x / 50) * 50;
  bomb.y = Math.floor(layerDynamicItem.arrayPlayer[1].sprite.position.y / 50) * 50;

  stageGame.addChild(bomb);
  layerDynamicItem.destroyBomb(stageGame, bomb);
}


function contain(player:Player, container:any) {

  var collision = undefined;

  //Left
  if (player.sprite.x < container.x) {
    player.sprite.x = container.x;
    console.log("Gauche touché");
    collision = "left";
  }

  //Top
  if (player.sprite.y < container.y) {
    player.sprite.y = container.y;
    layerDynamicItem.arrayPlayer[1].velocityY -= 1;
    console.log("Haut touché");
    collision = "top";
  }

  //Right
  if (player.sprite.x + player.sprite.width > container.width) {
    player.sprite.x = container.width - player.sprite.width;
    console.log("Droite touché");
    collision = "right";
  }

  //Bottom
  if (player.sprite.y + player.sprite.height > container.height) {
    player.sprite.y = container.height - player.sprite.height;
    console.log("Bas touché");
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
};



function animateStart() {
  requestAnimationFrame(animateStart);

  layerDynamicItem.arrayPlayer[1].animate();

  var hitWall = contain(layerDynamicItem.arrayPlayer[1], { x: 0, y: 0, width: 500, height: 500 });

  for (let x = 0; x < layerTile.arrayBlock.length; x++) {
    for (let y = 0; y < layerTile.arrayBlock[x].length; y++) {
      layerTile.arrayBlock[x][y];
      bump.rectangleCollision(layerDynamicItem.arrayPlayer[1].sprite, layerTile.arrayBlock[x][y].sprite);
    }
  }
  renderer.render(stageGame);
}







