import { Point } from './Point';
export class Wave{
	private centerX:number;
	private centerY:number;
	private canvasWidth:number;
	private canvasHeight:number;
	private totalPoints:number;
	private points:any[];
	private color:string;
	private pointGap:number;
	private index:number;

	constructor(index:number,totalPoints:number,color:string){
		this.index = index;
		this.totalPoints = totalPoints;
		this.color = color;
		this.points = [];
	}
	resize(canvasWidth:number,canvasHeight:number){
		
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		
		this.centerX = canvasWidth/2;
		this.centerY = canvasHeight/2;
		
		this.pointGap = this.canvasWidth/(this.totalPoints-1);
		
		this.init();
	}
	init(){
		this.points = [];
		for (let i = 0; i<this.totalPoints;i++){
			const point = new Point(
			this.index+i,
			this.pointGap * i,
			this.centerY)
			
			this.points[i] = point;
		};
	}
	
	draw(ctx:CanvasRenderingContext2D){
		ctx.beginPath();
		let prevX = this.points[0].x;
		let prevY = this.points[0].y;
		ctx.moveTo(prevX,prevY);
		for (let i=0;i<this.totalPoints;i++){
			if (i !== 0 && i !== this.totalPoints -1){
				this.points[i].update();
			}
			const nx = (prevX+this.points[i].x)/2;
			const ny = (prevY+this.points[i].y)/2;
			ctx.quadraticCurveTo(prevX,prevY,nx,ny);
			prevX = this.points[i].x;
			prevY = this.points[i].y;
			
		}
		ctx.lineTo(prevX,prevY);
		ctx.lineTo(this.canvasWidth,this.canvasHeight);
		ctx.lineTo(0,this.canvasHeight);
		ctx.lineTo(this.points[0].x,this.points[0].y);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		
	}
	
}