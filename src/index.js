import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class Hello extends React.Component{
  render() { 
    return <div>
      <h1>Hello React</h1>
      <p className="text">测试</p>
    </div>
  }
}
ReactDOM.render(<Hello />, document.querySelector('#app'));