import React from 'react';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BuddyList from './components/BuddyList';
console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <div className="App">
        <Register />
        <BuddyList />
      </div>
    </Router>
  );
}

export default App;
