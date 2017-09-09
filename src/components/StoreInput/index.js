import React from 'react';

import ListInput from './ListInput';
import ButtonAddProduct from './ButtonAddProduct';

import('./index.scss');

class InputStore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="inputStoreWrapper">
        <ListInput/>
        <ButtonAddProduct/>
      </div>
    );
  }
}

export default InputStore;
