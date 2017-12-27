export class Block {

    public arrayBlock: Block[][];
    //public arrayBlock: number[][] ;
  
    constructor() {
         this.arrayBlock = [];
        for (var x: number = 0; x < 4; x++) {
            // this.arrayBlock[i] = [200+(i*50)];
            // for (var j: number = 0; j < 10; j++) {
                // this.arrayBlock[i][j] = [200 + (i * 50)][200 + (i * 50)];
                this.arrayBlock.push([200 + (x * 60),200 + (2 * 60)]);
            // }
        }
    }

    constructor() {
        this.arrayBlock = [];

        for(var i: number = 0; i < 10; i++) {
            this.arrayBlock[i] = [];
            for(var j: number = 0; j< 10; j++) {
                this.arrayBlock[i][j] = new Block();
            }
        }
    }
}