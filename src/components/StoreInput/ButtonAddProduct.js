import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import FormAddProduct from './FromAddProduct';
import('./ButtonAddProduct.scss');

class ButtonAddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  handleRequestClose = () => {
    this.setState({isOpen: false});
  };

  handleRequestOpen = () => {
    this.setState({isOpen: true});
  }
  render() {
    return (
      <div>
        <Button
          fab
          color="accent"
          className='btnAddItemInputList'
          onClick={this.handleRequestOpen}
        >
          <Add/>
        </Button>
        <Dialog
          maxWidth='md'
          open={this.state.isOpen}
          transition={<Slide direction="up" />}
          onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {"Thêm sản phẩm mới"}
          </DialogTitle>
          <DialogContent className="dialogAddProduct">
            <FormAddProduct/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="accent">
              Hủy
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Thêm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ButtonAddProduct;
