import { Point } from './Point';
export class Wave{
	private centerX:number;
	private centerY:number;
	private canvasWidth:number;
	private canvasHeight:number;
	private point:any;
	private points:any[];
	private color:string;
	private numberOfPoints:number;
	private pointGap:number;
	private cnt:number;
	constructor(cnt:number,color:string,canvasWidth:number,canvasHeight:number){
		this.cnt = cnt;
		this.color = color;
		this.points = [];
		this.numberOfPoints = 6;
		
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		
		this.centerX = canvasWidth/2;
		this.centerY = canvasHeight/2;
		this.pointGap = this.canvasWidth/(this.numberOfPoints-1);
		
		this.init();
	}
	init(){
		for (let i=0;i<this.numberOfPoints;i++){
			if (i-this.cnt < 0 ){
				const now:number = this.numberOfPoints - this.cnt + i ;
				this.points[now] =  new Point(now,this.pointGap*now,this.centerY);
			}
			else {
				const now:number = i - this.cnt
				this.points[now] = new Point(now,this.pointGap*now,this.centerY);
			}
			
		}
	}
	draw(ctx:CanvasRenderingContext2D){
		ctx.beginPath();
		let prevX = this.points[0].x;
		let prevY = this.points[0].y;
		ctx.moveTo(prevX,prevY);
		for (let i=0;i<this.numberOfPoints;i++){
			const nx = (prevX+this.points[i].x)/2;
			const ny = (prevY+this.points[i].y)/2;
			ctx.quadraticCurveTo(prevX,prevY,nx,ny);
			
			prevX = this.points[i].x;
			prevY = this.points[i].y;
			
			if (i !== 0 && i !== this.numberOfPoints -1){
				this.points[i].update();
			}
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