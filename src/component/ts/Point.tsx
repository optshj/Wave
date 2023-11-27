export class Point{
	private x:number;
	private y:number;
	private fieldY:number;
	private speed:number;
	private cur:number;
	private max:number;
	
	constructor(index:number,x:number,y:number){
		this.x = x;
		this.y = y;
		this.fieldY = y;
		this.speed = 0.1;
		this.cur = index;
		this.max = Math.random() *100 + 150;
	}
	update(){
		this.cur += this.speed;
		this.y = this.fieldY + Math.sin(this.cur) * this.max;
	}
}
