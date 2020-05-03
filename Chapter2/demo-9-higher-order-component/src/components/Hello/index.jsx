{/* 老生常谈了 */}
import React from 'react';

const Hello = (BasicComponent) => {
	{/* 返回一个组件 */}
	return class extends React.Component {
		render() {
			return <div>
				{/* 我们要的功能 */}
				<p>你好</p>
				{/* 传进来的组件 透传 props */}
				<BasicComponent {...this.props} />
			</div>
		}
	}
}

{/* 导出 高阶组件方法 */}
export default Hello;
