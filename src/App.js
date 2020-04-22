import React, {useState} from 'react';
import './App.css';
import Select from 'react-select'
import statuses from './statuses';
function App() {
const [currentStatus, setCurrentStatus] = useState(0);
const [currentMessage, setCurrentMessage] = useState('');

  const options = Object.keys(statuses).map(status=> ({value:status,label:status}));
  const handleOnChange = (elem) => {
    setCurrentStatus(elem.value);
    setCurrentMessage(statuses[elem.value].message)
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tell me what this status mean</h1>
      </header>
      <article>
        <Select id="selector-status" options={options} onChange={handleOnChange} />
        <p data-cy="status-message">{currentMessage}</p>
        <img data-cy="status-image" className="img-cato" src={`https://http.cat/${currentStatus}`} alt={`cato-${currentMessage}`}/>
      </article>
    </div>
  );
}

export default App;
