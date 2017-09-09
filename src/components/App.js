import React from 'react';
import ReactDOM from 'react-dom';
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';

import('./css/index.scss');

//import config
import WhiteTheme from './themes/WhiteTheme';

//import Component
import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu'

import Grid from 'material-ui/Grid';

import Routes from './routes';

const theme = createMuiTheme(WhiteTheme);

export default class App extends React.Component{
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <Grid container gutter={0}>
          <Grid item xs={12} sm={12} md={12}>
            <TopMenu/>
          </Grid>
          <Grid item xs={1} sm={1} md={2} className="leftMenuWrapper">
            <Grid container justify="flex-start">
              <Grid item>
                <LeftMenu/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Routes/>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
