import React from 'react';
import { useCanvas } from './useCanvas';
import { WaveGroup } from './WaveGroup';


type DrawingProps = {
	canvasWidth:number;
	canvasHeight:number;
};

const Background: React.FC<DrawingProps> = ({canvasWidth,canvasHeight}) => {
	const fillBackground = (ctx:CanvasRenderingContext2D) => {
		ctx.fillStyle = '#FFFFFF';
		ctx.fillRect(0,0,canvasWidth,canvasHeight);
	};
	const wave = new WaveGroup(canvasWidth,canvasHeight);

	
	const animate = (ctx:CanvasRenderingContext2D) => {
		fillBackground(ctx);
		wave.draw(ctx);
	};
	const canvasRef = useCanvas(canvasWidth,canvasHeight,animate);
	
	return <canvas ref={canvasRef}/>;
}
export default Background;