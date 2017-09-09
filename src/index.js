import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, {BrowserRouter} } from 'react-router-dom'

import App from './components/App'

injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App/>
 </BrowserRouter>,
  document.getElementById('root')
);
