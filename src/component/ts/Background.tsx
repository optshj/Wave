import React from 'react';
import { useCanvas } from './useCanvas';
import { Wave } from './Wave';


type DrawingProps = {
	canvasWidth:number;
	canvasHeight:number;
};

const Background: React.FC<DrawingProps> = ({canvasWidth,canvasHeight}) => {
	const fillBackground = (ctx:CanvasRenderingContext2D) => {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0,0,canvasWidth,canvasHeight);
	};
	
	const wave1 = new Wave(1,'#64D6FF',canvasWidth,canvasHeight);
	const wave2 = new Wave(2,'#46FFFF',canvasWidth,canvasHeight);
	const wave3 = new Wave(3,'#8282FF',canvasWidth,canvasHeight);
	
	const animate = (ctx:CanvasRenderingContext2D) => {
		fillBackground(ctx);
		wave1.draw(ctx);
		wave2.draw(ctx);
		wave3.draw(ctx);
	};
	const canvasRef = useCanvas(canvasWidth,canvasHeight,animate);
	
	return <canvas ref={canvasRef}/>;
}
export default Background;