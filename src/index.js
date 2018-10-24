import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class Hello extends React.Component{
  render() { 
    const name = 'react'
    return <div>Wellcome! {name||'user'}!{
      !name && <p>You need log in</p>
    }</div>
  }
}
ReactDOM.render(<Hello name="D1n910" />, document.querySelector('#app'));