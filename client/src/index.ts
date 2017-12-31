import * as PIXI from 'pixi.js';
import { LayerTile } from "./LayerTile";
import { LayerDynamicItem } from "./LayerDynamicItem";
import { Player } from './Player';



var renderer = PIXI.autoDetectRenderer(500, 500, { backgroundColor: 0x1099bb });
document.body.appendChild(renderer.view);

var stageGame = new PIXI.Container();

var layerTile = new LayerTile();
layerTile.load(stageGame);

var layerDynamicItem = new LayerDynamicItem();
layerDynamicItem.load(stageGame);
layerDynamicItem.arrayPlayer[1].sprite.position.y = 300;


animate();


//LOAD KEYBOARD LISTENER 
//document.addEventListener('keydown', keyboardInput);

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
    this.press = function() { };
    this.release = function() { };

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
    down = new KeyboardState(40);


right.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 2;
  layerDynamicItem.arrayPlayer[1].velocityY = 0;
};

right.release = () => {
  if (!left.isDown && layerDynamicItem.arrayPlayer[1].velocityY === 0) {
    layerDynamicItem.arrayPlayer[1].velocityX = 0;
  }
};

left.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = -2;
  layerDynamicItem.arrayPlayer[1].velocityY = 0;
};

left.release = () => {
  if (!right.isDown && layerDynamicItem.arrayPlayer[1].velocityY === 0) {
    layerDynamicItem.arrayPlayer[1].velocityX = 0;
  }
};

up.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 0;
  layerDynamicItem.arrayPlayer[1].velocityY = -2;
};

up.release = () => {
  if (!down.isDown && layerDynamicItem.arrayPlayer[1].velocityX === 0) {
    layerDynamicItem.arrayPlayer[1].velocityY = 0;
  }
};

down.press = () => {
  layerDynamicItem.arrayPlayer[1].velocityX = 0;
  layerDynamicItem.arrayPlayer[1].velocityY = 2;
};

down.release = () => {
  if (!up.isDown && layerDynamicItem.arrayPlayer[1].velocityX === 0) {
    layerDynamicItem.arrayPlayer[1].velocityY = 0;
  }
};


function animate() {
  requestAnimationFrame(animate);
  // var bunny = stage.getChildAt(0);

  layerDynamicItem.arrayPlayer[1].animate();

  renderer.render(stageGame);
  //renderer.render(stage);
}

/*
function keyboardInput(event: KeyboardEvent) {
  // PRESS LEFT ARROW OR 'A' KEY
  if (event.keyCode == 37 || event.keyCode == 65) {
    layerDynamicItem.arrayPlayer[1].sprite.x =  50;
  }
  // PRESS UP ARROW OR 'W' KEY
  else if (event.keyCode == 38 || event.keyCode == 87) {
    layerDynamicItem.arrayPlayer[1].sprite.y -= 10;
 
  }
  // PRESS RIGHT ARROW OR 'D' KEY
  else if (event.keyCode == 39 || event.keyCode == 68) {
    layerDynamicItem.arrayPlayer[1].sprite.x += 10;
    
  }
  // PRESS DOWN ARROW OR 'S' KEY
  else if (event.keyCode == 40 || event.keyCode == 83) {
    layerDynamicItem.arrayPlayer[1].sprite.y += 10;
    
  }
}*/
