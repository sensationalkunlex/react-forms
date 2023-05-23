import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import WindowTracker from './components/WindowTracker';
import React from 'react';
function App() {
  const [show, setShow] = React.useState(true)
    
  function toggle() {
      setShow(prevShow => !prevShow)
  }

  return (

    <div className="App">

      <Form/>
      <div className="container">
          <button onClick={toggle}>
              Toggle WindowTracker
          </button>
          {show && <WindowTracker />}
      </div>
    </div>
  );

}

export default App;
