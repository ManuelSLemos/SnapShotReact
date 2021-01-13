import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/mountain" exact component={NotFound} />
        <Route path="/beach" exact component={NotFound} />
        <Route path="/bird" exact component={NotFound} />
        <Route path="/food" exact component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
