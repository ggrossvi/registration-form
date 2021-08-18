import React from 'react';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BuddyList from './components/BuddyList';
console.log(process.env.REACT_APP_GOOGLE_KEY)
// import Map from './components/Map';






function App() {
  return (
    <Router>
      <div className="App">
        <Register />
        <BuddyList />
        <Map />
        {/* <div style= {{width:'100vw', height: '100vh'}}>

        <WrappedMap 
          GoogleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY}`}
          
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}          
        />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
