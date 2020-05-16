// 筛选条件
import './index.less'

function todoFilterCondition(props) {
	return <select className="select" defaultValue={props.selectedType} onChange={props.changeShowListType}>
		{/* 选项 */}
		{
			props.options.map(item => {
			return <option key={item.value} value={item.value}>{item.label}</option>
			})
		}
	</select>
}

export default todoFilterCondition
