import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

import Main from './Main/index'

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = null
}

componentDidMount() {
  this.myRef.focus()
}

render() {
    // 在这里编写JSX循环渲染代码，按题目要求返回
    return <div>
      <input ref={ref => {this.myRef = ref}} />
      <Main hour="16"/>
      {
        window.animals.map((item,i)=>{return item.name + '吃' + window.food[item.type]})
      }
    </div>
}
}
ReactDOM.render(<TodoList list={['Eat', 'Sleep', 'Drink', 'Dance']} />, document.querySelector('#app'));
