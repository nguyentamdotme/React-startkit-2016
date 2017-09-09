import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import('../../css/index.scss');

const Login = () => {
  return(
    <Grid container gutter={8}>
      <Grid item xs={12} sm={12} md={12}>
        <Paper>Content</Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Paper className="test2">Content</Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <Paper className="test">Content</Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
