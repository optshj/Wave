import {Wave} from './Wave';
export class WaveGroup {
	private totalWaves:number;
	private totalPoints:number;
	private color:any;
	private waves:any;
	

	constructor(canvasWidth:number,canvasHeight:number) {
		this.totalWaves = 3;
		this.totalPoints = 6;
		
		this.color = ['rgba(255,0,0,.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)'];
		this.waves = [];
		
		for (let i = 0;i<this.totalWaves;i++){
			const wave = new Wave(i,this.totalPoints,this.color[i]);
			this.waves[i] = wave;
		}
		for (let i = 0; i < this.totalWaves;i++){
			const wave = this.waves[i];
			wave.resize(canvasWidth,canvasHeight);
		}
	}
	draw(ctx:CanvasRenderingContext2D){
		for (let i = 0; i< this.totalWaves; i++){
			const wave = this.waves[i];
			wave.draw(ctx);
		}
	}
}