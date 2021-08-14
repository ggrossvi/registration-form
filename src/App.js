import React from 'react';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Register />
      </div>
    </Router>
  );
}

export default App;
