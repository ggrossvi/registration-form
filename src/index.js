import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import './index.css';

const Home = () => {
  return <h2>Home</h2>
};

const LogIn = () => {
  return <h2>LogIn</h2>
};

const Register = () => {
  return <h2>Register</h2>
};

const Buddyup = () => {
  return <h2>Buddyup</h2>
};

const Edit = () => {
  return <h2>Edit</h2>
};

const NotFound = () => {
  return <h2>Page Not found.</h2>;
};

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact = {true} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/buddyup" component={Buddyup} />
          <Route path="/edit" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1>Welcome to Walking Buddy</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
