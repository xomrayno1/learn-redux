import logo from './logo.svg';
import './App.css';
import DemoRef from './components/DemoRef'
import DemoUseRef from './components/DemoUseRef'
import { useState } from 'react';
import _, { slice } from 'lodash'

function App() {
  // const [showClock, setShowClock] = useState(true)
  // function handleOnClick(){
  //   setShowClock(false);
  // }

  

  return (
    <div className="App">
      {/* <button  onClick={handleOnClick}>Hide Clock</button>
      {showClock && <Clock  />}
        */}
      <DemoUseRef/>
      <DemoRef/>
    </div>
  );
}

export default App;
