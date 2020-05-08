import React from 'react';
import { Header } from './views/Header';
import { Switch, Route } from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <div>oli</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
