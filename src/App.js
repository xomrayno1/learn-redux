
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'
import CountComponent from './components/CountComponent';

function App() {
  
  return (
    <div className="App">
        <CountComponent  />
    </div>
  );
}

export default App;
