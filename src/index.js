import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class TodoList extends React.Component{
  render() {
    return <ul>
      {
        this.props.list.map((item) => (
          <li>{item}</li>
        ))
      }
      </ul>;
  }
}
ReactDOM.render(<TodoList list={['Eat', 'Sleep', 'Drink']} />, document.querySelector('#app'));