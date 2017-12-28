import * as PIXI from 'pixi.js';
import { LayerTile } from "./LayerTile";
import { LayerDynamicItem } from "./LayerDynamicItem";

var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

 var stageGame = new PIXI.Container();
 
 var layerTile =  new LayerTile();
 layerTile.load(stageGame);
 
 var layerDynamicItem = new LayerDynamicItem();
 layerDynamicItem.load(stageGame);

animate();


function animate() {
    requestAnimationFrame(animate);
   // var bunny = stage.getChildAt(0);
   // bunny.rotation += 0.01;
    renderer.render(stageGame);
  //  renderer.render(stage);
}