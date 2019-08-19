import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CatalogScreen from './containers/CatalogScreen';
import PagesScreen from './containers/PagesScreen';
import PageCreateScreen from './containers/PageCreateScreen';
import PageEditScreen from './containers/PageEditScreen';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationMenu />
        <Switch>
          <Route exact path="/" component={CatalogScreen} />
          <Route path="/pages" component={PagesScreen} />
          <Route path="/newpage" component={PageCreateScreen} />
          <Route path="/page/:id" component={PageEditScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
