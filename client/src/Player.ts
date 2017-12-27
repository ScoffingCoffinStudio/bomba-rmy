export class Player {
    
        //public arrayBlock: Block[][];
        public arrayPlayer: number[][];
        constructor() {
            // this.arrayBlock = [];
            for (var i: number = 0; i < 3; i++) {
                // this.arrayBlock[i] = [200+(i*50)];
                for (var j: number = 0; j < 3; j++) {
                    this.arrayPlayer[i][j] = [50 + (i * 50)][200 + (i * 50)];
                }
            }
        }
    }