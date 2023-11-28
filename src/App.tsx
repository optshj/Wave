import React, {RefObject, useRef} from 'react';
import style from './App.module.css';

import Background from './component/ts/Background';
import { useWindowSize } from './component/ts/Resize';

function App() {
	const mainRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const windowRect = useWindowSize(mainRef);
	return (
		<div ref={mainRef} className={style.main}>
			<Background canvasWidth={windowRect.width} canvasHeight={windowRect.height}/>
		</div>
	);
}

export default App;
