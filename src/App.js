import React from 'react';
import { Header } from './views/Header';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './views/Footer';
import { Home } from './views/Home/Home';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
