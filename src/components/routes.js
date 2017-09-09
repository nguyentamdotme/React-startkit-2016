import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './HomePage';
import StoreInput from './StoreInput';
import StoreExport from './StoreExport';

const Routes = () => {
  return (
    <Switch>
      <Route exact
        name="index"
        path="/"
        component={props => <Homepage {...props}/>}
      />

      <Route exact
        name="index"
        path="/store-input"
        component={props => <StoreInput {...props}/>}
      />

      <Route exact
        name="index"
        path="/store-export"
        component={props => <StoreExport {...props}/>}
      />

    </Switch>
  );
}

export default Routes;
