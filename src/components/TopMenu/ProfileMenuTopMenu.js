import React from 'react';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List';

import('./ProfileMenuTopMenu.scss');

class ProfileMenuTopMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: undefined,
      open: false,
    };
  }
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    return(
      <div className="profileMenuTopMenu">
        <List className="profileUser">
          <ListItem button onClick={this.handleClick}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"className="avatarTopMenu">
                TN
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Tam Nguyen" className="nameUserTopMenu"/>
          </ListItem>
        </List>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfileMenuTopMenu;
