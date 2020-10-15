import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/landing'
import OrphanageMap from './Pages/OrphanageMap'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact componet={Landing} />
        <Route path="/app" componet={OrphanageMap} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;