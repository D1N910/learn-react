import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class UserInfo extends React.Component{
  render() {
    let dom = <div></div>;
    if (this.props.type == 'admin') {
      dom = <p>You are admin.</p>
    } else if (this.props.type == 'vip') {
      dom = <p>You are vip.</p>
    } else {
      dom = <p>Hello React.</p>
    }

    return dom;
  }
}
ReactDOM.render(<UserInfo type="admin" />, document.querySelector('#app'));