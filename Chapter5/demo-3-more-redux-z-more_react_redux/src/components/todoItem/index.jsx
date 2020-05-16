
import './index.less'

function todoItem(props) {
	return <div
		className={`todo-item ${props.done ? 'todo-item_done' : 'todo-item_no-done'}`}
		onClick={props.onClick}
	>
		<span>{props.text}</span> <button onClick={props.onDelete}>删除</button>
	</div>
}

export default todoItem
