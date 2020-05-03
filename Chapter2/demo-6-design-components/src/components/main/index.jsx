import React from 'react'

import Header from '../Header'
import Section from '../Section'

export default class Main extends React.Component {
	render() {
		const articleList = [1, 2, 3];
		const diaryList = [1, 2, 3, 4, 5];
		return (
			<div>
				<Header title={this.props.title + '的博客'} />
				<Section title="文章列表" list={articleList} />
				<Section title="日志列表" list={diaryList} />
			</div>
    )
  }
}

// 原代码
// export default class Main extends React.Component {
// 	render() {
// 		const articleList = [1, 2, 3];
// 		const diaryList = [1, 2, 3, 4, 5];
// 		return (
// 			<div>
// 				<div className="header">{this.props.title}的博客</div>
// 				<div className="section">
// 					<div className="title">文章列表</div>
// 					<ul>
// 						{
// 							articleList.map(item =>
// 								<li key={item.toString()}>{item}</li>
// 							)
// 						}
//           </ul>
//         </div>
// 				<div className="seciton">
// 						<div className="title">日志列表</div>
// 						<ul>
// 							{
// 								diaryList.map(item =>
// 									<li key={item.toString()}>{item}</li>
// 								)
// 							}
// 						</ul>
// 				</div>
// 			</div>
//     )
//   }
// }

