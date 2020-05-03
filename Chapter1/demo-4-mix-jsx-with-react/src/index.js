import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

/** 循环渲染 */

// Array.map
class TodoList extends React.Component {
    render() {
        return <ul>
            {
                this.props.list.map(element => {
                    return <li key={element}>{element}</li>
                })
            }
        </ul>
    }
}

ReactDOM.render(
    <TodoList list={['Eat', 'Sleep', 'Drink', 'Tom']} />,
    document.getElementById('app')
)

// 构建数组型变量
// class TodoList extends React.Component {
//     render() {
//         let list = []
//         this.props.list.forEach(element => {
//             list.push(<li>{element}</li>)
//         });
//         return <ul>
//             { list }
//         </ul>
//     }
// }

// ReactDOM.render(
//     <TodoList list={['Eat', 'Sleep', 'Drink', 'Tom']} />,
//     document.getElementById('app')
// )

// 普通
// class TodoList extends React.Component {
//     render() {
//         return <ul>
//             <li>Eat</li>
//             <li>Sleep</li>
//             <li>Drink</li>
//         </ul>
//     }
// }

// ReactDOM.render(
//     <TodoList/>,
//     document.getElementById('app')
// )

/** 条件渲染 */
// 场景三
// class UserInfo extends React.Component {
//     render() {
//         let dom = null;

//         const { type } = this.props

//         if (type === 'admin') {
//             dom = <p>你是管理员</p>
//         } else if (type === 'vip') {
//             dom = <p>你好 vip</p>
//         } else {
//             dom = <p>你好 React</p>
//         }
//         return dom;
//     }
// }


// ReactDOM.render(
//     <UserInfo/>,
//     document.getElementById('app')
// )

// 场景二
// class UserInfo extends React.Component {
//     render() {
//         return <div>
//             {
//                 this.props.name ? <p>你好，{this.props.name}!</p> : <p>不好意思，你需要登录</p>
//             }
//         </div>
//     }
// }


// ReactDOM.render(
//     <UserInfo/>,
//     document.getElementById('app')
// )

// 场景一
// class UserInfo extends React.Component {
//     render() {
//         return <div>
//             欢迎 { this.props.name || '用户' }!
//             {
//                 !this.props.name && <p>你需要登录</p>
//             }
//         </div>
//     }
// }


// ReactDOM.render(
//     <UserInfo name="D1n910"/>,
//     document.getElementById('app')
// )