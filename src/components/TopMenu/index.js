import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';

import('./index.scss');
import ProfileMenuTopMenu from './ProfileMenuTopMenu';
import LeftMenu from '../LeftMenu';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      openDrawers: false
    }
  }
  handleDrawers= () => {
    this.setState({openDrawers: !this.state.openDrawers});
  }
  render() {
    return(
      <div className="topMenu">
        <Drawer
          anchor="left"
          open={this.state.openDrawers}
          onClick={this.handleDrawers}
        >
          <LeftMenu/>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="Menu"
              className="leftMenuDrawers"
              onClick={this.handleDrawers}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              type="title"
              color="inherit"
              style={{flex: 1}}
              className="nameAppTopMenu"
            >
              Admin Dashboard
            </Typography>
            {
              !this.state.isLogin ? <Button color="contrast">Login</Button> :
              <ProfileMenuTopMenu/>
            }
            <label>
            </label>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopMenu;
