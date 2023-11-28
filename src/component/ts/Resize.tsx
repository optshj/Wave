import { useEffect, useState, RefObject} from 'react';

export const useWindowSize = (ref:RefObject<HTMLElement>) => {
	const [size,setSize] = useState({
		width:0,
		height:0
	});
	useEffect(() => {
		const setWindowSize = () => {
			if (ref.current){
				setSize({
					width:ref.current.clientWidth,
					height:ref.current.clientHeight
				});
			};
		};
		setWindowSize();
		window.addEventListener('resize',setWindowSize);
		return () => {
			window.removeEventListener('resize',setWindowSize);
		};
	},[]);
	const windowRects = size;
	
	return windowRects;
}