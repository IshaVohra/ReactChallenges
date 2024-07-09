import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import ProgressBar from './ProgressBar';
import Switch from './Switch';

function App() {
  const [widthVal, setWidthVal] = useState(0);
  return (
    <div className="App">
      <ProgressBar width={widthVal} />
      <input type="number" value={widthVal} onChange={(e)=>{setWidthVal(e.target.value)}} />

      <Switch />
    </div>
  );
}

export default App;
