import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class Hello extends React.Component{
  render() { 
    return <h1>Hello React</h1>
  }
}
ReactDOM.render(<Hello />, document.querySelector('#app'));