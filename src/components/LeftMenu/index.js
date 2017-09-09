import React from 'react';
import { Link } from 'react-router-dom'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

import('./index.scss');

const LeftMenu = () => {
    return(
      <div className="leftMenu">
        <List>
          <ListItem button>
            <Link to="/store-input">
              <ListItemText primary="Nhập Hàng"/>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/store-export">
              <ListItemText primary="Xuất Hàng" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <Link to="/analytic">
              <ListItemText primary="Thống Kê" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/input">
              <ListItemText primary="Spam" />
            </Link>
          </ListItem>
        </List>
      </div>
    );
}

export default LeftMenu;
