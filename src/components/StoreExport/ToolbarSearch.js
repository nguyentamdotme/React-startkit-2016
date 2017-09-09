import React from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader'

import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Search from 'material-ui-icons/Search';
import CenterFocusWeak from 'material-ui-icons/CenterFocusWeak';


class PaperToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSearch: false,
      delay: 100,
      resultQR: 'No result',
      openScanQR: false
    };
    this.handleScan = this.handleScan.bind(this)
  }
  searchToggle = () => {
    console.log('hello');
    this.setState({openSearch: !this.state.openSearch});
  };
  handleScan = data => {
    console.log(data);
    this.setState({
      resultQR: data,
    })
  };
  handleError= err =>{
    console.error(err)
  };
  openScanQR = () => {
    this.setState({
      openScanQR: !this.state.openScanQR
    })
  }
  render () {
    return (
      <Toolbar style={{padding: '0 10'}}>
        <Grid container>
          <Grid item xs={1}>
            <IconButton
              aria-label="Search"
              onTouchTap={this.searchToggle}
            >
              <Search />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            {
              this.state.openSearch &&
              <TextField
                fullWidth
                placeholder="Tìm kiếm"
              >
              <Search />
              </TextField>
            }
            {
              this.state.openScanQR &&
              <QrReader
                delay={this.state.delay}
                style={{height: 250, width: 200}}
                onError={this.handleError}
                onScan={this.handleScan}
              />
            }
          </Grid>
          <Grid item xs={1} style={{textAlign: 'right'}}>
            <IconButton
              aria-label="QRcodeReader"
              onTouchTap={this.openScanQR}
            >
              <CenterFocusWeak />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
};


export default PaperToolbar;
