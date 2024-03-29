import React from 'react';
import { Header } from './views/Header';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { PortfolioProvider } from './PortfolioContext'
import { Footer } from './views/Footer';
import { Home } from './views/Home/Home';
import { Page } from './views/Page/Page'
library.add(fab)

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <Page />
          </Route>
        </Switch>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
