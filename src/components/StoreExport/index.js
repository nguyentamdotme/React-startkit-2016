import React from 'react';

import ListExport from './ListExport';

import('./index.scss');

class InputStore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="inputStoreWrapper">
        <ListExport/>
      </div>
    );
  }
}

export default InputStore;
