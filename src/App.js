import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Gallery from './components/Gallery'
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/mountain" exact component={Gallery} />
        <Route path="/beach" exact component={Gallery} />
        <Route path="/bird" exact component={Gallery} />
        <Route path="/food" exact component={Gallery} />
      </Switch>
    </Fragment>
  );
}

export default App;
