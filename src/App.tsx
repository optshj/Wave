import React from 'react';
import Background from './component/ts/Background';

function App() {
  return (
    <div>
		<Background canvasWidth={window.innerWidth} canvasHeight={window.innerHeight}/>
    </div>
  );
}

export default App;
