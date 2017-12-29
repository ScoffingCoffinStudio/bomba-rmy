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
document.addEventListener('keydown', keyboardInput);


function animate() {
  requestAnimationFrame(animate);
  // var bunny = stage.getChildAt(0);
  renderer.render(stageGame);
  //renderer.render(stage);
}


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

}

